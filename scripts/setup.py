from nemo.collections.nlp.models import QAModel, SummarizationModel
from nemo.collections.nlp.data.datasets import QADataSet

# NeMo dataset preparation
dataset = QADataSet.from_text_files(["../data/textbooks.txt", 
"../data/lecture_notes.txt"])

# Fine-tune QA model
qa_model = QAModel.from_pretrained("nvidia/qa_model")
qa_model.train(dataset)
qa_model.save_pretrained("../models/fine_tuned_qa_model")

# Fine-tune Summarization model
summarization_model = 
SummarizationModel.from_pretrained("nvidia/summarization_model")
summarization_model.train(dataset)
summarization_model.save_pretrained("../models/fine_tuned_summarization_model")

