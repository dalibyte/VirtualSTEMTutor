import React, { useState } from 'react';
import axios from 'axios';

function QnAComponent() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const response = await axios.post('http://localhost:5000/qa', { 
question });
    setAnswer(response.data.answer);
  };

  return (
    <div>
      <h2>Ask a STEM Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      />
      <button onClick={handleAsk}>Ask</button>
      {answer && <p>Answer: {answer}</p>}
    </div>
  );
}

export default QnAComponent;

