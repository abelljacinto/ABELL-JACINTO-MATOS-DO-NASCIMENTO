//--------------------IMC------------------------------///
function calculateIMC() {
  var weight = parseFloat(document.getElementById('inputWeight').value);
  var height = parseFloat(document.getElementById('inputHeight').value);
  var resultElement = document.getElementById('result');
  var messageElement = document.getElementById('message');

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultElement.textContent = 'Por favor, insira valores válidos para peso e altura.';
      messageElement.textContent = '';
      return;
  }

  var imc = weight / (height * height);
  var roundedIMC = Math.round(imc);

  resultElement.textContent = 'Seu IMC é: ' + roundedIMC;

  if (roundedIMC < 18.5) {
      messageElement.textContent = 'Você está abaixo do peso. É lascado!';
  } else if (roundedIMC >= 18.5 && roundedIMC <= 24.9) {
      messageElement.textContent = 'Seu IMC está na faixa normal. É legal!';
  } else if (roundedIMC >= 25.0 && roundedIMC <= 29.9) {
      messageElement.textContent = 'Você está ficando gordão.';
  } else if (roundedIMC >= 30.0 && roundedIMC <= 34.9) {
      messageElement.textContent = 'Você já está gordinho hein.';
  } else if (roundedIMC >= 35.0 && roundedIMC <= 39.9) {
      messageElement.textContent = 'Você está gordão, chupeta de baleia!';
  } else {
      messageElement.textContent = 'Você virou Thaís Carla!';
  }
}


//---------------------calcular a Area------------------///
  function calcularArea() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = base * altura;
    var resultado = document.getElementById("resultado 2");
    resultado.innerHTML = "A área é " + area + " m²";
  }


//---------------------Tabuada-----------------------////
  function tabuada() {
    let numero = document.getElementById("numero").value;
    let resultado = "";
    for(let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + numero * i + "<br>";
    }
    document.getElementById("resultado 3").innerHTML = resultado;
}


//----------------------dias de semana-----------------------//
function daydasemana() {
  var inputDay = document.getElementById('inputDay').value;
  var resultado4tElement = document.getElementById('resultado 4');

  if (inputDay < 1 || inputDay > 7) {
      resultado4tElement.textContent = 'Por favor, escolha um número entre 1 e 7.';
      return;
  }

  var daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  var selectedDay = daysOfWeek[inputDay - 1];
  resultado4tElement.textContent = 'O dia da semana é: ' + selectedDay;
}

//------------------Medias--------------------//
function mediaNotas() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;
  let nota4 = document.getElementById("nota4").value;
  let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
  let resultado = "A média é: " + media + ". ";
  if(media >= 7) {
      resultado += "Aprovado.";
  } else {
      resultado += "Reprovado.";
  }
  document.getElementById("resultado 5").innerHTML = resultado;
}

//------------------fibonacci------------------------//
function calculateFibonacci() {
  var inputNumber = document.getElementById('inputNumber').value;
  var resultado6tElement = document.getElementById('resultado 6');

  if (inputNumber <= 0) {
      resultado6tElement.textContent = 'Por favor, escolha um número maior que zero.';
      return;
  }

  var fibonacciResult = fibonacci(inputNumber);
  resultado6tElement.textContent = 'O número na sequência de Fibonacci é: ' + fibonacciResult;
}

function fibonacci(n) {
  if (n <= 1) {
      return n;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
//------------------ Numero primos---------------------//
function ehPrimo(num) {
  for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
  return num > 1;
}
function verificarPrimo() {
  let numero = document.getElementById("numero").value;
  let resultado = ehPrimo(numero);
  if(resultado) {
      document.getElementById("resultado 7").innerHTML = numero + " é um número primo.";
  } else {
      document.getElementById("resultado 7").innerHTML = numero + " não é um número primo.";
  }
}
function welcomeMessage() {
  alert("Bem vindo!");
}