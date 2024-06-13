import React, { useState } from 'react';
import axios from 'axios';

function GenerateProblemsComponent() {
  const [topic, setTopic] = useState('');
  const [problems, setProblems] = useState([]);

  const handleGenerate = async () => {
    const response = await axios.post('http://localhost:5000/generate', { 
topic });
    setProblems(response.data.problems);
  };

  return (
    <div>
      <h2>Generate Practice Problems</h2>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
      />
      <button onClick={handleGenerate}>Generate</button>
      <ul>
        {problems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>
    </div>
  );
}

export default GenerateProblemsComponent;

