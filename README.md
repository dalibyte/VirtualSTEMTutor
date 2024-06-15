# Virtual STEM Tutor

## Overview
The Virtual STEM Tutor leverages NVIDIA’s Large Language Models (LLM) and LangChain technologies to provide personalized tutoring in mathematics, physics, and computer science.

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/dalibyte/VirtualSTEMTutor.git
   cd VirtualSTEMTutor

    Install required libraries:
    Ensure Python 3.8 or later is installed. Then install the required libraries using pip:

    sh

pip install -r requirements.txt

Set up environment variables for NVIDIA API keys:
Ensure you have your NVIDIA API keys set up as environment variables. You might need to sign up for access to NVIDIA's models and APIs.

For example, you can add the following lines to your ~/.bashrc or ~/.bash_profile:

sh

export NVIDIA_API_KEY='your_api_key_here'

Then, source the file to apply the changes:

sh

source ~/.bashrc

Prepare Dataset:
Add your textbook and lecture notes content to the data/textbooks.txt and data/lecture_notes.txt files. Ensure the content is formatted appropriately for the models to use.

Run the setup script to fine-tune the models:

sh

python scripts/setup.py

Start the server:
Launch the Flask server to handle the backend of the Virtual STEM Tutor:

sh

python main.py

Set up the web interface:
Navigate to the web directory and install the required dependencies:

sh

cd web
npm install

Start the web interface:
Run the following command to start the React web interface:

sh

    npm start

Usage Guidelines

    Access the web interface at http://localhost:3000.
    Ask questions, summarize concepts, and generate practice problems through the interface.

Technical Specifications

    NVIDIA LLM Models: Used for NLP tasks.
    LangChain Framework: For building the agent.
    NVIDIA NeMo: For model fine-tuning.
    TensorRT-LLM: For optimization.
    Web Interface: Built using React.js and Node.js.

Directory Structure

kotlin

VirtualSTEMTutor/
│
├── data/
│   ├── textbooks.txt
│   ├── lecture_notes.txt
│
├── models/
│   ├── fine_tuned_qa_model/
│   ├── fine_tuned_summarization_model/
│
├── web/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── QnAComponent.js
│   │   │   ├── SummarizeComponent.js
│   │   │   ├── GenerateProblemsComponent.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
├── scripts/
│   ├── setup.py
│
├── main.py
├── requirements.txt
├── README.md
