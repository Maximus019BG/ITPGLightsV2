package com.example.ITPGL.ArduinoCon;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.stereotype.Service;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;


@Service
public class ArduinoService {

    private final SerialPort comPort;
    private final ScheduledExecutorService scheduler;


    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_CYAN = "\u001B[36m";

    //switch the SerialPort to the arduino
    public ArduinoService() {
        comPort = SerialPort.getCommPort("COM3");
        comPort.openPort();
        comPort.setBaudRate(9600);
        scheduler = Executors.newScheduledThreadPool(1);
    }

    public void sendCommand(char command) {
        byte[] commandBytes = new byte[]{(byte) command};
        comPort.writeBytes(commandBytes, 1);
        ShowComand(command);
    }

    private void ShowComand(char command){
        if (command == '1') {
            System.out.println(ANSI_GREEN + "Command sent: " + command);
        }
        else if (command == '2') {
            System.out.println(ANSI_GREEN + "Command sent: " + command);
        }
        else if (command == '3') {
            System.out.println(ANSI_GREEN + "Command sent: " + command);
        }
        else if (command == '4'){
            System.out.println(ANSI_GREEN + "Command sent: " + command);
        }
        else if (command == '5'){
            System.out.println(ANSI_RED + "Command sent: " + command);
        }
        else if (command == '6'){
            System.out.println(ANSI_YELLOW + "Command sent: " + command);
        }
        else if (command == '7'){
            System.out.println(ANSI_YELLOW + "Command sent: " + command);
        }
        else if (command == '8'){
            System.out.println(ANSI_YELLOW + "Command sent: " + command);
        }
        else if (command == '9'){
            System.out.println(ANSI_YELLOW + "Command sent: " + command);
        }
        else if (command == 'a')
            System.out.println(ANSI_CYAN + "Command sent: " + command);
    }
}

