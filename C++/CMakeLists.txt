cmake_minimum_required(VERSION 3.27)
project(C__)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

find_package(JNI REQUIRED)
include_directories(${JNI_INCLUDE_DIRS})

add_executable(C__
        function.cpp
        functions.h
        main.cpp
        native-lib.cpp
        "new arduino/arduino.ino")

target_link_libraries(C__ ws2_32 Bthprops)