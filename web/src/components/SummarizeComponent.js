import React, { useState } from 'react';
import axios from 'axios';

function SummarizeComponent() {
  const [concept, setConcept] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    const response = await axios.post('http://localhost:5000/summarize', { 
concept });
    setSummary(response.data.summary);
  };

  return (
    <div>
      <h2>Summarize a STEM Concept</h2>
      <input
        type="text"
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
        placeholder="Enter a concept"
      />
      <button onClick={handleSummarize}>Summarize</button>
      {summary && <p>Summary: {summary}</p>}
    </div>
  );
}

export default SummarizeComponent;

