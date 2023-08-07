function convertToCelsius() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const kelvinInput = document.getElementById("kelvin");
  const celsiusInput = document.getElementById("celsius");

  const fahrenheit = parseFloat(fahrenheitInput.value);
  const kelvin = parseFloat(kelvinInput.value);

  if (!isNaN(fahrenheit)) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = (celsius + 273.15).toFixed(2);
  } else if (!isNaN(kelvin)) {
    const celsius = kelvin - 273.15;
    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = (celsius * 9 / 5 + 32).toFixed(2);
  }
}

function convertToFahrenheit() {
  const celsiusInput = document.getElementById("celsius");
  const kelvinInput = document.getElementById("kelvin");
  const fahrenheitInput = document.getElementById("fahrenheit");

  const celsius = parseFloat(celsiusInput.value);
  const kelvin = parseFloat(kelvinInput.value);

  if (!isNaN(celsius)) {
    fahrenheitInput.value = (celsius * 9 / 5 + 32).toFixed(2);
    kelvinInput.value = (celsius + 273.15).toFixed(2);
  } else if (!isNaN(kelvin)) {
    const fahrenheit = kelvin * 9 / 5 - 459.67;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    celsiusInput.value = (kelvin - 273.15).toFixed(2);
  }
}

function convertToKelvin() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const kelvinInput = document.getElementById("kelvin");

  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);

  if (!isNaN(celsius)) {
    kelvinInput.value = (celsius + 273.15).toFixed(2);
    fahrenheitInput.value = (celsius * 9 / 5 + 32).toFixed(2);
  } else if (!isNaN(fahrenheit)) {
    const kelvin = (fahrenheit + 459.67) * 5 / 9;
    kelvinInput.value = kelvin.toFixed(2);
    celsiusInput.value = (kelvin - 273.15).toFixed(2);
  }

}
  function clearInputs() {
    const inputFields = document.querySelectorAll("input[type='number']");
  
    inputFields.forEach(input => {
      input.value = "";
    });
  }
