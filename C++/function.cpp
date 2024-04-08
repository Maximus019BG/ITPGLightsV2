#include <winsock2.h>
#include <ws2bth.h>
#include <BluetoothAPIs.h>
#include <iostream>
#include <string>
#include <stdexcept>
#include <cstdint>

#include "../C++/functions.h"

#pragma comment(lib, "Bthprops.lib")
#pragma comment(lib, "Ws2_32.lib") 


void Connect_to_bluetooth_device() {
    WSADATA wsaData;
    HANDLE hRadio = NULL, hFind = NULL;
    BLUETOOTH_FIND_RADIO_PARAMS btfrp = { sizeof(btfrp) };
    BLUETOOTH_DEVICE_SEARCH_PARAMS btsp = { sizeof(BLUETOOTH_DEVICE_SEARCH_PARAMS) };
    BLUETOOTH_DEVICE_INFO btdi = { sizeof(BLUETOOTH_DEVICE_INFO), 0, };

    try {
        // Initialize Winsock
        if (WSAStartup(MAKEWORD(2,2), &wsaData) != 0) {
            throw std::runtime_error("WSAStartup failed");
        }

        // Find the first Bluetooth radio
        if (BluetoothFindFirstRadio(&btfrp, &hRadio) != ERROR_SUCCESS) {
            throw std::runtime_error("No Bluetooth radios found");
        }

        // Set the search parameters
        btsp.fReturnAuthenticated = TRUE;
        btsp.fReturnRemembered = TRUE;
        btsp.fReturnUnknown = TRUE;
        btsp.fReturnConnected = TRUE;
        btsp.fIssueInquiry = TRUE;
        btsp.cTimeoutMultiplier = 2;
        btsp.hRadio = hRadio;

        // Find the first Bluetooth device
        hFind = BluetoothFindFirstDevice(&btsp, &btdi);
        if (hFind == NULL) {
            throw std::runtime_error("No Bluetooth devices found");
        }

        // Print the name and address of each device
        do {
            std::cout << "Device: " << btdi.szName << ", Address: " <<
                btdi.Address.rgBytes[5] << ":" <<
                btdi.Address.rgBytes[4] << ":" <<
                btdi.Address.rgBytes[3] << ":" <<
                btdi.Address.rgBytes[2] << ":" <<
                btdi.Address.rgBytes[1] << ":" <<
                btdi.Address.rgBytes[0] << "\n";
        } while (BluetoothFindNextDevice(hFind, &btdi));

        // Prompt the user to select a device
        std::cout << "Enter the MAC address of the device you want to connect to: ";
        std::string mac_address;
        std::cin >> mac_address;

       

        //TODO: Connect to the device using the MAC address
        //TODO:Pair with the device if not already paired
        //TODO:Send data to the device
     
        // // Close the socket
        // closesocket(s);

        // Clean up
        if (hFind && !BluetoothFindDeviceClose(hFind)) {
            throw std::runtime_error("BluetoothFindDeviceClose failed");
        }
        if (hRadio && !BluetoothFindRadioClose(hRadio)) {
            throw std::runtime_error("BluetoothFindRadioClose failed");
        }
        if (WSACleanup() == SOCKET_ERROR) {
            throw std::runtime_error("WSACleanup failed");
        }
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << "\n";
        // Clean up in case of error
        if (hFind) BluetoothFindDeviceClose(hFind);
        if (hRadio) BluetoothFindRadioClose(hRadio);
        WSACleanup();
    }
}