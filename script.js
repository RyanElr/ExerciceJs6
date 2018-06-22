function displayMultiply() {
  // Déclaration des variables.
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var regex = /[\d]+[.][\d]+/;
  // Vérification des valeurs des inputs sont bien des nombres.
  if(regex.test(firstNumber) == true && regex.test(secondNumber) == true)
  {
      // Multiplication des variables firstNumber et secondNumber.
      var result = Math.round(firstNumber) * secondNumber;
      // Affichage du résultat de la multiplication.
      alert(result);

      var result = Math.round(firstNumber) % secondNumber;

      alert(result);
  }

  else {
    // Affichage d'un message si les inputs ne sont pas des nombres.
    alert('Please enter a number')
  }
}
