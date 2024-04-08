#include <jni.h>
#include <iostream>
#include <string>
#include <winsock2.h>
#include <ws2bth.h>
#include <BluetoothAPIs.h>
#include <stdexcept>
#include "functions.h"

extern "C" JNIEXPORT void JNICALL
Java_com_example_ITPGL_cppFuncs_Connector_ConnectToBluetooth(JNIEnv* env, jclass /* this */) {
    Connect_to_bluetooth_device();
}