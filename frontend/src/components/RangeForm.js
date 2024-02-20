import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <label>
        Start:
        <input
          type="text"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </label>
      <label>
        End:
        <input
          type="text"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </label>
      <button type="submit">Find Perfect Numbers</button>
      {response && <p>{response}</p>}
    </form>
  );
};

export default RangeForm;
