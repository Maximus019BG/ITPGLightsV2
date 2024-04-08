package com.example.ITPGL.ArduinoCon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/connection")
public class ArduinoController {

    private final ArduinoService arduinoService;

    @Autowired

    public ArduinoController(ArduinoService arduinoService) {
        this.arduinoService = arduinoService;
    }

    @GetMapping("/turnOnLampSet1")
    public void turnOnLampSet1() {
        arduinoService.turnOnLampSet1();
        System.out.println("Lamp 1 is on");
    }

    @GetMapping("/turnOnLampSet2")
    public void turnOnLampSet2() {
        arduinoService.turnOnLampSet2();
        System.out.println("Lamp 2 is on");
    }

    @GetMapping("/turnOnLampSet3")
    public void turnOnLampSet3() {
        arduinoService.turnOnLampSet3();
        System.out.println("Lamp 3 is on");
    }

    @GetMapping("/turnOnLampSet4")
    public void turnOnLampSet4() {
        arduinoService.turnOnLampSet4();
        System.out.println("Lamp 4 is on");
    }

    @GetMapping("/stopLampSet")
    public void stopLampSet() {
        arduinoService.stopLampSet();
        System.out.println("Lamp set is stopped");
    }
}