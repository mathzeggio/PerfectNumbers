import React, { useState } from 'react';
import axios from 'axios';
import { styles } from '../templates/styles';

const CheckForm = () => {
  const [number, setNumber] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/api/perfect-number/check/${number}`);
      if(response.data) {
        setResponse('The given number is perfect.')
      } else {
        setResponse('The given number is not perfect.')
      }
      //onSubmit(response.data);
    } catch (error) {
      console.error('Error checking number:', error);
      setResponse('The given number is invalid.')
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Check if a Number is Perfect</h2>
      <label style={styles.label}>
        Number:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>Check</button>
      {response && <p style={styles.response}>{response}</p>}
    </form>
  );
};

export default CheckForm;
