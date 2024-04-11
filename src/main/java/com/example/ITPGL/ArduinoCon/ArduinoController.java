package com.example.ITPGL.ArduinoCon;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/arduino")
public class ArduinoController {

    private final ArduinoService arduinoService;

    public ArduinoController(ArduinoService arduinoService) {
        this.arduinoService = arduinoService;
    }

    @GetMapping("/command/{command}")
    public ResponseEntity<Void> sendCommand(@PathVariable char command) {
        arduinoService.sendCommand(command);
        return ResponseEntity.ok().build();
    }
}

