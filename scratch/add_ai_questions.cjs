const fs = require('fs');

const rawQuestions = [
  {
    "testId": "ai-test-01",
    "question": "What is Artificial Intelligence (AI)?",
    "options": [
      "A branch of computer science focused on creating systems that can perform tasks requiring human intelligence",
      "A programming language for building websites",
      "A type of database management system",
      "A hardware component for computers"
    ],
    "correctOption": 0,
    "explanation": "AI is a field of computer science dedicated to creating intelligent systems that can perform tasks like visual perception, speech recognition, decision-making, and language translation.[reference:0]"
  },
  {
    "testId": "ai-test-01",
    "question": "Which of the following best describes the primary goal of Artificial Intelligence?",
    "options": [
      "To replace human intelligence completely",
      "To automate tasks that typically require human intelligence",
      "To make computers faster",
      "To store large amounts of data"
    ],
    "correctOption": 1,
    "explanation": "The primary goal of AI is to create systems that can automate tasks that typically require human intelligence, such as problem-solving, learning, and perception.[reference:1]"
  },
  {
    "testId": "ai-test-01",
    "question": "What is the Turing Test?",
    "options": [
      "A test to measure computer processing speed",
      "A test to determine if a machine can exhibit intelligent behavior equivalent to a human",
      "A test to evaluate database performance",
      "A test for network security"
    ],
    "correctOption": 1,
    "explanation": "The Turing Test, proposed by Alan Turing, evaluates whether a machine can exhibit intelligent behavior indistinguishable from a human.[reference:2]"
  },
  {
    "testId": "ai-test-01",
    "question": "Which of the following is NOT a branch of AI?",
    "options": [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Database Management"
    ],
    "correctOption": 3,
    "explanation": "Database Management is not a branch of AI. Major branches include Machine Learning, Natural Language Processing, Computer Vision, and Robotics.[reference:3]"
  },
  {
    "testId": "ai-test-01",
    "question": "What is Narrow AI (Weak AI)?",
    "options": [
      "AI designed for a specific task",
      "AI that can perform any intellectual task a human can",
      "AI that surpasses human intelligence",
      "AI that only works on mobile devices"
    ],
    "correctOption": 0,
    "explanation": "Narrow AI (Weak AI) is designed to perform a specific task, such as facial recognition or language translation, and cannot generalize beyond its training.[reference:4]"
  },
  {
    "testId": "ai-test-01",
    "question": "What is the difference between AI and traditional programming?",
    "options": [
      "Traditional programming uses explicit rules; AI learns from data",
      "AI is always slower than traditional programming",
      "Traditional programming requires more memory",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "In traditional programming, developers write explicit rules. In AI, systems learn patterns and make decisions from data without being explicitly programmed for each case.[reference:5]"
  },
  {
    "testId": "ai-test-01",
    "question": "Which of the following is an example of a rational agent in AI?",
    "options": [
      "A thermostat that maintains temperature",
      "A self-driving car that navigates safely",
      "A chess-playing program",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "A rational agent is an entity that acts to achieve the best outcome. Thermostats, self-driving cars, and chess programs are all examples of rational agents."
  },
  {
    "testId": "ai-test-01",
    "question": "What is General AI (Strong AI)?",
    "options": [
      "AI that can perform any intellectual task that a human can",
      "AI that is limited to a single task",
      "AI that only works on one platform",
      "AI that requires constant human supervision"
    ],
    "correctOption": 0,
    "explanation": "General AI (Strong AI) refers to systems that possess the ability to understand, learn, and apply intelligence across a wide range of tasks, like a human."
  },
  {
    "testId": "ai-test-01",
    "question": "Which of the following is a key component of an AI system?",
    "options": ["Data", "Algorithms", "Computing power", "All of the above"],
    "correctOption": 3,
    "explanation": "AI systems rely on data (to learn from), algorithms (to process data), and computing power (to train and run models)."
  },
  {
    "testId": "ai-test-01",
    "question": "What is the 'environment' in the context of an AI agent?",
    "options": [
      "The external world the agent interacts with",
      "The code the agent runs on",
      "The database storing agent data",
      "The operating system"
    ],
    "correctOption": 0,
    "explanation": "In AI, the environment is everything the agent interacts with and perceives through its sensors, including the world, users, and other systems."
  },
  {
    "testId": "ai-test-01",
    "question": "Which of the following is a subfield of AI that deals with speech recognition and text analysis?",
    "options": ["Natural Language Processing", "Computer Vision", "Robotics", "Expert Systems"],
    "correctOption": 0,
    "explanation": "Natural Language Processing (NLP) is a subfield of AI focused on enabling computers to understand, interpret, and generate human language."
  },
  {
    "testId": "ai-test-01",
    "question": "What does the term 'agent' mean in AI?",
    "options": [
      "An entity that perceives its environment and takes actions",
      "A software library for AI development",
      "A programming language",
      "A type of neural network"
    ],
    "correctOption": 0,
    "explanation": "An agent in AI is anything that can perceive its environment through sensors and act upon that environment through actuators."
  },
  {
    "testId": "ai-test-01",
    "question": "What is the main challenge in achieving Artificial General Intelligence (AGI)?",
    "options": [
      "Lack of computing power",
      "Inability to generalize knowledge across domains",
      "Insufficient training data",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "AGI faces challenges including the need for massive computing power, generalization across domains, and diverse training data."
  },
  {
    "testId": "ai-test-01",
    "question": "Which of the following is a key application of AI in daily life?",
    "options": ["Virtual assistants", "Recommendation systems", "Autonomous vehicles", "All of the above"],
    "correctOption": 3,
    "explanation": "AI powers many daily applications including virtual assistants (Siri, Alexa), recommendation systems (Netflix, Amazon), and autonomous vehicles."
  },
  {
    "testId": "ai-test-01",
    "question": "What is the role of 'knowledge representation' in AI?",
    "options": [
      "To store and organize information for reasoning",
      "To process raw data",
      "To train neural networks",
      "To optimize algorithms"
    ],
    "correctOption": 0,
    "explanation": "Knowledge representation in AI involves storing and organizing information so that AI systems can use it for reasoning and decision-making.[reference:6]"
  },
  {
    "testId": "ai-test-01",
    "question": "Which of the following is a type of AI based on capabilities?",
    "options": ["Narrow AI", "General AI", "Super AI", "All of the above"],
    "correctOption": 3,
    "explanation": "AI is classified into three types based on capabilities: Narrow AI (task-specific), General AI (human-level), and Super AI (beyond human)."
  },
  {
    "testId": "ai-test-01",
    "question": "What is the main difference between supervised and unsupervised learning?",
    "options": [
      "Supervised learning uses labeled data; unsupervised learning uses unlabeled data",
      "Unsupervised learning uses labeled data; supervised learning uses unlabeled data",
      "Both use labeled data",
      "Both use unlabeled data"
    ],
    "correctOption": 0,
    "explanation": "Supervised learning trains models on labeled data (input-output pairs). Unsupervised learning finds patterns in unlabeled data.[reference:7]"
  },
  {
    "testId": "ai-test-01",
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
    "testId": "ai-test-01",
    "question": "Which of the following is NOT a characteristic of AI systems?",
    "options": ["Learning from data", "Reasoning and problem-solving", "Static behavior", "Adaptation to new situations"],
    "correctOption": 2,
    "explanation": "AI systems are dynamic and adaptive. Static behavior (no learning or adaptation) is not characteristic of AI systems."
  },
  {
    "testId": "ai-test-01",
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
    "testId": "ai-test-01",
    "question": "Which of the following is a common AI programming language?",
    "options": ["Python", "Java", "R", "All of the above"],
    "correctOption": 3,
    "explanation": "Python is the most popular AI language, but Java and R are also commonly used in AI development.[reference:8]"
  },
  {
    "testId": "ai-test-02",
    "question": "What is Machine Learning (ML)?",
    "options": [
      "A subset of AI that allows systems to learn from data without explicit programming",
      "A programming language",
      "A type of computer hardware",
      "A database management system"
    ],
    "correctOption": 0,
    "explanation": "Machine Learning is a subset of AI that enables systems to learn and improve from experience (data) without being explicitly programmed.[reference:9][reference:10]"
  },
  {
    "testId": "ai-test-02",
    "question": "What is the difference between AI, Machine Learning, and Deep Learning?",
    "options": [
      "AI is the broadest field; ML is a subset of AI; DL is a subset of ML",
      "ML is the broadest; AI is a subset of ML; DL is a subset of AI",
      "All are the same",
      "DL is the broadest; AI is a subset of DL; ML is a subset of AI"
    ],
    "correctOption": 0,
    "explanation": "AI is the broadest field encompassing all intelligent systems. Machine Learning is a subset of AI. Deep Learning is a subset of ML that uses neural networks.[reference:11][reference:12]"
  },
  {
    "testId": "ai-test-02",
    "question": "Which of the following is a type of machine learning?",
    "options": ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "All of the above"],
    "correctOption": 3,
    "explanation": "The three main types of machine learning are supervised learning (labeled data), unsupervised learning (unlabeled data), and reinforcement learning (rewards).[reference:13]"
  },
  {
    "testId": "ai-test-02",
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
    "testId": "ai-test-02",
    "question": "What is overfitting in machine learning?",
    "options": [
      "When a model learns the training data too well but fails to generalize",
      "When a model performs poorly on training data",
      "When a model has too few parameters",
      "When a model trains too slowly"
    ],
    "correctOption": 0,
    "explanation": "Overfitting occurs when a model captures noise in the training data and fails to generalize to new data.[reference:14]"
  },
  {
    "testId": "ai-test-02",
    "question": "What is underfitting in machine learning?",
    "options": [
      "When a model is too simple to capture underlying patterns",
      "When a model memorizes the training data",
      "When a model has too many parameters",
      "When a model trains too fast"
    ],
    "correctOption": 0,
    "explanation": "Underfitting occurs when a model is too simple to capture the underlying patterns in the data, performing poorly on both training and test sets."
  },
  {
    "testId": "ai-test-02",
    "question": "What is the bias-variance tradeoff in machine learning?",
    "options": [
      "The balance between model complexity and generalization ability",
      "The tradeoff between training speed and accuracy",
      "The tradeoff between data size and model size",
      "The tradeoff between precision and recall"
    ],
    "correctOption": 0,
    "explanation": "The bias-variance tradeoff describes the balance between a model's ability to fit the training data (low bias) and generalize to new data (low variance).[reference:15]"
  },
  {
    "testId": "ai-test-02",
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
    "testId": "ai-test-02",
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
    "testId": "ai-test-02",
    "question": "What is reinforcement learning?",
    "options": [
      "Learning by interacting with an environment and receiving rewards or penalties",
      "Learning from labeled data",
      "Learning from unlabeled data",
      "Learning from a single example"
    ],
    "correctOption": 0,
    "explanation": "Reinforcement learning involves an agent learning to make decisions by interacting with an environment and receiving rewards or penalties.[reference:16]"
  },
  {
    "testId": "ai-test-02",
    "question": "What is the difference between regression and classification?",
    "options": [
      "Regression predicts continuous values; classification predicts discrete categories",
      "Classification predicts continuous values; regression predicts categories",
      "Both predict continuous values",
      "Both predict categories"
    ],
    "correctOption": 0,
    "explanation": "Regression predicts continuous numerical values (e.g., price), while classification predicts discrete categories or classes (e.g., spam vs not spam).[reference:17]"
  },
  {
    "testId": "ai-test-02",
    "question": "What is deep learning?",
    "options": [
      "A subset of machine learning that uses neural networks with many layers",
      "A type of database",
      "A programming language",
      "A data visualization technique"
    ],
    "correctOption": 0,
    "explanation": "Deep learning is a subset of machine learning that uses artificial neural networks with many layers (deep neural networks) to model complex patterns.[reference:18]"
  },
  {
    "testId": "ai-test-02",
    "question": "What is the role of an activation function in a neural network?",
    "options": [
      "To introduce non-linearity into the model",
      "To reduce the number of parameters",
      "To speed up training",
      "To store the network weights"
    ],
    "correctOption": 0,
    "explanation": "Activation functions introduce non-linearity, enabling neural networks to learn complex patterns."
  },
  {
    "testId": "ai-test-02",
    "question": "Which of the following is a common activation function?",
    "options": ["ReLU", "Sigmoid", "Tanh", "All of the above"],
    "correctOption": 3,
    "explanation": "ReLU, Sigmoid, and Tanh are all common activation functions used in neural networks."
  },
  {
    "testId": "ai-test-02",
    "question": "What is regularization in machine learning?",
    "options": [
      "A technique to prevent overfitting by penalizing large weights",
      "A technique to increase model complexity",
      "A technique to speed up training",
      "A technique to handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Regularization adds a penalty to the loss function to discourage large weights, helping prevent overfitting.[reference:19]"
  },
  {
    "testId": "ai-test-02",
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
    "testId": "ai-test-02",
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
    "testId": "ai-test-03",
    "question": "What is a neural network?",
    "options": [
      "A computational system inspired by the biological neural networks of the human brain",
      "A type of database",
      "A programming language",
      "A data visualization tool"
    ],
    "correctOption": 0,
    "explanation": "A neural network is an interconnected group of nodes, inspired by the human brain's structure, used for machine learning tasks.[reference:20]"
  },
  {
    "testId": "ai-test-03",
    "question": "What is the basic unit of a neural network?",
    "options": ["Neuron", "Layer", "Weight", "Activation function"],
    "correctOption": 0,
    "explanation": "The neuron (or perceptron) is the fundamental computational unit of a neural network."
  },
  {
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
    "question": "What is backpropagation in a neural network?",
    "options": [
      "The algorithm used to update weights by propagating errors backward through the network",
      "The process of propagating inputs forward",
      "A method for initializing weights",
      "A technique for reducing layers"
    ],
    "correctOption": 0,
    "explanation": "Backpropagation computes the gradient of the loss function with respect to the weights and propagates errors backward to update weights.[reference:21]"
  },
  {
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
    "question": "Which of the following is a type of neural network architecture?",
    "options": ["Convolutional Neural Network (CNN)", "Recurrent Neural Network (RNN)", "Transformer", "All of the above"],
    "correctOption": 3,
    "explanation": "CNNs, RNNs, and Transformers are all different types of neural network architectures designed for different tasks."
  },
  {
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
    "question": "What is a Recurrent Neural Network (RNN) primarily used for?",
    "options": [
      "Sequential data and time-series",
      "Image classification",
      "Dimensionality reduction",
      "Clustering"
    ],
    "correctOption": 0,
    "explanation": "RNNs are designed for sequential data where the order of inputs matters, such as time series and text.[reference:22]"
  },
  {
    "testId": "ai-test-03",
    "question": "What is the Transformer architecture known for?",
    "options": [
      "Using self-attention mechanisms for processing sequential data",
      "Using only convolutional layers",
      "Using only recurrent layers",
      "Using no attention mechanisms"
    ],
    "correctOption": 0,
    "explanation": "Transformers are based on self-attention mechanisms and are widely used in NLP and other sequence processing tasks."
  },
  {
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
    "question": "What is a perceptron?",
    "options": [
      "The simplest type of artificial neural network",
      "A type of database",
      "A programming language",
      "A data visualization tool"
    ],
    "correctOption": 0,
    "explanation": "The perceptron is the simplest neural network model, introduced by Frank Rosenblatt in 1958."
  },
  {
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
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
    "testId": "ai-test-03",
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
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
    "question": "What is tokenization in NLP?",
    "options": [
      "The process of breaking text into smaller units (tokens) like words or subwords",
      "The process of converting text to numbers",
      "The process of generating text",
      "The process of translating text"
    ],
    "correctOption": 0,
    "explanation": "Tokenization is the first step in NLP, where text is broken down into smaller units (tokens) such as words, subwords, or characters."
  },
  {
    "testId": "ai-test-04",
    "question": "What are embeddings in NLP?",
    "options": [
      "Dense vector representations of text that capture semantic meaning",
      "The process of embedding text in a webpage",
      "A type of neural network",
      "A data cleaning technique"
    ],
    "correctOption": 0,
    "explanation": "Embeddings are dense vector representations that capture semantic meaning and relationships between words or phrases."
  },
  {
    "testId": "ai-test-04",
    "question": "What is a Large Language Model (LLM)?",
    "options": [
      "A deep learning model trained on massive text data to generate and understand language",
      "A type of database",
      "A programming language",
      "A data visualization tool"
    ],
    "correctOption": 0,
    "explanation": "LLMs are deep learning models trained on vast amounts of text data to perform language understanding and generation tasks.[reference:23]"
  },
  {
    "testId": "ai-test-04",
    "question": "Which of the following is a well-known Large Language Model?",
    "options": ["GPT (Generative Pre-trained Transformer)", "BERT", "Claude", "All of the above"],
    "correctOption": 3,
    "explanation": "GPT, BERT, and Claude are all well-known large language models developed by OpenAI, Google, and Anthropic respectively."
  },
  {
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
    "question": "Which of the following is a task in Computer Vision?",
    "options": ["Image classification", "Object detection", "Image segmentation", "All of the above"],
    "correctOption": 3,
    "explanation": "Image classification (identifying what's in an image), object detection (locating objects), and segmentation (pixel-level classification) are all CV tasks."
  },
  {
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
    "question": "What is generative AI?",
    "options": [
      "AI that can create new content (text, images, audio) based on training data",
      "AI that can only classify data",
      "AI that can only predict numerical values",
      "AI that can only process structured data"
    ],
    "correctOption": 0,
    "explanation": "Generative AI is a type of AI that can generate new content, including text, images, audio, and video, based on patterns learned from training data.[reference:24]"
  },
  {
    "testId": "ai-test-04",
    "question": "What is the purpose of the BERT model in NLP?",
    "options": [
      "To provide bidirectional contextual understanding of text",
      "To generate text sequentially",
      "To classify images",
      "To process audio"
    ],
    "correctOption": 0,
    "explanation": "BERT (Bidirectional Encoder Representations from Transformers) provides bidirectional context to understand word meanings based on surrounding text."
  },
  {
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
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
    "testId": "ai-test-04",
    "question": "What is an adversarial attack on an AI system?",
    "options": [
      "Malicious inputs designed to fool the AI model",
      "A type of training data",
      "A technique for improving accuracy",
      "A type of neural network"
    ],
    "correctOption": 0,
    "explanation": "Adversarial attacks involve creating inputs specifically designed to cause AI models to make incorrect predictions or classifications."
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

if (questionsEndIndex !== -1 && !questionsFile.includes('"ai-test-01-q1"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, questionsEndIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Injected AI questions into questions.js');
} else {
  console.log('AI questions already exist or questions.js format is wrong.');
}
