const fs = require('fs');

const rawQuestions = [
  {
    "testId": "ai-mock-01",
    "question": "What is Artificial Intelligence (AI)?",
    "options": [
      "A branch of computer science focused on creating systems that can perform tasks requiring human intelligence",
      "A programming language for building websites",
      "A type of database management system",
      "A hardware component for computers"
    ],
    "correctOption": 0,
    "explanation": "AI is a field of computer science dedicated to creating intelligent systems that can perform tasks like visual perception, speech recognition, decision-making, and language translation."
  },
  {
    "testId": "ai-mock-01",
    "question": "Which of the following is NOT a type of machine learning?",
    "options": [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Constructive Learning"
    ],
    "correctOption": 3,
    "explanation": "The three main types of ML are Supervised, Unsupervised, and Reinforcement Learning. 'Constructive Learning' is not a recognized ML category."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the difference between AI and traditional programming?",
    "options": [
      "Traditional programming uses explicit rules; AI learns from data",
      "AI is always slower than traditional programming",
      "Traditional programming requires more memory",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "In traditional programming, developers write explicit rules. In AI, systems learn patterns and make decisions from data without being explicitly programmed for each case."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the Turing Test?",
    "options": [
      "A test to measure computer processing speed",
      "A test to determine if a machine can exhibit intelligent behavior equivalent to a human",
      "A test to evaluate database performance",
      "A test for network security"
    ],
    "correctOption": 1,
    "explanation": "The Turing Test, proposed by Alan Turing, evaluates whether a machine can exhibit intelligent behavior indistinguishable from a human."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is Narrow AI (Weak AI)?",
    "options": [
      "AI designed for a specific task",
      "AI that can perform any intellectual task a human can",
      "AI that surpasses human intelligence",
      "AI that only works on mobile devices"
    ],
    "correctOption": 0,
    "explanation": "Narrow AI (Weak AI) is designed to perform a specific task, such as facial recognition or language translation, and cannot generalize beyond its training."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the difference between supervised and unsupervised learning?",
    "options": [
      "Supervised learning uses labeled data; unsupervised learning uses unlabeled data",
      "Unsupervised learning uses labeled data; supervised learning uses unlabeled data",
      "Both use labeled data",
      "Both use unlabeled data"
    ],
    "correctOption": 0,
    "explanation": "Supervised learning trains models on labeled data (input-output pairs). Unsupervised learning finds patterns in unlabeled data."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is overfitting in machine learning?",
    "options": [
      "When a model learns the training data too well but fails to generalize",
      "When a model performs poorly on training data",
      "When a model has too few parameters",
      "When a model trains too slowly"
    ],
    "correctOption": 0,
    "explanation": "Overfitting occurs when a model captures noise in the training data and fails to generalize to new data."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the bias-variance tradeoff in machine learning?",
    "options": [
      "The balance between model complexity and generalization ability",
      "The tradeoff between training speed and accuracy",
      "The tradeoff between data size and model size",
      "The tradeoff between precision and recall"
    ],
    "correctOption": 0,
    "explanation": "The bias-variance tradeoff describes the balance between a model's ability to fit the training data (low bias) and generalize to new data (low variance)."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is a feature in machine learning?",
    "options": [
      "An individual measurable property of the data used as input",
      "The output variable being predicted",
      "The number of training examples",
      "The model's accuracy"
    ],
    "correctOption": 0,
    "explanation": "A feature is an individual measurable property or characteristic of the data used as input to a machine learning model."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is a label in supervised learning?",
    "options": [
      "The output or target variable to be predicted",
      "An input feature",
      "A type of algorithm",
      "A data cleaning technique"
    ],
    "correctOption": 0,
    "explanation": "In supervised learning, a label is the output or target variable that the model is trained to predict."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is reinforcement learning?",
    "options": [
      "Learning by interacting with an environment and receiving rewards or penalties",
      "Learning from labeled data",
      "Learning from unlabeled data",
      "Learning from a single example"
    ],
    "correctOption": 0,
    "explanation": "Reinforcement learning involves an agent learning to make decisions by interacting with an environment and receiving rewards or penalties."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the difference between regression and classification?",
    "options": [
      "Regression predicts continuous values; classification predicts discrete categories",
      "Classification predicts continuous values; regression predicts categories",
      "Both predict continuous values",
      "Both predict categories"
    ],
    "correctOption": 0,
    "explanation": "Regression predicts continuous numerical values (e.g., price), while classification predicts discrete categories or classes (e.g., spam vs not spam)."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is cross-validation?",
    "options": [
      "A technique to assess model performance by splitting data into multiple folds",
      "A technique to train models faster",
      "A technique to handle missing data",
      "A technique to visualize data"
    ],
    "correctOption": 0,
    "explanation": "Cross-validation evaluates model performance by partitioning the data into multiple folds, training on some and validating on others."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the purpose of a validation set?",
    "options": [
      "To tune hyperparameters and evaluate the model during training",
      "To train the model weights",
      "To increase the dataset size",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "A validation set is used to tune hyperparameters and evaluate model performance during training, helping prevent overfitting."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is regularization in machine learning?",
    "options": [
      "A technique to prevent overfitting by penalizing large weights",
      "A technique to increase model complexity",
      "A technique to speed up training",
      "A technique to handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Regularization adds a penalty to the loss function to discourage large weights, helping prevent overfitting."
  },
  {
    "testId": "ai-mock-01",
    "question": "Which of the following is a key component of an AI system?",
    "options": ["Data", "Algorithms", "Computing power", "All of the above"],
    "correctOption": 3,
    "explanation": "AI systems rely on data (to learn from), algorithms (to process data), and computing power (to train and run models)."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is an 'intelligent agent' in AI?",
    "options": [
      "An agent that perceives its environment and acts to achieve goals",
      "An agent that only processes data",
      "An agent that is a software library",
      "An agent that is a programming language"
    ],
    "correctOption": 0,
    "explanation": "An intelligent agent is a system that perceives its environment and takes actions to maximize its chances of successfully achieving its goals."
  },
  {
    "testId": "ai-mock-01",
    "question": "Which of the following is a subfield of AI?",
    "options": ["Machine Learning", "Natural Language Processing", "Computer Vision", "All of the above"],
    "correctOption": 3,
    "explanation": "Machine Learning, Natural Language Processing, and Computer Vision are all subfields of Artificial Intelligence."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the significance of the Dartmouth Conference of 1956?",
    "options": [
      "It is considered the birthplace of AI as a field",
      "It was the first AI programming competition",
      "It was the first AI ethics summit",
      "It established the Turing Test"
    ],
    "correctOption": 0,
    "explanation": "The Dartmouth Conference in 1956 is widely considered the founding event of AI as a formal academic discipline."
  },
  {
    "testId": "ai-mock-01",
    "question": "Which of the following is a common AI programming language?",
    "options": ["Python", "Java", "R", "All of the above"],
    "correctOption": 3,
    "explanation": "Python is the most popular AI language, but Java and R are also commonly used in AI development."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the difference between training data and test data?",
    "options": [
      "Training data is used to teach the model; test data is used to evaluate it",
      "Training data is used for evaluation; test data is used for teaching",
      "Both are used for teaching",
      "Both are used for evaluation"
    ],
    "correctOption": 0,
    "explanation": "Training data is used to train the model. Test data is used to evaluate how well the model generalizes to new, unseen data."
  },
  {
    "testId": "ai-mock-01",
    "question": "What is the K-Nearest Neighbors (KNN) algorithm?",
    "options": [
      "A simple classification algorithm that classifies based on majority vote of K nearest neighbors",
      "A regression algorithm",
      "A clustering algorithm",
      "A deep learning algorithm"
    ],
    "correctOption": 0,
    "explanation": "KNN is a non-parametric classification algorithm that classifies a data point based on the majority class of its K nearest neighbors."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is a neural network?",
    "options": [
      "A computational system inspired by the biological neural networks of the human brain",
      "A type of database",
      "A programming language",
      "A data visualization tool"
    ],
    "correctOption": 0,
    "explanation": "A neural network is an interconnected group of nodes, inspired by the human brain's structure, used for machine learning tasks."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the basic unit of a neural network?",
    "options": ["Neuron", "Layer", "Weight", "Activation function"],
    "correctOption": 0,
    "explanation": "The neuron (or perceptron) is the fundamental computational unit of a neural network."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the role of weights in a neural network?",
    "options": [
      "To determine the strength of connections between neurons",
      "To activate the neurons",
      "To reduce the number of neurons",
      "To store the training data"
    ],
    "correctOption": 0,
    "explanation": "Weights represent the strength of connections between neurons and are learned during training to minimize the loss."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is forward propagation in a neural network?",
    "options": [
      "The process of passing inputs through the network to generate outputs",
      "The process of updating weights using gradients",
      "The process of initializing weights",
      "The process of evaluating the model"
    ],
    "correctOption": 0,
    "explanation": "Forward propagation passes input data through the network's layers to compute the output."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is backpropagation in a neural network?",
    "options": [
      "The algorithm used to update weights by propagating errors backward through the network",
      "The process of propagating inputs forward",
      "A method for initializing weights",
      "A technique for reducing layers"
    ],
    "correctOption": 0,
    "explanation": "Backpropagation computes the gradient of the loss function with respect to the weights and propagates errors backward to update weights."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the purpose of a loss function in neural networks?",
    "options": [
      "To measure the difference between predictions and true values",
      "To activate the neurons",
      "To reduce the number of parameters",
      "To speed up training"
    ],
    "correctOption": 0,
    "explanation": "The loss function quantifies how well the neural network is performing by measuring the error between predictions and targets."
  },
  {
    "testId": "ai-mock-02",
    "question": "Which of the following is a common activation function?",
    "options": ["ReLU", "Sigmoid", "Tanh", "All of the above"],
    "correctOption": 3,
    "explanation": "ReLU, Sigmoid, and Tanh are all common activation functions used in neural networks."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the purpose of the Softmax activation function?",
    "options": [
      "To convert logits to probabilities for multi-class classification",
      "To introduce non-linearity in hidden layers",
      "To reduce dimensionality",
      "To handle binary classification"
    ],
    "correctOption": 0,
    "explanation": "Softmax converts raw output scores (logits) into probabilities that sum to 1, suitable for multi-class classification."
  },
  {
    "testId": "ai-mock-02",
    "question": "Which optimizer is commonly used in deep learning?",
    "options": ["SGD", "Adam", "RMSprop", "All of the above"],
    "correctOption": 3,
    "explanation": "SGD, Adam, and RMSprop are all popular optimizers used in deep learning."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the vanishing gradient problem?",
    "options": [
      "When gradients become very small, making it difficult to update early layers",
      "When gradients become very large, causing instability",
      "When gradients are perfectly balanced",
      "When gradients are constant"
    ],
    "correctOption": 0,
    "explanation": "The vanishing gradient problem occurs when gradients become extremely small in deep networks, hindering learning in early layers."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is dropout in neural networks?",
    "options": [
      "A technique to randomly drop neurons during training to prevent overfitting",
      "A technique to drop layers from the network",
      "A technique to drop training data",
      "A technique to drop the learning rate"
    ],
    "correctOption": 0,
    "explanation": "Dropout randomly sets a fraction of neurons to zero during training, preventing overfitting."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the Universal Approximation Theorem?",
    "options": [
      "A theorem stating that a neural network with a single hidden layer can approximate any continuous function",
      "A theorem about the vanishing gradient problem",
      "A theorem about the optimal number of layers",
      "A theorem about activation functions"
    ],
    "correctOption": 0,
    "explanation": "The Universal Approximation Theorem states that a feedforward neural network with a single hidden layer and sufficient neurons can approximate any continuous function."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the purpose of batch normalization?",
    "options": [
      "To normalize inputs to each layer, improving training stability and speed",
      "To normalize the output of the network",
      "To reduce the number of parameters",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Batch normalization normalizes the inputs to each layer, reducing internal covariate shift and improving training stability."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is a Convolutional Neural Network (CNN) primarily used for?",
    "options": [
      "Image and spatial data processing",
      "Natural language processing",
      "Time series forecasting",
      "Reinforcement learning"
    ],
    "correctOption": 0,
    "explanation": "CNNs are specifically designed for processing grid-like data, such as images and videos, using convolutional layers."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the purpose of a pooling layer in a CNN?",
    "options": [
      "To downsample feature maps, reducing computational load and providing translation invariance",
      "To increase the number of features",
      "To introduce non-linearity",
      "To classify the image"
    ],
    "correctOption": 0,
    "explanation": "Pooling layers reduce the spatial dimensions of feature maps, decreasing parameters and adding robustness to small translations."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is a Recurrent Neural Network (RNN) primarily used for?",
    "options": [
      "Sequential data and time-series",
      "Image classification",
      "Dimensionality reduction",
      "Clustering"
    ],
    "correctOption": 0,
    "explanation": "RNNs are designed for sequential data where the order of inputs matters, such as time series and text."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is the difference between RNN and LSTM?",
    "options": [
      "LSTM has memory cells and gating mechanisms to handle long-range dependencies",
      "RNN has memory cells; LSTM does not",
      "Both are the same",
      "LSTM is for images; RNN is for text"
    ],
    "correctOption": 0,
    "explanation": "LSTMs (Long Short-Term Memory) are a type of RNN with gating mechanisms that better capture long-range dependencies."
  },
  {
    "testId": "ai-mock-02",
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
    "testId": "ai-mock-02",
    "question": "What is the purpose of the attention mechanism in neural networks?",
    "options": [
      "To focus on relevant parts of the input sequence",
      "To reduce the number of parameters",
      "To speed up training",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "The attention mechanism allows models to dynamically weigh the importance of different input elements."
  },
  {
    "testId": "ai-mock-02",
    "question": "What is transfer learning in AI?",
    "options": [
      "Using a pre-trained model on a new task",
      "Transferring data from one model to another",
      "Learning multiple tasks simultaneously",
      "Transferring weights from one layer to another"
    ],
    "correctOption": 0,
    "explanation": "Transfer learning involves taking a model pre-trained on a large dataset and fine-tuning it for a different but related task."
  },
  {
    "testId": "ai-mock-02",
    "question": "Which of the following is a Transformer-based model?",
    "options": ["BERT", "GPT", "T5", "All of the above"],
    "correctOption": 3,
    "explanation": "BERT, GPT, and T5 are all Transformer-based language models."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is Natural Language Processing (NLP)?",
    "options": [
      "A subfield of AI focused on enabling computers to understand and generate human language",
      "A type of database",
      "A programming language",
      "A data visualization tool"
    ],
    "correctOption": 0,
    "explanation": "NLP is a subfield of AI that focuses on the interaction between computers and human language, enabling machines to understand, interpret, and generate text and speech."
  },
  {
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
    "question": "What is Computer Vision?",
    "options": [
      "A subfield of AI that enables computers to interpret and understand visual information",
      "A type of database",
      "A programming language",
      "A hardware component"
    ],
    "correctOption": 0,
    "explanation": "Computer Vision is a subfield of AI focused on enabling machines to interpret, understand, and analyze visual data from the real world."
  },
  {
    "testId": "ai-mock-03",
    "question": "Which of the following is a task in Computer Vision?",
    "options": ["Image classification", "Object detection", "Image segmentation", "All of the above"],
    "correctOption": 3,
    "explanation": "Image classification (identifying what's in an image), object detection (locating objects), and segmentation (pixel-level labeling) are all CV tasks."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is the difference between image classification and object detection?",
    "options": [
      "Classification identifies what is in an image; detection also locates where objects are",
      "Detection identifies what is in an image; classification also locates objects",
      "Both identify and locate objects",
      "Both only identify what is in an image"
    ],
    "correctOption": 0,
    "explanation": "Image classification assigns a label to the entire image, while object detection identifies and localizes multiple objects within the image."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is ethical AI?",
    "options": [
      "The practice of developing AI systems that are fair, transparent, and accountable",
      "The practice of making AI systems faster",
      "The practice of making AI systems cheaper",
      "The practice of making AI systems more complex"
    ],
    "correctOption": 0,
    "explanation": "Ethical AI involves developing systems that are fair (avoiding bias), transparent (explainable), and accountable (responsible)."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is bias in AI?",
    "options": [
      "Systematic errors in AI outputs due to biased training data or algorithms",
      "A type of neural network",
      "A technique for improving accuracy",
      "A data preprocessing method"
    ],
    "correctOption": 0,
    "explanation": "AI bias occurs when models produce unfair or discriminatory outcomes due to biased training data or algorithmic design flaws."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is explainable AI (XAI)?",
    "options": [
      "The field of making AI decisions transparent and understandable to humans",
      "The field of making AI systems faster",
      "The field of making AI systems more accurate",
      "The field of making AI systems cheaper"
    ],
    "correctOption": 0,
    "explanation": "Explainable AI focuses on developing methods to make AI decisions interpretable and understandable to human users."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is generative AI?",
    "options": [
      "AI that can create new content (text, images, audio) based on training data",
      "AI that can only classify data",
      "AI that can only predict numerical values",
      "AI that can only process structured data"
    ],
    "correctOption": 0,
    "explanation": "Generative AI is a type of AI that can generate new content, including text, images, audio, and video, based on patterns learned from training data."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is self-supervised learning?",
    "options": [
      "A learning approach where the model creates its own labels from the data",
      "Learning without any data",
      "Learning with human-provided labels",
      "Learning with reinforcement"
    ],
    "correctOption": 0,
    "explanation": "Self-supervised learning uses pretext tasks (like predicting masked words) to generate supervisory signals from unlabeled data."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is the role of data in AI systems?",
    "options": [
      "Data is the foundation for training AI models",
      "Data is only used for testing",
      "Data is not important for AI",
      "Data is only used for visualization"
    ],
    "correctOption": 0,
    "explanation": "Data is the foundation of AI systems; models learn patterns and make predictions based on the data they are trained on."
  },
  {
    "testId": "ai-mock-03",
    "question": "Which of the following is a limitation of current AI systems?",
    "options": [
      "Lack of common sense reasoning",
      "Dependence on large amounts of labeled data",
      "Vulnerability to adversarial attacks",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Current AI systems have limitations including lack of common sense, dependence on large labeled datasets, and vulnerability to adversarial attacks."
  },
  {
    "testId": "ai-mock-03",
    "question": "What is an adversarial attack on an AI system?",
    "options": [
      "Malicious inputs designed to fool the AI model",
      "A type of training data",
      "A technique for improving accuracy",
      "A type of neural network"
    ],
    "correctOption": 0,
    "explanation": "Adversarial attacks involve creating inputs specifically designed to cause AI models to make incorrect predictions or classifications."
  },
  {
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
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
    "testId": "ai-mock-03",
    "question": "What is the ROUGE score used for in NLP?",
    "options": [
      "To evaluate summarization quality by comparing with reference summaries",
      "To evaluate machine translation",
      "To evaluate text classification",
      "To evaluate sentiment analysis"
    ],
    "correctOption": 0,
    "explanation": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a metric used to evaluate the quality of text summarization."
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

if (questionsEndIndex !== -1 && !questionsFile.includes('"ai-mock-01-q1"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, questionsEndIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Injected AI Mock questions into questions.js');
} else {
  console.log('AI Mock questions already exist or questions.js format is wrong.');
}
