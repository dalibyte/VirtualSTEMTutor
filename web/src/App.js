import React from 'react';
import QnAComponent from './components/QnAComponent';
import SummarizeComponent from './components/SummarizeComponent';
import GenerateProblemsComponent from './components/GenerateProblemsComponent';

function App() {
  return (
    <div className="App">
      <h1>Virtual STEM Tutor</h1>
      <QnAComponent />
      <SummarizeComponent />
      <GenerateProblemsComponent />
    </div>
  );
}

export default App;
