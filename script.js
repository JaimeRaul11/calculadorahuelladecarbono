function calculateCarbonFootprint() {
  const distance = parseFloat(document.getElementById("distance").value);
  const fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value)/100;
  const emissionFactor = parseFloat(document.getElementById("emissionFactor").value); 
  if (!isNaN(distance) && !isNaN(fuelConsumption) && !isNaN(emissionFactor)) {
      const carbonFootprint = (distance * fuelConsumption * emissionFactor).toFixed(2);
      document.getElementById("result").innerHTML = `Tu huella de carbono es de ${carbonFootprint} kg CO2e.`;
  } else {
      document.getElementById("result").innerHTML = "Por favor, ingresa valores válidos.";
  }
}