package com.example.ITPGL.connection;

import com.example.ITPGL.cppFuncs.Connector;
import org.springframework.stereotype.Service;

@Service
public class ConnectionService {

    public void insertConnection() {
        Connector.ConnectToBluetooth();
    }

}