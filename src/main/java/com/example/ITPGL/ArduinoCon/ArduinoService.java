package com.example.ITPGL.ArduinoCon;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.stereotype.Service;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Service
public class ArduinoService {

    private final SerialPort comPort;
    private final ScheduledExecutorService scheduler;

    public ArduinoService() {
        comPort = SerialPort.getCommPort("COM3");
        comPort.openPort();
        comPort.setBaudRate(9600);
        scheduler = Executors.newScheduledThreadPool(1);
    }

    public void sendCommand(char command) {
        byte[] commandBytes = new byte[]{(byte) command};
        comPort.writeBytes(commandBytes, 1);
        System.out.println("Command sent: " + command);
    }
}