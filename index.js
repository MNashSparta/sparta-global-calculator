calculator = false;

while(!calculator){
var calcType = prompt("Which calculator would you like to use? 1. Maths  2. BMI  3. Trip")
if(calcType == 1){
  // Maths calculator
  var mode = parseInt(prompt("Which mode would you like to use? 1. Basic 2. Advanced"));
  var input1 = parseInt(prompt("What is the first number you want to use?"));
  var input2 = parseInt(prompt("Type the second number you want to use"));

  // Basic mode
  if(mode === 1) {
    var operation = parseInt(prompt("Which operation would you like to perform? 1. Addition  2.Multiplication  3.Division  4.Subtraction   5.Modulus"));
    switch (operation) {
      // Addition
      case 1:
        console.log(input1 + input2);
        break;

      // Multiplication
      case 2:
        console.log(input1 * input2);
        break;

      //Division
      case 3:
        console.log(input1 / input2);
        break;

      //Subtraction
      case 4:
        console.log(input1 - input2);
        break;

      //Modulus
      case 5:
        console.log(input1 % input2);
        break;

      default:
        calculator = confirm("That was silly. Do you wish to exit?");

    }
  } else {

      // Advanced mode
      var operation = parseInt(prompt("Which operation would you like to perform? 1. Power 2. Root"));
      switch (operation) {
        // Power
        case 1:
          console.log(Math.pow(input1, input2));
          break;
        // Root
        case 2:
          console.log(Math.pow(input1, 1/input2))

        default:
          calculator = confirm("That was silly. Do you wish to exit?");
      }

  }
} else if (calcType == 2) {
  // BMI Calc

  // Prompts
  var height = parseFloat(prompt("Please enter your height in meters or inches"));
  var weight = parseFloat(prompt("Please enter your weight in kg or pounds"));
  var measurements = prompt("Would you like to use 1. metric 2. imperial measurements?");

  // Conversion calculations
  if (measurements == 2) {
    weight = weight / 2.2
    height = height / 39.39
  }

  var BMI = ((weight) / (height * height));

  console.log("Your BMI is: " + BMI);


} else if (calcType == 3) {
  // Trip Calc

  // Prompts
  var distance = parseInt(prompt("Please enter the distance of the trip in miles."));
  var fuelEfficiency = parseInt(prompt("Please enter the fuel efficiency in mpg of the vehicle."));
  var costPerGallon = parseInt(prompt("Please enter the cost per gallon for the vehicle."));
  var speed = parseInt(prompt("Please enter the average speed of the vehicle in MPH."));

  var tripLength = distance / speed;

  // change the MPG if the speed is too high
  if (speed > 60) {
    fuelEfficiency = fuelEfficiency - ((speed - 60) * 2);
    // to stop division by 0 or negative numbers
    if (fuelEfficiency < 1) {
      fuelEfficiency = 1;
    }
  }

  var tripCost = distance / fuelEfficiency * costPerGallon;

  console.log("The trip will take " + tripLength + " hours and cost £" + tripCost + ".");

} else {
calculator = confirm("That was silly. Do you wish to exit?");
}

}
