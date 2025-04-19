#include <Arduino.h>

#define VERSION "1.0.0"

void setup() {
  Serial.begin(115200);
  Serial.print(F("RIDINTEK PLC v"));
  Serial.println(VERSION);
  Serial.println(F("Copyright (C) 2025 Ridintek Industri"));
}

void loop() {
  // Main loop
}