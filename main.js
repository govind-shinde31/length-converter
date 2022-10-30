let input = document.querySelector("#input");
let result = document.querySelector("#result");

let inputType = document.querySelector("#inputType");
let resultType = document.querySelector("#resultType");
let inputTypeValue, resultTypeValue;


input.addEventListener("keyup", myResult);
inputType.addEventListener("change", test);
resultType.addEventListener("change", myResult);


function test() {


  // to update drop down values 

  myResult();
}

function myResult() {

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;



  if (inputTypeValue === "Meter" && resultTypeValue === "Kilometer") {
    result.value = Number(input.value) * 0.001;
  }
  else if (inputTypeValue === "Meter" && resultTypeValue === "Centimeter") {
    result.value = Number(input.value) * 100;
  }
  else if (inputTypeValue === "Meter" && resultTypeValue === "Meter") {
    result.value = input.value;
  }

  // kilometer convert
  if (inputTypeValue === "Kilometer" && resultTypeValue === "Meter") {
    result.value = Number(input.value) * 1000;
  }
  else if (inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter") {
    result.value = Number(input.value) * 10000;
  }
  else if (inputTypeValue === "Kilometer" && resultTypeValue === "Kilometer") {
    result.value = input.value;
  }
  //centimeter convert
  if (inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {
    result.value = Number(input.value) * 0.01;
  }
  else if (inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer") {
    result.value = Number(input.value) * 0.0001;
  }
  else if (inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter") {
    result.value = input.value;
  }


}