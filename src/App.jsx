import React, { useState } from 'react';
import './App.css';
import Form from './Forrm';
import Resultado from './Resultado';

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado);
    setClassificacao(classificarIMC(imcCalculado));
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do Peso';
    if (imc < 24.9) return 'Peso Normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade Grau 1';
    if (imc < 39.9) return 'Obesidade Grau 2';
    return 'Obesidade Grau 3';
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <Form onCalculate={calcularIMC} />
      {imc !== null && <Resultado imc={imc} classificacao={classificacao} />}
    </div>
  );
}

export default App;
