const int lampSet1Pin = 3;
const int lampSet2Pin = 4;
const int lampSet3Pin = 5;
const int lampSet4Pin = 6;

void setup() {
    pinMode(lampSet1Pin, OUTPUT);
    pinMode(lampSet2Pin, OUTPUT);
    pinMode(lampSet3Pin, OUTPUT);
    pinMode(lampSet4Pin, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    if (Serial.available()) {
        char command = Serial.read();
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
            case '5':
                digitalWrite(lampSet1Pin, LOW);
                digitalWrite(lampSet2Pin, LOW);
                digitalWrite(lampSet3Pin, LOW);
                digitalWrite(lampSet4Pin, LOW);
                break;

            case '6':
                digitalWrite(lampSet1Pin, LOW);
                break;
            case '7':
                digitalWrite(lampSet2Pin, LOW);
                break;
            case '8':
                digitalWrite(lampSet3Pin, LOW);
                break;
            case '9':
                digitalWrite(lampSet4Pin, LOW);
                break;

        }
    }
}

void turnOnLampSet(int lampSetPin) {
    digitalWrite(lampSetPin, HIGH);
}
