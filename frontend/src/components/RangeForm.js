import React, { useState } from 'react';
import axios from 'axios';
import { styles } from '../templates/styles';

const RangeForm = ({ onSubmit }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/api/perfect-number/range?start=${start}&end=${end}`);
      if(response.data) {
        const stringResponse = "The perfect numbers on this range are: "
        const perfectNumbers = response.data.map(number => number)
        setResponse(stringResponse + perfectNumbers)
      }
    } catch (error) {
      console.error('Error checking number:', error);
      setResponse('The given numbers are invalid.')
    }
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Find Perfect Numbers in a Range</h2>
      <label style={styles.label}>
        Start:
        <input
          type="text"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        End:
        <input
          type="text"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>Find Perfect Numbers</button>
      {response && <p style={styles.response}>{response}</p>}
    </form>
  );
};

export default RangeForm;
