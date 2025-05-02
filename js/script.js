// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  //input
  let counter = 0
  let answer = 0
  const firstValue = parseint(document.getElementById("first-value").value)
  const secondValue = parseint(document.getElementById("second-value").value)
  //process
  while (counter < secondValue) {
    let counter = counter + 1
    let answer = answer + firstValue
  }
  document.getElementById("answer").innerHTML = answer
}
