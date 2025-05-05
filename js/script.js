// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  //input
  let counter = 0
  let answer = 0
  const firstValue = parseInt(document.getElementById("first-value").value)
  const secondValue = parseInt(document.getElementById("second-value").value)
  //process
  while (counter < secondValue) {
    counter = counter + 1
    answer = answer + firstValue
  }
  document.getElementById("answer").innerHTML = answer
}
