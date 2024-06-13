from langchain import LangChain
from nemo.collections.nlp.models import QAModel, SummarizationModel
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from tensorrt_llm import optimize_model

# Set up LangChain
lc = LangChain()

# Load NVIDIA LLM models
qa_model = QAModel.from_pretrained("nvidia/qa_model")
summarization_model = 
SummarizationModel.from_pretrained("nvidia/summarization_model")

# Integrate models with LangChain
lc.add_model("qa", qa_model)
lc.add_model("summarization", summarization_model)

# Flask setup
app = Flask(__name__)
CORS(app)

@app.route('/qa', methods=['POST'])
def interactive_qa():
    data = request.json
    question = data['question']
    response = qa_model.infer(question)
    return jsonify({"answer": response})

@app.route('/summarize', methods=['POST'])
def summarize_concept():
    data = request.json
    concept = data['concept']
    summary = summarization_model.infer(concept)
    return jsonify({"summary": summary})

@app.route('/generate', methods=['POST'])
def generate_problems():
    data = request.json
    topic = data['topic']
    problems = ["Problem 1", "Problem 2", "Problem 3"]  # Placeholder
    return jsonify({"problems": problems})

if __name__ == '__main__':
    optimized_qa_model = optimize_model(qa_model, "qa")
    optimized_summarization_model = optimize_model(summarization_model, 
"summarization")

    qa_model = optimized_qa_model
    summarization_model = optimized_summarization_model

    app.run(port=5000, debug=True)

