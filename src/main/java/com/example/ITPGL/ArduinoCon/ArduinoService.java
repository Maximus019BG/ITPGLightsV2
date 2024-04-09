package com.example.ITPGL.ArduinoCon;

import com.fazecast.jSerialComm.*;
import org.springframework.stereotype.Service;

@Service
public class ArduinoService {

    private SerialPort comPort;

    public ArduinoService() {
        comPort = SerialPort.getCommPorts()[0];
        comPort.openPort();
        comPort.setBaudRate(9600);
    }

    public void sendCommand(char command) {
        byte[] commandBytes = new byte[]{(byte) command};
        comPort.writeBytes(commandBytes, 1);

        System.out.println("Command sent: " + command);
    }
}