const int lampSet1Pin = 3;  // Pin for the first lamp set
const int lampSet2Pin = 4;  // Pin for the second lamp set
const int lampSet3Pin = 5;  // Pin for the third lamp set
const int lampSet4Pin = 6;  // Pin for the fourth lamp set

const unsigned long duration = 15000;  // Duration to keep the lamps on (in milliseconds)

void setup() {
  pinMode(lampSet1Pin, OUTPUT);
  pinMode(lampSet2Pin, OUTPUT);
  pinMode(lampSet3Pin, OUTPUT);
  pinMode(lampSet4Pin, OUTPUT);

  Serial.begin(9600);  // Start the serial communication with the baud rate 9600
}

void loop() {
  if (Serial.available()) {  // If data is available to read
    char command = Serial.read();  // Read the incoming data
    switch (command) {
      case '1':
        turnOnLampSet(lampSet1Pin);
        break;
      case '2':
        turnOnLampSet(lampSet2Pin);
        break;
      case '3':
        turnOnLampSet(lampSet3Pin);
        break;
      case '4':
        turnOnLampSet(lampSet4Pin);
        break;
    }
  }
}

void turnOnLampSet(int lampSetPin) {
  digitalWrite(lampSetPin, HIGH);  // Turn on the corresponding lamp set
  delay(duration);  // Keep the lamp set on for 15 seconds
  digitalWrite(lampSetPin, LOW);  // Turn off the lamp set
}