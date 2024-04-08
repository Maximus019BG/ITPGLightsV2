package com.example.ITPGL.cppFuncs;

public class Connector {

    static {
        System.load("D:/ITPGLv2/ITPGL/C++/native.dll");
    }

    public static native void ConnectToBluetooth();

}
