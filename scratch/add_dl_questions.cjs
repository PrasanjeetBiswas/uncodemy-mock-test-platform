const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "dl-test-01",
    "question": "What is the fundamental computational unit of a neural network?",
    "options": ["Layer", "Neuron", "Weight", "Activation Function"],
    "correctOption": 1,
    "explanation": "The neuron (or perceptron) is the basic building block of neural networks, receiving inputs, applying weights, and passing through an activation function."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the purpose of weights in a neural network?",
    "options": [
      "To determine the strength of connections between neurons",
      "To activate the neurons",
      "To reduce the number of neurons",
      "To store the training data"
    ],
    "correctOption": 0,
    "explanation": "Weights represent the strength of connections between neurons and are learned during training to minimize the loss function."
  },
  {
    "testId": "dl-test-01",
    "question": "Which activation function introduces non-linearity and is commonly used in hidden layers?",
    "options": ["Sigmoid", "Tanh", "ReLU", "Softmax"],
    "correctOption": 2,
    "explanation": "ReLU (Rectified Linear Unit) is the most commonly used activation function in hidden layers due to its simplicity and ability to mitigate vanishing gradients."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the role of the activation function in a neural network?",
    "options": [
      "To introduce non-linearity into the model",
      "To reduce the number of parameters",
      "To speed up training",
      "To store the network weights"
    ],
    "correctOption": 0,
    "explanation": "Activation functions introduce non-linearity, enabling neural networks to learn complex patterns and functions."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the primary goal of backpropagation in neural networks?",
    "options": [
      "To compute gradients of the loss function with respect to weights",
      "To propagate inputs forward through the network",
      "To initialize the network weights",
      "To reduce the number of layers"
    ],
    "correctOption": 0,
    "explanation": "Backpropagation computes gradients of the loss function with respect to all weights in the network, enabling weight updates via gradient descent."
  },
  {
    "testId": "dl-test-01",
    "question": "Which of the following is a common loss function for binary classification?",
    "options": ["Mean Squared Error", "Cross-Entropy Loss", "Hinge Loss", "Kullback-Leibler Divergence"],
    "correctOption": 1,
    "explanation": "Binary Cross-Entropy (or log loss) is the standard loss function for binary classification, measuring the difference between predicted probabilities and true labels."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the vanishing gradient problem in deep networks?",
    "options": [
      "When gradients become very small, making it difficult to update early layers",
      "When gradients become very large, causing instability",
      "When gradients are perfectly balanced",
      "When gradients are constant throughout the network"
    ],
    "correctOption": 0,
    "explanation": "The vanishing gradient problem occurs when gradients become extremely small in deep networks, hindering learning in early layers."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the role of the learning rate in gradient descent?",
    "options": [
      "To control the step size during weight updates",
      "To determine the number of layers",
      "To activate the neurons",
      "To initialize the weights"
    ],
    "correctOption": 0,
    "explanation": "The learning rate determines how much the weights are adjusted during each update, balancing speed and stability of training."
  },
  {
    "testId": "dl-test-01",
    "question": "Which optimization algorithm is most commonly used in deep learning?",
    "options": ["SGD", "Adam", "RMSprop", "Adagrad"],
    "correctOption": 1,
    "explanation": "Adam is widely used due to its adaptive learning rate and efficient performance across many tasks."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the purpose of regularization in deep learning?",
    "options": [
      "To prevent overfitting by penalizing large weights",
      "To increase model complexity",
      "To speed up training",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Regularization (L1, L2, dropout) adds constraints to the model to prevent overfitting and improve generalization."
  },
  {
    "testId": "dl-test-01",
    "question": "What does L2 regularization add to the loss function?",
    "options": [
      "The sum of absolute values of weights",
      "The sum of squared values of weights",
      "The sum of weights",
      "The product of weights"
    ],
    "correctOption": 1,
    "explanation": "L2 regularization (Ridge) adds the sum of squared weights to the loss function, encouraging smaller weights and reducing overfitting."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the role of dropout in neural networks?",
    "options": [
      "To randomly drop neurons during training to prevent overfitting",
      "To drop layers from the network",
      "To drop training data",
      "To drop the learning rate"
    ],
    "correctOption": 0,
    "explanation": "Dropout randomly sets a fraction of neurons to zero during training, forcing the network to learn redundant representations and reducing overfitting."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the purpose of batch normalization?",
    "options": [
      "To normalize inputs to each layer, improving training stability and speed",
      "To normalize the output of the network",
      "To reduce the number of parameters",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Batch normalization normalizes the inputs to each layer by adjusting and scaling activations, reducing internal covariate shift and allowing higher learning rates."
  },
  {
    "testId": "dl-test-01",
    "question": "Which activation function is used in the output layer of multi-class classification?",
    "options": ["Sigmoid", "Tanh", "ReLU", "Softmax"],
    "correctOption": 3,
    "explanation": "Softmax converts logits to probabilities that sum to 1, making it suitable for multi-class classification."
  },
  {
    "testId": "dl-test-01",
    "question": "What is a forward pass in a neural network?",
    "options": [
      "The process of propagating inputs through the network to compute predictions",
      "The process of updating weights using gradients",
      "The process of initializing weights",
      "The process of evaluating the model"
    ],
    "correctOption": 0,
    "explanation": "The forward pass computes the output of the network by propagating inputs from the input layer through hidden layers to the output layer."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the Universal Approximation Theorem?",
    "options": [
      "A theorem stating that a feedforward neural network with a single hidden layer can approximate any continuous function",
      "A theorem stating that neural networks cannot approximate complex functions",
      "A theorem about the vanishing gradient problem",
      "A theorem about the optimal number of layers"
    ],
    "correctOption": 0,
    "explanation": "The Universal Approximation Theorem states that a feedforward neural network with a single hidden layer and sufficient neurons can approximate any continuous function on compact subsets."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the role of bias in a neuron?",
    "options": [
      "To shift the activation function, allowing the neuron to learn offset patterns",
      "To increase the number of weights",
      "To reduce the number of parameters",
      "To speed up training"
    ],
    "correctOption": 0,
    "explanation": "The bias term allows the neuron to shift the activation function, enabling it to model data that is not centered at zero."
  },
  {
    "testId": "dl-test-01",
    "question": "Which of the following is NOT a common activation function?",
    "options": ["Sigmoid", "Tanh", "ReLU", "Linear"],
    "correctOption": 3,
    "explanation": "Linear activation is rarely used in hidden layers because it does not introduce non-linearity. Sigmoid, Tanh, and ReLU are standard."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the difference between SGD and mini-batch gradient descent?",
    "options": [
      "SGD updates weights using one sample at a time; mini-batch uses a batch of samples",
      "Mini-batch uses one sample; SGD uses the entire dataset",
      "Both use one sample",
      "Both use the entire dataset"
    ],
    "correctOption": 0,
    "explanation": "SGD (Stochastic Gradient Descent) updates weights using a single random sample, while mini-batch uses a small batch of samples, balancing speed and stability."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the purpose of weight initialization in neural networks?",
    "options": [
      "To set initial weights to avoid symmetry and enable effective learning",
      "To reduce the number of parameters",
      "To speed up the forward pass",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Proper weight initialization (e.g., Xavier, He) breaks symmetry and helps gradients flow effectively, improving convergence."
  },
  {
    "testId": "dl-test-01",
    "question": "Which loss function is used for regression tasks?",
    "options": ["Cross-Entropy", "Mean Squared Error", "Hinge Loss", "KL Divergence"],
    "correctOption": 1,
    "explanation": "Mean Squared Error (MSE) is the standard loss function for regression, measuring the average squared difference between predictions and targets."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the main advantage of using ReLU over Sigmoid?",
    "options": [
      "ReLU is computationally cheaper and mitigates the vanishing gradient problem",
      "ReLU is always more accurate",
      "ReLU has no disadvantages",
      "Sigmoid is faster than ReLU"
    ],
    "correctOption": 0,
    "explanation": "ReLU is computationally efficient and does not saturate for positive values, helping alleviate the vanishing gradient problem."
  },
  {
    "testId": "dl-test-01",
    "question": "What is gradient clipping?",
    "options": [
      "A technique to prevent exploding gradients by capping gradient values",
      "A technique to prevent vanishing gradients",
      "A technique to increase learning rate",
      "A technique to reduce model size"
    ],
    "correctOption": 0,
    "explanation": "Gradient clipping limits the magnitude of gradients to prevent exploding gradients and ensure stable training."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the role of the optimizer in neural network training?",
    "options": [
      "To update the network weights to minimize the loss function",
      "To initialize the network weights",
      "To activate the neurons",
      "To evaluate the model performance"
    ],
    "correctOption": 0,
    "explanation": "The optimizer uses gradients to update the network weights in the direction that minimizes the loss function."
  },
  {
    "testId": "dl-test-01",
    "question": "Which of the following is an adaptive learning rate optimizer?",
    "options": ["SGD", "Adam", "Mini-batch SGD", "Momentum"],
    "correctOption": 1,
    "explanation": "Adam adaptively adjusts the learning rate for each parameter, combining momentum and RMSprop."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the purpose of a learning rate scheduler?",
    "options": [
      "To adjust the learning rate during training for better convergence",
      "To increase the model size",
      "To reduce the number of epochs",
      "To handle overfitting"
    ],
    "correctOption": 0,
    "explanation": "Learning rate schedulers decrease the learning rate over time to fine-tune the model and improve convergence."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the difference between batch gradient descent and stochastic gradient descent?",
    "options": [
      "Batch uses the entire dataset per update; stochastic uses one sample",
      "Batch uses one sample; stochastic uses the entire dataset",
      "Both use one sample",
      "Both use the entire dataset"
    ],
    "correctOption": 0,
    "explanation": "Batch gradient descent updates weights using the entire training set, while stochastic uses one random sample per update."
  },
  {
    "testId": "dl-test-01",
    "question": "Why is momentum used in gradient descent?",
    "options": [
      "To accelerate convergence and smooth out oscillations",
      "To increase learning rate",
      "To reduce model complexity",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Momentum accelerates gradient descent by accumulating past gradients, helping navigate ravines and speed up convergence."
  },
  {
    "testId": "dl-test-01",
    "question": "What is the purpose of the 'epoch' in neural network training?",
    "options": [
      "One complete pass of the entire training dataset through the model",
      "One forward pass on a single sample",
      "One backward pass on a single sample",
      "One update of the weights"
    ],
    "correctOption": 0,
    "explanation": "An epoch is one full iteration over all training data. Multiple epochs are used to allow the model to learn patterns."
  },
  {
    "testId": "dl-test-01",
    "question": "Which of the following is a common regularization technique?",
    "options": ["Data Augmentation", "Early Stopping", "Dropout", "All of the above"],
    "correctOption": 3,
    "explanation": "Data augmentation, early stopping, and dropout are all effective regularization techniques to prevent overfitting."
  },
  {
    "testId": "dl-test-02",
    "question": "What is a Convolutional Neural Network (CNN) primarily used for?",
    "options": [
      "Image and spatial data processing",
      "Time series forecasting",
      "Natural language processing",
      "Reinforcement learning"
    ],
    "correctOption": 0,
    "explanation": "CNNs are designed for processing grid-like data such as images, leveraging convolutional layers to capture spatial hierarchies."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the purpose of a convolution layer in a CNN?",
    "options": [
      "To apply a filter (kernel) to the input to extract features",
      "To reduce the spatial dimensions of the feature maps",
      "To introduce non-linearity",
      "To classify the image"
    ],
    "correctOption": 0,
    "explanation": "A convolution layer applies a set of learnable filters to the input, producing feature maps that capture spatial patterns."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the purpose of a pooling layer in a CNN?",
    "options": [
      "To downsample feature maps, reducing computational load and providing translation invariance",
      "To increase the number of features",
      "To introduce non-linearity",
      "To classify the image"
    ],
    "correctOption": 0,
    "explanation": "Pooling layers reduce the spatial dimensions of feature maps, decreasing the number of parameters and adding robustness to small translations."
  },
  {
    "testId": "dl-test-02",
    "question": "What is a Recurrent Neural Network (RNN) primarily used for?",
    "options": [
      "Sequential data and time-series",
      "Image classification",
      "Dimensionality reduction",
      "Clustering"
    ],
    "correctOption": 0,
    "explanation": "RNNs are designed for sequential data by maintaining a hidden state that captures information from previous steps, making them suitable for time series and text."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the main advantage of LSTM over vanilla RNN?",
    "options": [
      "LSTM alleviates the vanishing gradient problem and can capture long-term dependencies",
      "LSTM is faster to train",
      "LSTM requires less data",
      "LSTM has fewer parameters"
    ],
    "correctOption": 0,
    "explanation": "LSTM introduces gating mechanisms (input, forget, output gates) that allow it to better capture long-range dependencies and mitigate vanishing gradients."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the purpose of the forget gate in an LSTM cell?",
    "options": [
      "To decide which information to discard from the cell state",
      "To decide which new information to store in the cell state",
      "To decide the output of the LSTM cell",
      "To initialize the cell state"
    ],
    "correctOption": 0,
    "explanation": "The forget gate determines which parts of the previous cell state should be forgotten (reset) based on the current input."
  },
  {
    "testId": "dl-test-02",
    "question": "What is a GRU compared to LSTM?",
    "options": [
      "A simplified version with fewer gates (reset and update) than LSTM",
      "A more complex version with additional gates",
      "A type of CNN",
      "An unsupervised learning algorithm"
    ],
    "correctOption": 0,
    "explanation": "GRU (Gated Recurrent Unit) has two gates (reset and update) and no separate cell state, making it computationally lighter than LSTM."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the purpose of an autoencoder?",
    "options": [
      "To learn efficient representations (encoding) of data, often for dimensionality reduction or anomaly detection",
      "To classify images",
      "To generate new data samples",
      "To predict time series"
    ],
    "correctOption": 0,
    "explanation": "Autoencoders consist of an encoder and decoder, learning a compressed representation of the input data that captures the most salient features."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the difference between a convolutional layer and a fully connected layer?",
    "options": [
      "Convolutional layers use local receptive fields and shared weights; fully connected layers connect all neurons",
      "Fully connected layers use local receptive fields; convolutional layers connect all neurons",
      "Both use local receptive fields",
      "Both connect all neurons"
    ],
    "correctOption": 0,
    "explanation": "Convolutional layers apply filters locally and share weights across spatial positions, while fully connected layers connect every neuron across layers."
  },
  {
    "testId": "dl-test-02",
    "question": "What is transfer learning in deep learning?",
    "options": [
      "Using a pre-trained model on a new, similar task",
      "Transferring data from one model to another",
      "Learning multiple tasks simultaneously",
      "Transferring weights from one layer to another"
    ],
    "correctOption": 0,
    "explanation": "Transfer learning involves leveraging a model pre-trained on a large dataset and fine-tuning it for a new, related task, reducing training time and data requirements."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the purpose of the attention mechanism in neural networks?",
    "options": [
      "To focus on relevant parts of the input sequence, improving performance on tasks like machine translation",
      "To reduce the number of parameters",
      "To speed up training",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Attention allows the model to dynamically weigh the importance of different input elements, helping it focus on the most relevant information."
  },
  {
    "testId": "dl-test-02",
    "question": "Which architecture is known for its use in image classification and object detection?",
    "options": ["ResNet", "LSTM", "Transformer", "Autoencoder"],
    "correctOption": 0,
    "explanation": "ResNet (Residual Network) introduced skip connections, enabling very deep CNNs and achieving state-of-the-art performance in image tasks."
  },
  {
    "testId": "dl-test-02",
    "question": "What is a skip connection (residual connection) used for?",
    "options": [
      "To allow gradients to flow directly through the network, mitigating vanishing gradients",
      "To reduce the number of parameters",
      "To increase the number of layers",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Skip connections add the input of a layer to its output, enabling gradient flow and enabling the training of very deep networks."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the role of the stride in a convolution operation?",
    "options": [
      "To determine the step size of the filter as it moves across the input",
      "To determine the size of the filter",
      "To determine the number of filters",
      "To determine the padding"
    ],
    "correctOption": 0,
    "explanation": "Stride controls how many pixels the filter moves at each step; larger stride reduces output spatial dimensions."
  },
  {
    "testId": "dl-test-02",
    "question": "What is padding in convolution?",
    "options": [
      "Adding zeros around the input to control spatial dimensions",
      "Adding non-zero values to the input",
      "Removing edges of the input",
      "Increasing the filter size"
    ],
    "correctOption": 0,
    "explanation": "Padding adds zeros to the borders of the input to preserve spatial dimensions or control output size, enabling deeper networks."
  },
  {
    "testId": "dl-test-02",
    "question": "What is a deep convolutional network?",
    "options": [
      "A CNN with many layers (e.g., VGG, ResNet) that learns hierarchical features",
      "A CNN with few layers",
      "A CNN used only for natural language",
      "A CNN without pooling layers"
    ],
    "correctOption": 0,
    "explanation": "Deep CNNs have multiple convolutional layers that learn increasingly abstract features, from edges to complex objects."
  },
  {
    "testId": "dl-test-02",
    "question": "What is a 'bottleneck' layer in a neural network?",
    "options": [
      "A layer with fewer neurons that forces the network to learn a compact representation",
      "A layer with more neurons",
      "A layer that is skipped",
      "A layer that applies dropout"
    ],
    "correctOption": 0,
    "explanation": "A bottleneck layer reduces dimensionality, encouraging the network to learn a compressed representation, often used in autoencoders."
  },
  {
    "testId": "dl-test-02",
    "question": "Which of the following is a popular deep learning framework?",
    "options": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    "correctOption": 0,
    "explanation": "TensorFlow is a widely used open-source deep learning framework. Scikit-learn is for traditional ML, Pandas for data manipulation."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the role of a softmax layer in a CNN?",
    "options": [
      "To produce probability distribution over classes for classification",
      "To reduce the spatial dimensions",
      "To introduce non-linearity",
      "To extract features"
    ],
    "correctOption": 0,
    "explanation": "Softmax is typically used in the final layer of a classification CNN to output class probabilities."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the concept of depth in a CNN?",
    "options": [
      "The number of filters (channels) in a convolutional layer",
      "The number of layers in the network",
      "The size of the input image",
      "The number of pooling layers"
    ],
    "correctOption": 0,
    "explanation": "Depth refers to the number of feature maps (channels) produced by a convolutional layer."
  },
  {
    "testId": "dl-test-02",
    "question": "What is the difference between 1D, 2D, and 3D convolutions?",
    "options": [
      "They apply to data of different dimensions: 1D for sequences, 2D for images, 3D for volumetric data",
      "They differ only in kernel size",
      "They are interchangeable",
      "3D is for color images"
    ],
    "correctOption": 0,
    "explanation": "1D convolutions are used for sequential data (e.g., text, time series), 2D for images, 3D for video or volumetric data (e.g., MRI scans)."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the Transformer architecture primarily used for?",
    "options": [
      "Natural language processing and sequence-to-sequence tasks",
      "Image classification",
      "Reinforcement learning",
      "Clustering"
    ],
    "correctOption": 0,
    "explanation": "Transformers, based on self-attention, have become the dominant architecture for NLP tasks like translation, summarization, and language modeling."
  },
  {
    "testId": "dl-test-03",
    "question": "What is self-attention in a Transformer?",
    "options": [
      "A mechanism that relates different positions of a single sequence to compute a representation",
      "A mechanism that attends to external data",
      "A mechanism that reduces the sequence length",
      "A mechanism that adds positional encoding"
    ],
    "correctOption": 0,
    "explanation": "Self-attention computes the importance of each element in a sequence with respect to every other element, allowing the model to capture dependencies."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the purpose of positional encoding in Transformers?",
    "options": [
      "To inject information about the position of tokens in the sequence, as the model is permutation-invariant",
      "To encode the position of the model",
      "To reduce the sequence length",
      "To add noise to the input"
    ],
    "correctOption": 0,
    "explanation": "Since Transformers do not have a built-in notion of order, positional encodings are added to the input embeddings to preserve positional information."
  },
  {
    "testId": "dl-test-03",
    "question": "What is a Generative Adversarial Network (GAN) composed of?",
    "options": [
      "A generator and a discriminator",
      "An encoder and a decoder",
      "A CNN and an RNN",
      "A Transformer and a classifier"
    ],
    "correctOption": 0,
    "explanation": "GANs consist of a generator that creates fake data and a discriminator that tries to distinguish real from fake, trained adversarially."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the primary application of GANs?",
    "options": [
      "Generating realistic synthetic data (images, videos, audio)",
      "Classifying images",
      "Clustering data",
      "Dimensionality reduction"
    ],
    "correctOption": 0,
    "explanation": "GANs are widely used for generating high-quality synthetic data, including realistic images, deepfakes, and data augmentation."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the difference between supervised learning and reinforcement learning?",
    "options": [
      "Supervised learning uses labeled data; reinforcement learning learns from rewards and interactions",
      "Reinforcement learning uses labeled data; supervised learning learns from rewards",
      "Both use labeled data",
      "Both learn from rewards"
    ],
    "correctOption": 0,
    "explanation": "Supervised learning relies on labeled input-output pairs; reinforcement learning learns optimal behavior through trial and error using rewards."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the role of the actor-critic architecture in deep reinforcement learning?",
    "options": [
      "The actor selects actions; the critic evaluates them",
      "The critic selects actions; the actor evaluates them",
      "Both select actions",
      "Both evaluate actions"
    ],
    "correctOption": 0,
    "explanation": "In actor-critic, the actor decides which action to take, while the critic estimates the value of the action, providing feedback to the actor."
  },
  {
    "testId": "dl-test-03",
    "question": "What is self-supervised learning?",
    "options": [
      "A learning approach where the model creates its own labels from the data itself",
      "Learning without any data",
      "Learning with human-provided labels",
      "Learning with reinforcement"
    ],
    "correctOption": 0,
    "explanation": "Self-supervised learning uses pretext tasks (e.g., predicting missing parts of input) to generate supervisory signals from unlabeled data."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the BERT model known for?",
    "options": [
      "Bidirectional encoder representations from Transformers, for language understanding",
      "Image classification",
      "Reinforcement learning",
      "Speech recognition"
    ],
    "correctOption": 0,
    "explanation": "BERT is a Transformer-based model that learns bidirectional representations from unlabeled text, achieving state-of-the-art performance on many NLP tasks."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the purpose of fine-tuning in transfer learning?",
    "options": [
      "To adapt a pre-trained model to a specific downstream task by updating its weights",
      "To reduce the model size",
      "To speed up inference",
      "To initialize the model"
    ],
    "correctOption": 0,
    "explanation": "Fine-tuning takes a pre-trained model and continues training on a new dataset for a related task, adjusting weights to fit the new domain."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the concept of 'explainability' or 'interpretability' in deep learning?",
    "options": [
      "The ability to understand and explain the decisions made by the model",
      "The ability to train the model faster",
      "The ability to handle missing data",
      "The ability to reduce overfitting"
    ],
    "correctOption": 0,
    "explanation": "Explainability refers to techniques that help humans understand why a model made a particular prediction, crucial for trust and debugging."
  },
  {
    "testId": "dl-test-03",
    "question": "What is a common method for explaining predictions of deep neural networks?",
    "options": ["LIME", "SHAP", "Grad-CAM", "All of the above"],
    "correctOption": 3,
    "explanation": "LIME, SHAP, and Grad-CAM are popular interpretability methods that highlight important features or input regions for a model's decision."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the purpose of using a variational autoencoder (VAE)?",
    "options": [
      "To generate new data by learning a probabilistic latent space",
      "To classify images",
      "To cluster data",
      "To reduce dimensionality"
    ],
    "correctOption": 0,
    "explanation": "VAEs are generative models that learn a continuous latent distribution, allowing sampling of new data points similar to the training distribution."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the main challenge of training GANs?",
    "options": [
      "Mode collapse and instability due to adversarial training dynamics",
      "Lack of training data",
      "High computational cost only",
      "Difficult to implement"
    ],
    "correctOption": 0,
    "explanation": "GANs often suffer from mode collapse (generator produces limited variety) and instability (oscillating or diverging losses) that require careful tuning."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the concept of 'neural style transfer'?",
    "options": [
      "Combining the content of one image with the style of another using CNNs",
      "Transferring weights between models",
      "Converting images to cartoon style",
      "Replacing colors in an image"
    ],
    "correctOption": 0,
    "explanation": "Neural style transfer uses a pre-trained CNN to separate and recombine content and style representations from two images."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the role of the discriminator in a GAN?",
    "options": [
      "To distinguish between real and generated data",
      "To generate fake data",
      "To classify the data",
      "To reduce the dimensionality"
    ],
    "correctOption": 0,
    "explanation": "The discriminator's goal is to correctly classify whether an input is real or generated by the generator."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the 'mode collapse' problem in GANs?",
    "options": [
      "The generator produces a limited variety of outputs, ignoring the full distribution",
      "The discriminator becomes too powerful",
      "The training diverges",
      "The loss function becomes zero"
    ],
    "correctOption": 0,
    "explanation": "Mode collapse occurs when the generator only produces samples from a few modes of the target distribution, missing diversity."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the use of reinforcement learning in deep learning?",
    "options": [
      "To train agents to make decisions in environments by maximizing cumulative rewards",
      "To classify images",
      "To cluster data",
      "To reduce dimensionality"
    ],
    "correctOption": 0,
    "explanation": "Deep reinforcement learning combines deep neural networks with RL to solve complex decision-making tasks like games and robotics."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the importance of ethical AI in deep learning?",
    "options": [
      "To ensure fairness, accountability, and transparency in AI systems",
      "To increase model accuracy",
      "To speed up training",
      "To reduce computational cost"
    ],
    "correctOption": 0,
    "explanation": "Ethical AI addresses bias, fairness, privacy, and societal impact, ensuring that AI systems are beneficial and non-discriminatory."
  },
  {
    "testId": "dl-test-03",
    "question": "What is a common technique for deploying deep learning models in production?",
    "options": [
      "Converting models to ONNX or TensorRT for optimized inference",
      "Using only Python",
      "Running models on CPU only",
      "Retraining models every day"
    ],
    "correctOption": 0,
    "explanation": "Optimized formats like ONNX and TensorRT allow models to run efficiently on various hardware for production deployment."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the purpose of model quantization in deep learning?",
    "options": [
      "To reduce model size and inference time by using lower-precision numbers",
      "To increase model accuracy",
      "To simplify training",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Quantization reduces the bit-width of model parameters, decreasing memory footprint and speeding up inference, often with minimal accuracy loss."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the concept of 'one-shot learning'?",
    "options": [
      "Learning to recognize new classes from very few (or one) examples",
      "Learning with only one training epoch",
      "Learning without any data",
      "Learning with reinforcement only"
    ],
    "correctOption": 0,
    "explanation": "One-shot learning aims to classify new categories using a single or very limited number of training examples, often using meta-learning or siamese networks."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the role of the transformer decoder in tasks like text generation?",
    "options": [
      "To generate sequences by attending to encoder outputs and previously generated tokens",
      "To encode the input sequence",
      "To classify the output",
      "To reduce the sequence length"
    ],
    "correctOption": 0,
    "explanation": "The decoder in a transformer autoregressively generates output tokens, attending to the encoder output and its own previous outputs."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the purpose of using a validation set during training?",
    "options": [
      "To evaluate model performance on unseen data and tune hyperparameters",
      "To train the model weights",
      "To initialize the weights",
      "To increase the training data size"
    ],
    "correctOption": 0,
    "explanation": "The validation set is used to monitor performance and adjust hyperparameters, helping to avoid overfitting and select the best model."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the purpose of early stopping in deep learning?",
    "options": [
      "To halt training when validation performance stops improving, preventing overfitting",
      "To stop training after a fixed number of epochs",
      "To stop training when loss becomes zero",
      "To stop training when accuracy reaches 100%"
    ],
    "correctOption": 0,
    "explanation": "Early stopping monitors validation loss and stops training when it starts to increase, reducing overfitting and saving time."
  },
  {
    "testId": "dl-test-03",
    "question": "What is the difference between deep learning and machine learning?",
    "options": [
      "Deep learning uses deep neural networks with many layers; machine learning encompasses a broader set of algorithms",
      "Deep learning is supervised; machine learning is unsupervised",
      "Deep learning is for large data; machine learning is for small data",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Deep learning is a subset of machine learning that uses artificial neural networks with many hidden layers to learn representations automatically."
  }
];

const filepath = path.join(__dirname, '../src/data/questions.js');
let content = fs.readFileSync(filepath, 'utf8');

content = content.trim();
if (content.endsWith('];')) {
  content = content.slice(0, -2);
} else if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

content += ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log('Added ' + newQuestions.length + ' dl questions to questions.js');
