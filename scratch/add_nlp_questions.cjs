const fs = require('fs');

const rawQuestions = [
  {
    "testId": "nlp-test-01",
    "question": "What does NLP stand for in the context of Artificial Intelligence?",
    "options": [
      "Natural Language Processing",
      "Neural Language Programming",
      "Natural Logic Processing",
      "Neuro-Linguistic Programming"
    ],
    "correctOption": 0,
    "explanation": "NLP stands for Natural Language Processing, a subfield of AI that focuses on enabling computers to understand, interpret, and generate human language."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is the primary goal of Natural Language Processing?",
    "options": [
      "To enable computers to understand and generate human language",
      "To translate human language to machine code",
      "To replace human communication",
      "To store language data in databases"
    ],
    "correctOption": 0,
    "explanation": "The primary goal of NLP is to enable computers to understand, interpret, and generate human language in a way that is both meaningful and useful."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is tokenization in NLP?",
    "options": [
      "The process of breaking text into smaller units (tokens)",
      "The process of converting text to numbers",
      "The process of removing punctuation",
      "The process of generating text"
    ],
    "correctOption": 0,
    "explanation": "Tokenization is the process of breaking down text into smaller meaningful units called tokens, which can be words, subwords, or characters."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is the difference between stemming and lemmatization?",
    "options": [
      "Stemming truncates words to their root form; lemmatization returns the dictionary form",
      "Lemmatization truncates words; stemming returns dictionary form",
      "Both are the same",
      "Stemming is for English only; lemmatization is for other languages"
    ],
    "correctOption": 0,
    "explanation": "Stemming chops off word endings (e.g., 'running' → 'run') using heuristic rules. Lemmatization uses vocabulary and morphological analysis to return the base form (e.g., 'better' → 'good')."
  },
  {
    "testId": "nlp-test-01",
    "question": "Which of the following is an example of text normalization?",
    "options": [
      "Converting all text to lowercase",
      "Removing punctuation",
      "Removing stop words",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Text normalization includes various preprocessing steps like lowercasing, removing punctuation, and removing stop words."
  },
  {
    "testId": "nlp-test-01",
    "question": "What are 'stop words' in NLP?",
    "options": [
      "Common words (like 'the', 'is', 'and') that are often removed during preprocessing",
      "Words that stop processing",
      "The most important words in a sentence",
      "Words that are always capitalized"
    ],
    "correctOption": 0,
    "explanation": "Stop words are common words like 'the', 'is', 'and', and 'of' that are often filtered out during preprocessing because they carry less meaning."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is Part-of-Speech (POS) tagging?",
    "options": [
      "The process of assigning grammatical tags (noun, verb, adjective) to words",
      "The process of identifying named entities",
      "The process of identifying the speaker",
      "The process of translating text"
    ],
    "correctOption": 0,
    "explanation": "POS tagging assigns grammatical tags such as noun, verb, adjective, etc., to each word in a sentence based on its context and definition."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is Named Entity Recognition (NER)?",
    "options": [
      "Identifying and classifying named entities (person, organization, location) in text",
      "Identifying all nouns in a sentence",
      "Identifying the main verb of a sentence",
      "Identifying stop words"
    ],
    "correctOption": 0,
    "explanation": "NER is the process of locating and classifying named entities in text into predefined categories such as person names, organizations, locations, and dates."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is a corpus in NLP?",
    "options": [
      "A large collection of text documents",
      "A single document",
      "A type of neural network",
      "A programming language"
    ],
    "correctOption": 0,
    "explanation": "A corpus (plural: corpora) is a large collection of texts used for training and evaluating NLP models."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is the purpose of regular expressions in NLP?",
    "options": [
      "For pattern matching and text extraction",
      "For training neural networks",
      "For generating text",
      "For translating languages"
    ],
    "correctOption": 0,
    "explanation": "Regular expressions (regex) are used for pattern matching and text extraction, such as finding email addresses, URLs, or specific patterns in text."
  },
  {
    "testId": "nlp-test-01",
    "question": "Which of the following is a common text preprocessing step?",
    "options": ["Tokenization", "Stemming", "Stop word removal", "All of the above"],
    "correctOption": 3,
    "explanation": "Tokenization, stemming, and stop word removal are all common preprocessing steps in NLP pipelines."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is the difference between a token and a type in NLP?",
    "options": [
      "A token is an instance of a word; a type is the unique word",
      "A type is an instance; a token is the unique word",
      "Both are the same",
      "Token is for English; type is for other languages"
    ],
    "correctOption": 0,
    "explanation": "In tokenization, tokens are the individual occurrences of words, while types are the unique vocabulary items (distinct words)."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is the purpose of lowercasing in text preprocessing?",
    "options": [
      "To reduce the vocabulary size and improve generalization",
      "To make text harder to process",
      "To remove all punctuation",
      "To identify named entities"
    ],
    "correctOption": 0,
    "explanation": "Lowercasing reduces the vocabulary size by treating 'Apple' and 'apple' as the same token, improving generalization."
  },
  {
    "testId": "nlp-test-01",
    "question": "Which of the following is NOT a typical NLP task?",
    "options": ["Text classification", "Speech recognition", "Sentiment analysis", "Machine translation"],
    "correctOption": 1,
    "explanation": "Speech recognition is typically part of speech processing, though it overlaps with NLP. The others are core NLP tasks."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is the pipeline in NLP?",
    "options": [
      "A sequence of processing steps from raw text to the final output",
      "A type of neural network",
      "A data storage system",
      "A programming framework"
    ],
    "correctOption": 0,
    "explanation": "The NLP pipeline is a sequence of steps that process raw text, including tokenization, POS tagging, NER, and parsing, to produce structured output."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is word segmentation in NLP?",
    "options": [
      "Identifying word boundaries in text (important for languages like Chinese)",
      "The process of splitting sentences",
      "The process of removing punctuation",
      "The process of identifying entities"
    ],
    "correctOption": 0,
    "explanation": "Word segmentation is the process of identifying word boundaries in text, which is particularly important for languages that do not use spaces."
  },
  {
    "testId": "nlp-test-01",
    "question": "Which of the following is a dependency parsing task?",
    "options": [
      "Analyzing the grammatical structure of a sentence to understand relationships between words",
      "Identifying named entities",
      "Tokenizing text",
      "Removing stop words"
    ],
    "correctOption": 0,
    "explanation": "Dependency parsing analyzes sentence structure to identify relationships between words, such as subject-verb-object relationships."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is text normalization in the context of NLP?",
    "options": [
      "The process of transforming text into a standard format for analysis",
      "The process of translating text to English",
      "The process of compressing text",
      "The process of encrypting text"
    ],
    "correctOption": 0,
    "explanation": "Text normalization transforms text into a consistent, standard format by applying operations like lowercasing, removing punctuation, and handling contractions."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is a lemmatizer in NLP?",
    "options": [
      "A tool that returns the dictionary base form of a word",
      "A tool that removes punctuation",
      "A tool that splits sentences",
      "A tool that identifies named entities"
    ],
    "correctOption": 0,
    "explanation": "A lemmatizer uses vocabulary and morphological analysis to return the base dictionary form of a word (e.g., 'ran' → 'run')."
  },
  {
    "testId": "nlp-test-01",
    "question": "Which of the following is NOT a stop word?",
    "options": ["the", "and", "computer", "of"],
    "correctOption": 2,
    "explanation": "Stop words are common words like 'the', 'and', and 'of'. 'Computer' is not typically considered a stop word as it carries semantic meaning."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is sentence segmentation?",
    "options": [
      "The process of dividing text into individual sentences",
      "The process of dividing text into words",
      "The process of dividing text into paragraphs",
      "The process of dividing text into characters"
    ],
    "correctOption": 0,
    "explanation": "Sentence segmentation is the process of identifying sentence boundaries in a text, splitting it into individual sentences."
  },
  {
    "testId": "nlp-test-01",
    "question": "What is the purpose of a 'corpus' in NLP research?",
    "options": [
      "To provide training and evaluation data for NLP models",
      "To serve as a type of neural network",
      "To provide a programming environment",
      "To serve as a visualization tool"
    ],
    "correctOption": 0,
    "explanation": "Corpora provide the foundational datasets needed to train and evaluate NLP models."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the Bag of Words (BoW) model?",
    "options": [
      "A text representation method that ignores word order and grammar",
      "A neural network architecture",
      "A type of embedding",
      "A language model"
    ],
    "correctOption": 0,
    "explanation": "Bag of Words is a text representation method that counts word frequencies in a document, completely ignoring word order and grammatical structure."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is TF-IDF in NLP?",
    "options": [
      "Term Frequency-Inverse Document Frequency, a statistical measure of word importance",
      "A type of neural network",
      "A language model",
      "A text generation method"
    ],
    "correctOption": 0,
    "explanation": "TF-IDF is a numerical statistic that reflects how important a word is to a document within a collection of documents."
  },
  {
    "testId": "nlp-test-02",
    "question": "What are n-grams in NLP?",
    "options": [
      "Sequences of n consecutive words or characters",
      "A type of neural network",
      "A vector representation",
      "A language generation technique"
    ],
    "correctOption": 0,
    "explanation": "N-grams are contiguous sequences of n items (words or characters) used to capture local context and patterns in text."
  },
  {
    "testId": "nlp-test-02",
    "question": "Which of the following is NOT a limitation of Bag of Words?",
    "options": [
      "It captures word order",
      "It has high dimensionality",
      "It ignores semantics",
      "It produces sparse vectors"
    ],
    "correctOption": 0,
    "explanation": "Bag of Words does NOT capture word order, which is a significant limitation. It does have high dimensionality, ignores semantics, and produces sparse vectors."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is Word2Vec?",
    "options": [
      "A technique for learning word embeddings using neural networks",
      "A text preprocessing method",
      "A classification algorithm",
      "A machine translation tool"
    ],
    "correctOption": 0,
    "explanation": "Word2Vec is a widely used technique that learns dense vector representations of words by using shallow neural networks."
  },
  {
    "testId": "nlp-test-02",
    "question": "What are the two main architectures of Word2Vec?",
    "options": [
      "Skip-gram and Continuous Bag of Words (CBOW)",
      "RNN and LSTM",
      "CNN and RNN",
      "BERT and GPT"
    ],
    "correctOption": 0,
    "explanation": "Word2Vec has two architectures: Skip-gram (predicts context words from the target word) and CBOW (predicts the target word from context)."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is GloVe in NLP?",
    "options": [
      "Global Vectors for Word Representation, an embedding method based on co-occurrence matrices",
      "A type of neural network",
      "A text preprocessing tool",
      "A language model"
    ],
    "correctOption": 0,
    "explanation": "GloVe is an unsupervised learning algorithm for obtaining vector representations of words by capturing global statistical information from a corpus."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the main limitation of static word embeddings like Word2Vec and GloVe?",
    "options": [
      "They give the same vector for a word regardless of context (no polysemy handling)",
      "They are too computationally expensive",
      "They only work for English",
      "They produce sparse vectors"
    ],
    "correctOption": 0,
    "explanation": "Static embeddings produce the same vector for a word in all contexts, failing to handle polysemy (words with multiple meanings)."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the Naive Bayes classifier commonly used for in NLP?",
    "options": [
      "Text classification tasks like spam detection and sentiment analysis",
      "Machine translation",
      "Speech recognition",
      "Named entity recognition"
    ],
    "correctOption": 0,
    "explanation": "Naive Bayes is widely used for text classification due to its simplicity and effectiveness on tasks like spam detection and sentiment analysis."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is a Hidden Markov Model (HMM) used for in NLP?",
    "options": [
      "Part-of-speech tagging and sequence labeling",
      "Text generation",
      "Machine translation",
      "Text summarization"
    ],
    "correctOption": 0,
    "explanation": "HMMs are commonly used for sequence labeling tasks like POS tagging, named entity recognition, and speech recognition."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the Viterbi algorithm used for in NLP?",
    "options": [
      "Finding the most likely sequence of hidden states in an HMM",
      "Calculating TF-IDF",
      "Training neural networks",
      "Tokenizing text"
    ],
    "correctOption": 0,
    "explanation": "The Viterbi algorithm is a dynamic programming algorithm used to find the most probable sequence of hidden states in an HMM."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is a Conditional Random Field (CRF)?",
    "options": [
      "A statistical modeling method used for structured prediction and sequence labeling",
      "A type of neural network",
      "A data preprocessing technique",
      "A generative model"
    ],
    "correctOption": 0,
    "explanation": "CRFs are discriminative models commonly used for sequence labeling tasks like named entity recognition and POS tagging."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the Bag of Words model's main limitation?",
    "options": [
      "It loses the semantic meaning and word order",
      "It produces dense vectors",
      "It requires too much memory",
      "It only works for English"
    ],
    "correctOption": 0,
    "explanation": "The main limitation of BoW is that it loses all information about word order, word context, and semantic relationships."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the purpose of n-gram language models?",
    "options": [
      "To predict the probability of the next word based on the previous n-1 words",
      "To generate embeddings",
      "To classify text",
      "To parse text"
    ],
    "correctOption": 0,
    "explanation": "N-gram language models estimate the probability of a word given the previous n-1 words, used for text generation and prediction."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the smoothing technique in language models?",
    "options": [
      "A technique to handle unseen n-grams to avoid zero probabilities",
      "A technique to reduce the vocabulary size",
      "A technique to make vectors smoother",
      "A technique to speed up training"
    ],
    "correctOption": 0,
    "explanation": "Smoothing techniques (like Laplace smoothing) prevent zero probability for unseen n-grams by assigning them small probabilities."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the BLEU score used for in NLP?",
    "options": [
      "To evaluate machine translation quality",
      "To evaluate text classification",
      "To evaluate sentiment analysis",
      "To evaluate named entity recognition"
    ],
    "correctOption": 0,
    "explanation": "BLEU (Bilingual Evaluation Understudy) is a metric used to evaluate the quality of machine-translated text compared to human translations."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the ROUGE score used for in NLP?",
    "options": [
      "To evaluate summarization quality by comparing with reference summaries",
      "To evaluate machine translation",
      "To evaluate text classification",
      "To evaluate sentiment analysis"
    ],
    "correctOption": 0,
    "explanation": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a metric used to evaluate the quality of text summarization."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is the Perplexity metric used for in language modeling?",
    "options": [
      "To measure how well a language model predicts a sample",
      "To measure the accuracy of a classifier",
      "To measure the speed of training",
      "To measure the size of the model"
    ],
    "correctOption": 0,
    "explanation": "Perplexity is a common evaluation metric for language models, measuring how well the model predicts a sequence of words."
  },
  {
    "testId": "nlp-test-02",
    "question": "What is a confusion matrix in text classification?",
    "options": [
      "A table used to evaluate the performance of a classification model",
      "A type of neural network",
      "A text representation technique",
      "A language model"
    ],
    "correctOption": 0,
    "explanation": "A confusion matrix is a table that provides a breakdown of correct and incorrect predictions for each class in a classification task."
  },
  {
    "testId": "nlp-test-03",
    "question": "Which neural network architecture is commonly used for sequential data in NLP?",
    "options": ["RNN", "CNN", "MLP", "Autoencoder"],
    "correctOption": 0,
    "explanation": "RNNs (Recurrent Neural Networks) are specifically designed to process sequential data like text and time series."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the difference between a traditional RNN and an LSTM?",
    "options": [
      "LSTM has memory cells and gating mechanisms to handle long-range dependencies",
      "Traditional RNN has memory cells; LSTM does not",
      "Both are the same",
      "LSTM is for images; RNN is for text"
    ],
    "correctOption": 0,
    "explanation": "LSTMs (Long Short-Term Memory) are an improved RNN architecture with gating mechanisms that better capture long-range dependencies."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the attention mechanism in neural networks?",
    "options": [
      "A mechanism that allows the model to focus on relevant parts of the input sequence",
      "A technique to reduce the number of parameters",
      "A method to speed up training",
      "A technique to handle missing data"
    ],
    "correctOption": 0,
    "explanation": "The attention mechanism allows models to dynamically weigh the importance of different input elements when making predictions."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the Transformer architecture known for?",
    "options": [
      "Using self-attention mechanisms to process sequences in parallel",
      "Using only recurrent layers",
      "Using only convolutional layers",
      "Using no attention mechanisms"
    ],
    "correctOption": 0,
    "explanation": "Transformers use self-attention mechanisms and process sequences in parallel, unlike RNNs which process sequentially."
  },
  {
    "testId": "nlp-test-03",
    "question": "Which of the following is a Transformer-based model?",
    "options": ["BERT", "GPT", "T5", "All of the above"],
    "correctOption": 3,
    "explanation": "BERT, GPT, and T5 are all Transformer-based language models."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is BERT and what does it stand for?",
    "options": [
      "Bidirectional Encoder Representations from Transformers",
      "Bidirectional Encoder for Text Recognition",
      "Binary Encoder for Transformers",
      "Bidirectional Text Processing"
    ],
    "correctOption": 0,
    "explanation": "BERT (Bidirectional Encoder Representations from Transformers) is a Transformer-based model that provides bidirectional context understanding."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the main innovation of BERT compared to previous language models?",
    "options": [
      "Bidirectional training and attention to contextual understanding",
      "Using only unidirectional training",
      "Using only convolutional layers",
      "Using only feedforward networks"
    ],
    "correctOption": 0,
    "explanation": "BERT's main innovation is its bidirectional training approach, which enables contextual understanding of words from both directions."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the main difference between BERT and GPT?",
    "options": [
      "BERT is bidirectional; GPT is unidirectional (left-to-right)",
      "GPT is bidirectional; BERT is unidirectional",
      "Both are bidirectional",
      "Both are unidirectional"
    ],
    "correctOption": 0,
    "explanation": "BERT uses bidirectional context (both left and right), while GPT uses unidirectional context (only left-to-right)."
  },
  {
    "testId": "nlp-test-03",
    "question": "What are the two main pretraining objectives in BERT?",
    "options": [
      "Masked Language Modeling (MLM) and Next Sentence Prediction (NSP)",
      "Language Modeling and Translation",
      "Classification and Regression",
      "Clustering and Classification"
    ],
    "correctOption": 0,
    "explanation": "BERT is pretrained on two tasks: Masked Language Modeling (predicting masked words) and Next Sentence Prediction (predicting if two sentences are consecutive)."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is GPT (Generative Pre-trained Transformer)?",
    "options": [
      "A generative language model developed by OpenAI",
      "A text classification model",
      "A speech recognition model",
      "A computer vision model"
    ],
    "correctOption": 0,
    "explanation": "GPT is a series of generative language models developed by OpenAI, known for their ability to generate coherent text."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is fine-tuning in NLP?",
    "options": [
      "Adapting a pre-trained model to a specific downstream task",
      "Training a model from scratch",
      "Increasing the model size",
      "Reducing the dataset size"
    ],
    "correctOption": 0,
    "explanation": "Fine-tuning involves taking a pre-trained model and further training it on a specific dataset for a particular downstream task."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is prompt engineering in NLP?",
    "options": [
      "Designing prompts to guide large language models to produce desired outputs",
      "Programming neural networks",
      "Engineering new architectures",
      "Data preprocessing"
    ],
    "correctOption": 0,
    "explanation": "Prompt engineering involves crafting effective prompts to guide LLMs to generate specific, useful responses."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is few-shot learning in the context of LLMs?",
    "options": [
      "Learning to perform tasks with only a few examples",
      "Learning with no examples",
      "Learning with many examples",
      "Learning with reinforcement"
    ],
    "correctOption": 0,
    "explanation": "Few-shot learning refers to the ability of a model to perform a new task with only a small number of examples."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is RAG (Retrieval-Augmented Generation)?",
    "options": [
      "A technique that combines retrieval of external documents with text generation",
      "A type of neural network",
      "A data preprocessing method",
      "A text classification algorithm"
    ],
    "correctOption": 0,
    "explanation": "RAG combines retrieval systems with generative models, allowing LLMs to incorporate external knowledge into their responses."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the role of the self-attention mechanism in Transformers?",
    "options": [
      "To compute the relevance of each word in a sequence to every other word",
      "To reduce the number of parameters",
      "To speed up inference",
      "To handle only local context"
    ],
    "correctOption": 0,
    "explanation": "Self-attention allows the model to weigh the importance of each word relative to all other words in the sequence."
  },
  {
    "testId": "nlp-test-03",
    "question": "What are positional encodings in Transformers?",
    "options": [
      "A technique to inject information about word position in the sequence",
      "A technique to encode word meanings",
      "A technique to reduce complexity",
      "A technique to normalize inputs"
    ],
    "correctOption": 0,
    "explanation": "Positional encodings are added to input embeddings to provide information about the position of each token in the sequence."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the difference between encoder and decoder in Transformers?",
    "options": [
      "Encoder processes the input; decoder generates output",
      "Decoder processes input; encoder generates output",
      "Both process input",
      "Both generate output"
    ],
    "correctOption": 0,
    "explanation": "In Transformers, the encoder processes and encodes the input sequence, while the decoder generates the output sequence."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the purpose of the CLS token in BERT?",
    "options": [
      "The classification token used for aggregate sentence representations",
      "The classification token for named entity recognition",
      "The token for classification tasks only",
      "The token for text generation"
    ],
    "correctOption": 0,
    "explanation": "The CLS token is added at the beginning of input sequences and its final hidden state is used for classification tasks."
  },
  {
    "testId": "nlp-test-03",
    "question": "Which of the following is a pre-trained language model?",
    "options": ["BERT", "GPT-3", "Llama", "All of the above"],
    "correctOption": 3,
    "explanation": "BERT, GPT-3, and Llama are all pre-trained language models."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is instruction tuning in LLMs?",
    "options": [
      "Fine-tuning a model to follow natural language instructions",
      "Reducing the model size",
      "Increasing the dataset size",
      "Training from scratch"
    ],
    "correctOption": 0,
    "explanation": "Instruction tuning fine-tunes LLMs on datasets of (instruction, response) pairs to improve their ability to follow user instructions."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the temperature parameter in LLM text generation?",
    "options": [
      "A parameter that controls the randomness/creativity of generated text",
      "A parameter that controls the model size",
      "A parameter that controls the training speed",
      "A parameter that controls the dataset size"
    ],
    "correctOption": 0,
    "explanation": "The temperature parameter controls the randomness of text generation; higher temperature = more creative/diverse outputs."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the context window in large language models?",
    "options": [
      "The maximum number of tokens the model can process at once",
      "The number of layers in the model",
      "The number of parameters in the model",
      "The number of training examples"
    ],
    "correctOption": 0,
    "explanation": "The context window is the maximum number of tokens the model can take into consideration at one time."
  },
  {
    "testId": "nlp-test-03",
    "question": "What is the main advantage of Transformer over RNN?",
    "options": [
      "Parallel processing of sequences",
      "Better sequential processing",
      "Lower memory usage",
      "Easier to train from scratch"
    ],
    "correctOption": 0,
    "explanation": "Transformers process sequences in parallel, unlike RNNs which process sequentially, allowing for faster training."
  }
];

// Add unique ids to questions
const questions = rawQuestions.map((q, index) => {
  return {
    ...q,
    id: `${q.testId}-q${index + 1}`
  };
});

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const questionsEndIndex = questionsFile.lastIndexOf('];');

if (questionsEndIndex !== -1 && !questionsFile.includes('"nlp-test-01-q1"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, questionsEndIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Injected NLP questions into questions.js');
} else {
  console.log('NLP questions already exist or questions.js format is wrong.');
}
