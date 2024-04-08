package com.example.ITPGL.ArduinoCon;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ArduinoService {
    private SerialPort comPort;

    public ArduinoService(@Value("${arduino.port-description}") String portDescription) {
        comPort = SerialPort.getCommPort(portDescription);
        comPort.setBaudRate(9600);
        comPort.openPort();
    }
    public void turnOnLampSet1() {
        sendCommand('1');
    }

    public void turnOnLampSet2() {
        sendCommand('2');
    }

    public void turnOnLampSet3() {
        sendCommand('3');
    }

    public void turnOnLampSet4() {
        sendCommand('4');
    }

    public void stopLampSet() {
        sendCommand('0');

    }

    private void sendCommand(char command) {
        comPort.writeBytes(new byte[] {(byte) command}, 1);
    }



    public void close() {
        comPort.closePort();
    }


}