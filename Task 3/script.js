function convertTemperature() {
  // Get user input
  var temperature = parseFloat(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;

  // Perform conversion
  var result;
  if (unit === "celsius") {
    result = (temperature * 9/5) + 32;
    result = result.toFixed(2) + " °F";
  } else {
    result = (temperature - 32) * 5/9;
    result = result.toFixed(2) + " °C";
  }

  // Display the result
  document.getElementById("result").innerHTML = "Result: " + result;
}
