import React, { useState } from 'react';

const Form = ({ onCalculate }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (altura && peso) {
      onCalculate(Number(altura), Number(peso));
      setAltura('');
      setPeso('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Altura:
        <input type="number" step="0.01" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <label>
        Peso:
        <input type="number" step="0.01" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <button type="submit">Calcular IMC</button>
    </form>
  );
};

export default Form;
