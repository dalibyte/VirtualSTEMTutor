# Virtual STEM Tutor

## Overview
The Virtual STEM Tutor leverages NVIDIA’s Large Language Models (LLM) and LangChain technologies to provide personalized tutoring in mathematics, physics, and computer science.

## Setup Instructions

1. **Clone the repository:**  
git clone https://github.com/dalibyte/VirtualSTEMTutor.git

2. **Install required libraries:**  
Ensure Python 3.8 or later is installed. Then install the required libraries using pip: `pip install -r requirements.txt`

3. **Set up environment variables for NVIDIA API keys:**  
Ensure you have your NVIDIA API keys set up as environment variables. You might need to sign up for access to NVIDIA's models and APIs. For example, you can add the following lines to your `~/.bashrc` or `~/.bash_profile`:`export NVIDIA_API_KEY='your_api_key_here' ` 
Then, source the file to apply the changes:  
`source ~/.bashrc`

5. **Prepare Dataset:**  
Add your textbook and lecture notes content to the `data/textbooks.txt` and `data/lecture_notes.txt` files. Ensure the content is formatted appropriately for the models to use.

6. **Run the setup script to fine-tune the models:**  
python scripts/setup.py

7. **Start the server:**  
Launch the Flask server to handle the backend of the Virtual STEM Tutor:  
python main.py

8. **Set up the web interface:**  
Navigate to the `web` directory and install the required dependencies:  
cd web  
npm install

9. **Start the web interface:**  
Run the following command to start the React web interface:  
npm start

## Usage Guidelines

1. **Access the web interface at** `http://localhost:3000`.
2. **Ask questions, summarize concepts, and generate practice problems through the interface.**

## Technical Specifications

- **NVIDIA LLM Models:** Used for NLP tasks.
- **LangChain Framework:** For building the agent.
- **NVIDIA NeMo:** For model fine-tuning.
- **TensorRT-LLM:** For optimization.
- **Web Interface:** Built using React.js and Node.js.
