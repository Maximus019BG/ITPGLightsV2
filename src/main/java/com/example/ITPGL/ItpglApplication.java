package com.example.ITPGL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
@RestController
public class ItpglApplication {


		public static void main(String[] args) {
			Dotenv dotenv = Dotenv.load();
			System.setProperty("spring.data.mongodb.uri", dotenv.get("MONGODB_URI"));
			SpringApplication.run(ItpglApplication.class, args);
		}



}
