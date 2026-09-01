const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "ml-test-01",
    "question": "What is Machine Learning?",
    "options": [
      "A way to clean and organize data",
      "A subset of Artificial Intelligence that enables systems to learn from data",
      "A database management technique",
      "A programming language for statistical analysis"
    ],
    "correctOption": 1,
    "explanation": "Machine Learning is a subset of AI that enables systems to automatically learn and improve from experience (data) without being explicitly programmed.[reference:0]"
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following is NOT a type of machine learning?",
    "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Constructive Learning"],
    "correctOption": 3,
    "explanation": "The three main types of ML are Supervised, Unsupervised, and Reinforcement Learning. 'Constructive Learning' is not a recognized ML category.[reference:1][reference:2]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the primary goal of supervised learning?",
    "options": [
      "To discover hidden patterns in data without labels",
      "To learn a mapping from inputs to outputs using labeled data",
      "To maximize the number of clusters",
      "To reduce the dimensionality of the dataset"
    ],
    "correctOption": 1,
    "explanation": "Supervised learning uses labeled data to learn a function that maps inputs to desired outputs.[reference:3]"
  },
  {
    "testId": "ml-test-01",
    "question": "In machine learning, what is 'training data'?",
    "options": [
      "Data used to test the accuracy of the model",
      "Data used to build and train the model",
      "Data that is stored in memory",
      "Data that is never used in the learning process"
    ],
    "correctOption": 1,
    "explanation": "Training data is the dataset used to train a machine learning model by adjusting its parameters.[reference:4]"
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following is an example of unsupervised learning?",
    "options": ["Linear Regression", "Decision Trees", "K-Means Clustering", "Support Vector Machines"],
    "correctOption": 2,
    "explanation": "K-Means clustering is an unsupervised learning algorithm used to group unlabeled data into clusters.[reference:5][reference:6]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the main goal of unsupervised learning?",
    "options": [
      "To predict continuous values",
      "To classify data into predefined categories",
      "To find patterns and groupings in unlabeled data",
      "To optimize a reward function"
    ],
    "correctOption": 2,
    "explanation": "Unsupervised learning aims to discover hidden patterns, structures, or groupings in data without labeled outputs.[reference:7]"
  },
  {
    "testId": "ml-test-01",
    "question": "In reinforcement learning, what is an 'agent'?",
    "options": [
      "A function that maps inputs to outputs",
      "A program that learns by interacting with an environment",
      "A set of training data points",
      "A loss function used for optimization"
    ],
    "correctOption": 1,
    "explanation": "In reinforcement learning, an agent learns to make decisions by interacting with an environment and receiving rewards or penalties.[reference:8]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the first step in a typical machine learning workflow?",
    "options": ["Model Selection", "Data Collection", "Hyperparameter Tuning", "Model Evaluation"],
    "correctOption": 1,
    "explanation": "The first step in any ML workflow is collecting relevant data for the problem at hand.[reference:9]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the purpose of a loss function in machine learning?",
    "options": [
      "To improve computational speed",
      "To measure how well the model is performing",
      "To increase the dataset size",
      "To decrease the number of parameters"
    ],
    "correctOption": 1,
    "explanation": "A loss function quantifies the difference between the model's predictions and the actual targets, guiding the optimization process.[reference:10]"
  },
  {
    "testId": "ml-test-01",
    "question": "Which type of learning uses labeled data to train models?",
    "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-supervised Learning"],
    "correctOption": 0,
    "explanation": "Supervised learning relies on labeled datasets where each input has a corresponding output label.[reference:11]"
  },
  {
    "testId": "ml-test-01",
    "question": "What does the term 'feature' refer to in machine learning?",
    "options": [
      "The output variable being predicted",
      "An individual measurable property of the data being used as input",
      "The number of training examples",
      "The accuracy of the model"
    ],
    "correctOption": 1,
    "explanation": "A feature is a measurable property or characteristic of the data used as input to a machine learning model."
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following is a characteristic of a good machine learning model?",
    "options": [
      "It performs perfectly on training data but poorly on new data",
      "It generalizes well to unseen data",
      "It has very high variance",
      "It uses all available features regardless of relevance"
    ],
    "correctOption": 1,
    "explanation": "A good ML model should generalize well, meaning it performs well on new, unseen data."
  },
  {
    "testId": "ml-test-01",
    "question": "What is the difference between a parameter and a hyperparameter?",
    "options": [
      "Parameters are learned from data; hyperparameters are set before training",
      "Hyperparameters are learned from data; parameters are set before training",
      "Both are learned from data",
      "Both are set before training"
    ],
    "correctOption": 0,
    "explanation": "Parameters are learned during training (e.g., weights in a neural network). Hyperparameters are set before training (e.g., learning rate, number of trees)."
  },
  {
    "testId": "ml-test-01",
    "question": "Which algorithm is most commonly used for classification tasks?",
    "options": ["K-Means", "Random Forest", "Principal Component Analysis", "Apriori Algorithm"],
    "correctOption": 1,
    "explanation": "Random Forest is a popular ensemble learning algorithm widely used for classification tasks.[reference:12]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the term for a model that learns from data but is not explicitly programmed?",
    "options": ["Static coding", "Hardcoded loops", "Learning", "Debugging"],
    "correctOption": 2,
    "explanation": "Machine learning is defined by the ability of a system to improve over time without being explicitly programmed.[reference:13]"
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following best describes 'overfitting'?",
    "options": [
      "A model that performs well on training data but poorly on test data",
      "A model that generalizes well to new data",
      "A model that ignores noise in the data",
      "A model with low variance"
    ],
    "correctOption": 0,
    "explanation": "Overfitting occurs when a model learns the training data too well, capturing noise, and fails to generalize to unseen data.[reference:14]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the main disadvantage of supervised learning?",
    "options": [
      "It cannot handle real-time data",
      "It requires a large amount of labeled data",
      "It is always less accurate than unsupervised learning",
      "It needs GPU for training"
    ],
    "correctOption": 1,
    "explanation": "Supervised learning requires labeled data, which can be expensive and time-consuming to obtain.[reference:15]"
  },
  {
    "testId": "ml-test-01",
    "question": "What does dimensionality reduction aim to achieve?",
    "options": [
      "To increase the number of features",
      "To reduce the number of features while preserving important information",
      "To remove all features",
      "To increase computational cost"
    ],
    "correctOption": 1,
    "explanation": "Dimensionality reduction techniques aim to reduce the number of features while retaining the essential information."
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following is a supervised learning application?",
    "options": ["Clustering customers", "Spam detection", "Anomaly detection", "Market basket analysis"],
    "correctOption": 1,
    "explanation": "Spam detection is a classic supervised learning application where emails are classified as spam or not spam using labeled data.[reference:16]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the 'bias-variance tradeoff' in machine learning?",
    "options": [
      "The balance between model complexity and generalization ability",
      "The tradeoff between training time and test time",
      "The balance between data size and model size",
      "The tradeoff between accuracy and speed"
    ],
    "correctOption": 0,
    "explanation": "The bias-variance tradeoff describes the balance between a model's ability to fit the training data (low bias) and generalize to new data (low variance)."
  },
  {
    "testId": "ml-test-01",
    "question": "In machine learning, what is a 'label'?",
    "options": [
      "The output variable that the model is trying to predict",
      "An input feature",
      "A type of algorithm",
      "A data cleaning technique"
    ],
    "correctOption": 0,
    "explanation": "In supervised learning, a label is the output variable (target) that the model is trained to predict."
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following is an unsupervised learning application?",
    "options": ["Image classification", "Customer segmentation", "Price prediction", "Fraud detection"],
    "correctOption": 1,
    "explanation": "Customer segmentation using clustering is a common unsupervised learning application.[reference:17]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the purpose of splitting data into training and test sets?",
    "options": [
      "To increase the dataset size",
      "To evaluate model performance on unseen data",
      "To train the model faster",
      "To remove duplicates"
    ],
    "correctOption": 1,
    "explanation": "Splitting data allows us to evaluate how well the model generalizes to new, unseen data."
  },
  {
    "testId": "ml-test-01",
    "question": "What is the term for the process of selecting the best features for a model?",
    "options": ["Feature Engineering", "Feature Selection", "Dimensionality Reduction", "Normalization"],
    "correctOption": 1,
    "explanation": "Feature selection is the process of choosing a subset of relevant features for use in model construction."
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following is a type of machine learning where an agent learns by trial and error?",
    "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-supervised Learning"],
    "correctOption": 2,
    "explanation": "Reinforcement learning involves an agent learning optimal actions through trial and error interactions with an environment."
  },
  {
    "testId": "ml-test-01",
    "question": "What is 'data leakage' in machine learning?",
    "options": [
      "When data is not stored securely",
      "When information from outside the training dataset is used to create the model",
      "When the model leaks predictions",
      "When data is corrupted"
    ],
    "correctOption": 1,
    "explanation": "Data leakage occurs when information from the test set or future data is used during training, leading to overly optimistic performance estimates."
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following is a key difference between supervised and unsupervised learning?",
    "options": [
      "Supervised learning predicts labels; unsupervised learning discovers patterns",
      "Supervised learning is always more accurate",
      "Unsupervised learning requires labeled data",
      "Both require the same type of data"
    ],
    "correctOption": 0,
    "explanation": "Supervised learning predicts outcomes using labeled data, while unsupervised learning discovers patterns in unlabeled data.[reference:18]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is the role of a validation set in machine learning?",
    "options": [
      "To train the model weights",
      "To tune hyperparameters and prevent overfitting",
      "To evaluate the final model performance",
      "To collect more data"
    ],
    "correctOption": 1,
    "explanation": "A validation set is used to tune hyperparameters and evaluate model performance during training to prevent overfitting.[reference:19]"
  },
  {
    "testId": "ml-test-01",
    "question": "What is 'inference' in the context of machine learning?",
    "options": [
      "The process of training a model",
      "The process of making predictions with a trained model",
      "The process of collecting data",
      "The process of cleaning data"
    ],
    "correctOption": 1,
    "explanation": "Inference refers to using a trained model to make predictions or decisions on new data."
  },
  {
    "testId": "ml-test-01",
    "question": "Which of the following best describes 'underfitting'?",
    "options": [
      "A model that performs poorly on both training and test data",
      "A model that performs well on training data but poorly on test data",
      "A model with high variance",
      "A model that has too many parameters"
    ],
    "correctOption": 0,
    "explanation": "Underfitting occurs when a model is too simple to capture the underlying patterns in the data, performing poorly on both training and test sets."
  },
  {
    "testId": "ml-test-02",
    "question": "What is the goal of regression in supervised learning?",
    "options": [
      "To predict categorical outcomes",
      "To predict continuous numerical values",
      "To cluster data points",
      "To reduce dimensionality"
    ],
    "correctOption": 1,
    "explanation": "Regression tasks involve predicting continuous numerical values, such as house prices or temperatures.[reference:20]"
  },
  {
    "testId": "ml-test-02",
    "question": "Which of the following is a linear model for classification?",
    "options": ["SVM with RBF kernel", "Naive Bayes", "Logistic Regression", "Random Forest"],
    "correctOption": 2,
    "explanation": "Logistic Regression is a linear model commonly used for binary classification.[reference:21]"
  },
  {
    "testId": "ml-test-02",
    "question": "What is the main difference between regression and classification?",
    "options": [
      "Regression predicts continuous values; classification predicts discrete categories",
      "Regression predicts categories; classification predicts continuous values",
      "Both predict continuous values",
      "Both predict categories"
    ],
    "correctOption": 0,
    "explanation": "Regression predicts continuous numerical values, while classification predicts discrete class labels.[reference:22]"
  },
  {
    "testId": "ml-test-02",
    "question": "Which algorithm is used for classification tasks?",
    "options": ["K-Means", "Linear Regression", "Decision Tree", "PCA"],
    "correctOption": 2,
    "explanation": "Decision Trees are widely used for classification tasks.[reference:23]"
  },
  {
    "testId": "ml-test-02",
    "question": "In linear regression, what does the slope coefficient represent?",
    "options": [
      "The predicted value when all features are zero",
      "The change in the target variable for a one-unit change in the feature",
      "The correlation between features",
      "The standard deviation of the residuals"
    ],
    "correctOption": 1,
    "explanation": "In linear regression, the slope coefficient represents the average change in the target variable for each 1-unit change in the feature."
  },
  {
    "testId": "ml-test-02",
    "question": "What is the purpose of the sigmoid function in logistic regression?",
    "options": [
      "To scale features to the same range",
      "To map predictions to probabilities between 0 and 1",
      "To reduce the number of features",
      "To add regularization"
    ],
    "correctOption": 1,
    "explanation": "The sigmoid function maps the output of logistic regression to a probability between 0 and 1."
  },
  {
    "testId": "ml-test-02",
    "question": "Which of the following is a non-parametric algorithm?",
    "options": ["Linear Regression", "Logistic Regression", "K-Nearest Neighbors (KNN)", "SVM with linear kernel"],
    "correctOption": 2,
    "explanation": "K-Nearest Neighbors is a non-parametric algorithm that makes predictions based on local similarity."
  },
  {
    "testId": "ml-test-02",
    "question": "What does the 'K' in K-Nearest Neighbors represent?",
    "options": [
      "The number of clusters",
      "The number of neighbors to consider for prediction",
      "The number of features",
      "The number of classes"
    ],
    "correctOption": 1,
    "explanation": "In KNN, 'K' represents the number of nearest neighbors considered when making a prediction."
  },
  {
    "testId": "ml-test-02",
    "question": "Which of the following is a supervised learning task?",
    "options": ["Clustering", "Classification", "Association Rule Mining", "Dimensionality Reduction"],
    "correctOption": 1,
    "explanation": "Classification is a supervised learning task where models predict discrete labels.[reference:24]"
  },
  {
    "testId": "ml-test-02",
    "question": "What is the target in supervised learning?",
    "options": ["Not needed", "A label or output variable", "A cluster center", "A distance function"],
    "correctOption": 1,
    "explanation": "The target in supervised learning is the label or output variable that the model is trying to predict.[reference:25]"
  },
  {
    "testId": "ml-test-02",
    "question": "Which metric is commonly used to evaluate regression models?",
    "options": ["Accuracy", "Precision", "Mean Absolute Error (MAE)", "F1-Score"],
    "correctOption": 2,
    "explanation": "Mean Absolute Error is a common metric for evaluating regression models, measuring the average absolute difference between predictions and actual values."
  },
  {
    "testId": "ml-test-02",
    "question": "What is the purpose of feature scaling in supervised learning?",
    "options": [
      "To make features have the same range or distribution",
      "To remove irrelevant features",
      "To increase the number of features",
      "To add noise to the data"
    ],
    "correctOption": 0,
    "explanation": "Feature scaling ensures that features contribute equally to the model, preventing features with larger scales from dominating."
  },
  {
    "testId": "ml-test-02",
    "question": "Which algorithm is based on the concept of margins?",
    "options": ["K-Nearest Neighbors", "Support Vector Machines (SVM)", "Decision Trees", "Naive Bayes"],
    "correctOption": 1,
    "explanation": "Support Vector Machines aim to find the hyperplane that maximizes the margin between classes."
  },
  {
    "testId": "ml-test-02",
    "question": "What is the 'kernel trick' in SVM?",
    "options": [
      "A technique to transform data into a higher-dimensional space for linear separation",
      "A method to reduce the number of features",
      "A technique to handle missing data",
      "A method to speed up training"
    ],
    "correctOption": 0,
    "explanation": "The kernel trick allows SVM to efficiently operate in high-dimensional space without explicitly computing the transformation."
  },
  {
    "testId": "ml-test-02",
    "question": "What is the Naive Bayes classifier based on?",
    "options": [
      "Bayes' theorem with the assumption of feature independence",
      "Decision tree splitting rules",
      "Support vector margins",
      "Neural network architecture"
    ],
    "correctOption": 0,
    "explanation": "Naive Bayes applies Bayes' theorem with the 'naive' assumption that features are conditionally independent.[reference:26]"
  },
  {
    "testId": "ml-test-02",
    "question": "Which of the following is a tree-based ensemble method?",
    "options": ["Logistic Regression", "K-Means", "Random Forest", "PCA"],
    "correctOption": 2,
    "explanation": "Random Forest is an ensemble method that combines multiple decision trees for improved accuracy.[reference:27]"
  },
  {
    "testId": "ml-test-02",
    "question": "What is the purpose of a decision tree's leaf nodes?",
    "options": [
      "To represent the final prediction or class label",
      "To represent a decision based on a feature",
      "To split the data further",
      "To store the feature names"
    ],
    "correctOption": 0,
    "explanation": "Leaf nodes in a decision tree represent the final output prediction or class label."
  },
  {
    "testId": "ml-test-02",
    "question": "What is the main advantage of ensemble methods like Random Forest?",
    "options": [
      "They always train faster than single models",
      "They combine multiple models to reduce overfitting and improve accuracy",
      "They require less data",
      "They are easier to interpret"
    ],
    "correctOption": 1,
    "explanation": "Ensemble methods combine multiple models to improve robustness and reduce overfitting, often achieving better performance."
  },
  {
    "testId": "ml-test-02",
    "question": "What is the difference between bagging and boosting?",
    "options": [
      "Bagging trains models in parallel; boosting trains models sequentially",
      "Boosting trains models in parallel; bagging trains models sequentially",
      "Both train models in parallel",
      "Both train models sequentially"
    ],
    "correctOption": 0,
    "explanation": "Bagging (e.g., Random Forest) trains models independently in parallel. Boosting (e.g., AdaBoost, XGBoost) trains models sequentially, each correcting previous errors."
  },
  {
    "testId": "ml-test-02",
    "question": "Which activation function is commonly used in the output layer for binary classification?",
    "options": ["ReLU", "Sigmoid", "Tanh", "Softmax"],
    "correctOption": 1,
    "explanation": "Sigmoid is commonly used in the output layer for binary classification, mapping outputs to probabilities between 0 and 1."
  },
  {
    "testId": "ml-test-02",
    "question": "What is L1 regularization used for?",
    "options": [
      "To encourage sparsity in feature weights",
      "To encourage all weights to be small",
      "To speed up training",
      "To increase model complexity"
    ],
    "correctOption": 0,
    "explanation": "L1 regularization (Lasso) encourages sparsity by shrinking some feature weights to zero, effectively performing feature selection."
  },
  {
    "testId": "ml-test-02",
    "question": "Which of the following is a supervised learning algorithm for both classification and regression?",
    "options": ["K-Means", "Decision Tree", "PCA", "Apriori"],
    "correctOption": 1,
    "explanation": "Decision Trees can be used for both classification and regression tasks."
  },
  {
    "testId": "ml-test-03",
    "question": "What is the primary goal of clustering algorithms?",
    "options": [
      "To predict continuous values",
      "To group similar data points together",
      "To classify data into predefined categories",
      "To reduce the number of features"
    ],
    "correctOption": 1,
    "explanation": "Clustering algorithms aim to group similar data points into clusters based on their characteristics.[reference:28]"
  },
  {
    "testId": "ml-test-03",
    "question": "Which of the following is a clustering algorithm?",
    "options": ["Linear Regression", "Logistic Regression", "K-Means", "Decision Tree"],
    "correctOption": 2,
    "explanation": "K-Means is a popular clustering algorithm used for unsupervised learning.[reference:29]"
  },
  {
    "testId": "ml-test-03",
    "question": "What is the main purpose of Principal Component Analysis (PCA)?",
    "options": ["To classify data", "To reduce dimensionality", "To cluster data", "To detect anomalies"],
    "correctOption": 1,
    "explanation": "PCA is used for dimensionality reduction, transforming data into a lower-dimensional space while preserving variance.[reference:30]"
  },
  {
    "testId": "ml-test-03",
    "question": "What does the 'K' in K-Means clustering represent?",
    "options": [
      "The number of features",
      "The number of clusters to form",
      "The number of iterations",
      "The number of data points"
    ],
    "correctOption": 1,
    "explanation": "In K-Means, 'K' represents the predetermined number of clusters to partition the data into."
  },
  {
    "testId": "ml-test-03",
    "question": "What is the elbow method used for in K-Means clustering?",
    "options": [
      "To determine the optimal number of clusters",
      "To initialize cluster centroids",
      "To calculate cluster distances",
      "To evaluate clustering performance"
    ],
    "correctOption": 0,
    "explanation": "The elbow method plots the within-cluster sum of squares against the number of clusters to identify the optimal 'K'."
  },
  {
    "testId": "ml-test-03",
    "question": "Which of the following is a dimensionality reduction technique?",
    "options": ["K-Means", "DBSCAN", "t-SNE", "Apriori"],
    "correctOption": 2,
    "explanation": "t-SNE is a dimensionality reduction technique commonly used for visualizing high-dimensional data."
  },
  {
    "testId": "ml-test-03",
    "question": "What is the difference between PCA and t-SNE?",
    "options": [
      "PCA is linear; t-SNE is non-linear",
      "t-SNE is linear; PCA is non-linear",
      "Both are linear",
      "Both are non-linear"
    ],
    "correctOption": 0,
    "explanation": "PCA performs linear dimensionality reduction, while t-SNE is a non-linear technique better suited for visualizing complex structures."
  },
  {
    "testId": "ml-test-03",
    "question": "Which algorithm is used for anomaly detection?",
    "options": ["Decision Trees", "K-Nearest Neighbors", "Isolation Forest", "Linear Regression"],
    "correctOption": 2,
    "explanation": "Isolation Forest is an algorithm specifically designed for anomaly detection.[reference:31]"
  },
  {
    "testId": "ml-test-03",
    "question": "What is association rule mining used for?",
    "options": [
      "To find relationships between items in transactional data",
      "To cluster data points",
      "To reduce dimensionality",
      "To classify data"
    ],
    "correctOption": 0,
    "explanation": "Association rule mining discovers interesting relationships (rules) between items in large datasets, such as market basket analysis."
  },
  {
    "testId": "ml-test-03",
    "question": "What is the Apriori algorithm used for?",
    "options": ["Classification", "Clustering", "Association Rule Mining", "Dimensionality Reduction"],
    "correctOption": 2,
    "explanation": "The Apriori algorithm is a classic algorithm for mining frequent itemsets and generating association rules."
  },
  {
    "testId": "ml-test-03",
    "question": "Which metric is used to evaluate the quality of clusters?",
    "options": ["Accuracy", "Silhouette Score", "Precision", "F1-Score"],
    "correctOption": 1,
    "explanation": "The Silhouette Score measures how similar a point is to its own cluster compared to other clusters, evaluating clustering quality."
  },
  {
    "testId": "ml-test-03",
    "question": "What is hierarchical clustering?",
    "options": [
      "A clustering method that builds a tree of clusters",
      "A clustering method that requires the number of clusters to be specified",
      "A clustering method that only works on numerical data",
      "A clustering method that uses neural networks"
    ],
    "correctOption": 0,
    "explanation": "Hierarchical clustering creates a dendrogram (tree) of clusters by recursively merging or splitting clusters."
  },
  {
    "testId": "ml-test-03",
    "question": "What is the difference between agglomerative and divisive clustering?",
    "options": [
      "Agglomerative is bottom-up; divisive is top-down",
      "Divisive is bottom-up; agglomerative is top-down",
      "Both are bottom-up",
      "Both are top-down"
    ],
    "correctOption": 0,
    "explanation": "Agglomerative clustering starts with each point as its own cluster and merges them. Divisive starts with all points in one cluster and splits them."
  },
  {
    "testId": "ml-test-03",
    "question": "What is DBSCAN?",
    "options": [
      "A clustering algorithm that groups points based on density",
      "A dimensionality reduction technique",
      "A classification algorithm",
      "A regression algorithm"
    ],
    "correctOption": 0,
    "explanation": "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups data points based on density, identifying clusters of arbitrary shape."
  },
  {
    "testId": "ml-test-03",
    "question": "What is the main advantage of DBSCAN over K-Means?",
    "options": [
      "It requires the number of clusters to be specified",
      "It can find clusters of arbitrary shape and handle noise",
      "It is faster for large datasets",
      "It works only on numerical data"
    ],
    "correctOption": 1,
    "explanation": "DBSCAN can find clusters of arbitrary shape and does not require specifying the number of clusters, unlike K-Means."
  },
  {
    "testId": "ml-test-03",
    "question": "Which of the following is an unsupervised learning application?",
    "options": ["Spam detection", "Customer segmentation", "Stock price prediction", "Fraud detection"],
    "correctOption": 1,
    "explanation": "Customer segmentation using clustering is a common unsupervised learning application.[reference:32]"
  },
  {
    "testId": "ml-test-03",
    "question": "What is the main disadvantage of PCA?",
    "options": [
      "It is computationally expensive",
      "It is a linear technique and may not capture non-linear relationships",
      "It requires labeled data",
      "It increases the number of features"
    ],
    "correctOption": 1,
    "explanation": "PCA is a linear dimensionality reduction technique, which may not capture complex non-linear relationships in the data."
  },
  {
    "testId": "ml-test-03",
    "question": "What is the purpose of standardizing features before applying PCA?",
    "options": [
      "To ensure all features contribute equally to the principal components",
      "To reduce the number of features",
      "To handle missing values",
      "To increase the variance"
    ],
    "correctOption": 0,
    "explanation": "Standardizing features ensures that features with larger scales do not dominate the principal components."
  },
  {
    "testId": "ml-test-04",
    "question": "What is the purpose of cross-validation in machine learning?",
    "options": [
      "To train the model on more data",
      "To evaluate model performance and prevent overfitting",
      "To select the best features",
      "To increase the dataset size"
    ],
    "correctOption": 1,
    "explanation": "Cross-validation is used to assess how well a model generalizes to unseen data and to detect overfitting.[reference:33]"
  },
  {
    "testId": "ml-test-04",
    "question": "What is a confusion matrix used for?",
    "options": [
      "To determine whether data is balanced",
      "To evaluate classification model performance",
      "To visualize data distribution",
      "To optimize hyperparameters"
    ],
    "correctOption": 1,
    "explanation": "A confusion matrix provides a breakdown of correct and incorrect predictions for each class, evaluating classification performance.[reference:34]"
  },
  {
    "testId": "ml-test-04",
    "question": "Which metric measures the percentage of correctly classified instances?",
    "options": ["Precision", "Recall", "Accuracy", "F1-Score"],
    "correctOption": 2,
    "explanation": "Accuracy is the ratio of correctly predicted instances to total instances.[reference:35]"
  },
  {
    "testId": "ml-test-04",
    "question": "What does precision measure in a classification model?",
    "options": [
      "The proportion of true positives among all positive predictions",
      "The proportion of true positives among all actual positives",
      "The overall accuracy of the model",
      "The balance between precision and recall"
    ],
    "correctOption": 0,
    "explanation": "Precision = TP / (TP + FP), measuring how many of the predicted positive cases were actually positive."
  },
  {
    "testId": "ml-test-04",
    "question": "What does recall measure in a classification model?",
    "options": [
      "The proportion of true positives among all positive predictions",
      "The proportion of true positives among all actual positives",
      "The overall accuracy of the model",
      "The balance between precision and recall"
    ],
    "correctOption": 1,
    "explanation": "Recall = TP / (TP + FN), measuring how many of the actual positive cases were correctly identified."
  },
  {
    "testId": "ml-test-04",
    "question": "What is the F1-Score?",
    "options": [
      "The harmonic mean of precision and recall",
      "The arithmetic mean of precision and recall",
      "The product of precision and recall",
      "The difference between precision and recall"
    ],
    "correctOption": 0,
    "explanation": "The F1-Score is the harmonic mean of precision and recall, providing a single metric that balances both."
  },
  {
    "testId": "ml-test-04",
    "question": "What does the ROC curve plot?",
    "options": [
      "Precision against recall",
      "True Positive Rate against False Positive Rate",
      "Accuracy against error rate",
      "Training error against test error"
    ],
    "correctOption": 1,
    "explanation": "The ROC curve plots the True Positive Rate (Recall) against the False Positive Rate at various threshold settings."
  },
  {
    "testId": "ml-test-04",
    "question": "What is the AUC-ROC score?",
    "options": [
      "The area under the ROC curve, measuring the model's ability to distinguish between classes",
      "The accuracy of the model",
      "The precision of the model",
      "The recall of the model"
    ],
    "correctOption": 0,
    "explanation": "AUC-ROC measures the model's ability to distinguish between positive and negative classes, with higher values indicating better performance."
  },
  {
    "testId": "ml-test-04",
    "question": "What is overfitting in machine learning?",
    "options": [
      "A model that performs well on training data but poorly on test data",
      "A model that performs well on test data but poorly on training data",
      "A model that performs equally well on both training and test data",
      "A model that has low variance"
    ],
    "correctOption": 0,
    "explanation": "Overfitting occurs when a model captures noise in the training data, leading to poor generalization on new data.[reference:36]"
  },
  {
    "testId": "ml-test-04",
    "question": "What is underfitting in machine learning?",
    "options": [
      "A model that performs poorly on both training and test data",
      "A model that performs well on training data but poorly on test data",
      "A model that performs well on test data but poorly on training data",
      "A model that has high variance"
    ],
    "correctOption": 0,
    "explanation": "Underfitting occurs when a model is too simple to capture the underlying patterns, performing poorly on both training and test data."
  },
  {
    "testId": "ml-test-04",
    "question": "Which technique is used to prevent overfitting?",
    "options": ["Increasing the number of features", "Regularization", "Decreasing the training data", "Increasing model complexity"],
    "correctOption": 1,
    "explanation": "Regularization adds a penalty to the loss function to constrain model complexity, helping prevent overfitting."
  },
  {
    "testId": "ml-test-04",
    "question": "What is the purpose of regularization?",
    "options": [
      "To increase model complexity",
      "To prevent overfitting by penalizing large coefficients",
      "To speed up training",
      "To handle missing data"
    ],
    "correctOption": 1,
    "explanation": "Regularization adds a penalty term to the loss function, discouraging large coefficients and reducing overfitting."
  },
  {
    "testId": "ml-test-04",
    "question": "What is the difference between L1 and L2 regularization?",
    "options": [
      "L1 adds absolute value penalty; L2 adds squared penalty",
      "L2 adds absolute value penalty; L1 adds squared penalty",
      "Both add the same penalty",
      "Neither adds any penalty"
    ],
    "correctOption": 0,
    "explanation": "L1 regularization adds the absolute value of coefficients (Lasso), while L2 adds the squared value (Ridge)."
  },
  {
    "testId": "ml-test-04",
    "question": "What is hyperparameter tuning?",
    "options": [
      "The process of selecting the best parameters for a model",
      "The process of selecting the best hyperparameters for a model",
      "The process of training the model",
      "The process of evaluating the model"
    ],
    "correctOption": 1,
    "explanation": "Hyperparameter tuning involves searching for the optimal set of hyperparameters that improve model performance."
  },
  {
    "testId": "ml-test-04",
    "question": "Which method is commonly used for hyperparameter tuning?",
    "options": ["Grid Search", "K-Means", "PCA", "Apriori"],
    "correctOption": 0,
    "explanation": "Grid Search is a common method for hyperparameter tuning that exhaustively searches over a specified parameter grid."
  },
  {
    "testId": "ml-test-04",
    "question": "What is the purpose of a validation set?",
    "options": [
      "To train the model weights",
      "To evaluate the model during training and tune hyperparameters",
      "To test the final model performance",
      "To collect more data"
    ],
    "correctOption": 1,
    "explanation": "A validation set is used to evaluate model performance during training and to tune hyperparameters."
  },
  {
    "testId": "ml-test-04",
    "question": "What is stratified sampling in cross-validation?",
    "options": [
      "Sampling data randomly without replacement",
      "Sampling data to preserve the class distribution in each fold",
      "Sampling data from a single class only",
      "Sampling data with replacement"
    ],
    "correctOption": 1,
    "explanation": "Stratified sampling ensures that each fold of cross-validation has the same class distribution as the original dataset."
  },
  {
    "testId": "ml-test-04",
    "question": "Which metric is a balance of precision and recall?",
    "options": ["Accuracy", "F1-Score", "AUC-ROC", "Mean Absolute Error"],
    "correctOption": 1,
    "explanation": "The F1-Score balances precision and recall using the harmonic mean."
  },
  {
    "testId": "ml-test-04",
    "question": "What is the purpose of a learning curve?",
    "options": [
      "To visualize model performance as training data size increases",
      "To plot the loss function",
      "To show feature importance",
      "To display the confusion matrix"
    ],
    "correctOption": 0,
    "explanation": "A learning curve plots training and validation performance against the training dataset size, helping diagnose bias and variance issues."
  },
  {
    "testId": "ml-test-04",
    "question": "What does high bias indicate in a model?",
    "options": [
      "The model is underfitting",
      "The model is overfitting",
      "The model has high variance",
      "The model performs well on test data"
    ],
    "correctOption": 0,
    "explanation": "High bias typically indicates underfitting, where the model is too simple to capture the underlying patterns."
  },
  {
    "testId": "ml-test-04",
    "question": "What does high variance indicate in a model?",
    "options": [
      "The model is underfitting",
      "The model is overfitting",
      "The model has high bias",
      "The model performs poorly on training data"
    ],
    "correctOption": 1,
    "explanation": "High variance typically indicates overfitting, where the model captures noise in the training data."
  },
  {
    "testId": "ml-test-05",
    "question": "What is the basic unit of a neural network?",
    "options": ["Layer", "Neuron", "Weight", "Activation Function"],
    "correctOption": 1,
    "explanation": "The neuron (or perceptron) is the fundamental computational unit of a neural network.[reference:37]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is the purpose of weights in a neural network?",
    "options": [
      "To determine the strength of connections between neurons",
      "To activate the neurons",
      "To reduce the number of neurons",
      "To store the training data"
    ],
    "correctOption": 0,
    "explanation": "Weights represent the strength of connections between neurons and are learned during training.[reference:38]"
  },
  {
    "testId": "ml-test-05",
    "question": "Which activation function is commonly used in hidden layers of deep neural networks?",
    "options": ["Sigmoid", "Tanh", "ReLU", "Softmax"],
    "correctOption": 2,
    "explanation": "ReLU (Rectified Linear Unit) is the most commonly used activation function in hidden layers due to its simplicity and effectiveness.[reference:39]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is the purpose of an activation function in a neural network?",
    "options": [
      "To introduce non-linearity into the network",
      "To reduce the number of parameters",
      "To speed up training",
      "To store the network weights"
    ],
    "correctOption": 0,
    "explanation": "Activation functions introduce non-linearity, allowing neural networks to learn complex patterns.[reference:40]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is backpropagation in neural networks?",
    "options": [
      "The algorithm used to update weights by propagating errors backward through the network",
      "The process of propagating inputs forward through the network",
      "A method for initializing weights",
      "A technique for reducing the number of layers"
    ],
    "correctOption": 0,
    "explanation": "Backpropagation computes gradients of the loss function with respect to weights and propagates them backward to update weights."
  },
  {
    "testId": "ml-test-05",
    "question": "What is the vanishing gradient problem in deep learning?",
    "options": [
      "When gradients become very small, making it difficult to update early layers",
      "When gradients become very large, causing instability",
      "When gradients are perfectly balanced",
      "When gradients are constant throughout the network"
    ],
    "correctOption": 0,
    "explanation": "The vanishing gradient problem occurs when gradients become extremely small in deep networks, hindering learning in early layers.[reference:41]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is the purpose of dropout in deep learning?",
    "options": [
      "To randomly drop neurons during training to prevent overfitting",
      "To drop layers from the network",
      "To drop training data",
      "To drop the learning rate"
    ],
    "correctOption": 0,
    "explanation": "Dropout randomly drops neurons during training to prevent overfitting and improve generalization.[reference:42]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is a Convolutional Neural Network (CNN) primarily used for?",
    "options": [
      "Image and spatial data processing",
      "Time series forecasting",
      "Natural language processing",
      "Reinforcement learning"
    ],
    "correctOption": 0,
    "explanation": "CNNs are specifically designed for processing grid-like data, such as images, using convolutional layers.[reference:43]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is a Recurrent Neural Network (RNN) primarily used for?",
    "options": [
      "Sequential and time-series data",
      "Image classification",
      "Dimensionality reduction",
      "Clustering"
    ],
    "correctOption": 0,
    "explanation": "RNNs are designed for sequential data, where the order of inputs matters, such as time series and text.[reference:44]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is the purpose of a pooling layer in CNNs?",
    "options": [
      "To reduce the spatial dimensions of the feature maps",
      "To increase the number of features",
      "To introduce non-linearity",
      "To classify the image"
    ],
    "correctOption": 0,
    "explanation": "Pooling layers downsample feature maps, reducing spatial dimensions and computational load while retaining important information."
  },
  {
    "testId": "ml-test-05",
    "question": "What is the difference between a convolutional layer and a fully connected layer?",
    "options": [
      "Convolutional layers use local receptive fields and shared weights; fully connected layers connect all neurons",
      "Fully connected layers use local receptive fields; convolutional layers connect all neurons",
      "Both use local receptive fields",
      "Both connect all neurons"
    ],
    "correctOption": 0,
    "explanation": "Convolutional layers apply filters locally with shared weights, while fully connected layers connect every neuron in one layer to every neuron in the next."
  },
  {
    "testId": "ml-test-05",
    "question": "What is transfer learning in deep learning?",
    "options": [
      "Using a pre-trained model on a new, similar task",
      "Transferring data from one model to another",
      "Learning multiple tasks simultaneously",
      "Transferring weights from one layer to another"
    ],
    "correctOption": 0,
    "explanation": "Transfer learning involves leveraging a model pre-trained on a large dataset and fine-tuning it for a new, related task."
  },
  {
    "testId": "ml-test-05",
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
    "testId": "ml-test-05",
    "question": "Which optimizer is most commonly used in deep learning?",
    "options": ["SGD", "Adam", "RMSprop", "Adagrad"],
    "correctOption": 1,
    "explanation": "Adam is one of the most popular optimizers in deep learning due to its adaptive learning rate and efficient performance."
  },
  {
    "testId": "ml-test-05",
    "question": "What is the role of the loss function in neural network training?",
    "options": [
      "To measure the difference between predictions and true values",
      "To initialize the weights",
      "To activate the neurons",
      "To reduce the number of layers"
    ],
    "correctOption": 0,
    "explanation": "The loss function quantifies how well the neural network is performing by measuring the error between predictions and targets."
  },
  {
    "testId": "ml-test-05",
    "question": "What is the Universal Approximation Theorem?",
    "options": [
      "A theorem stating that a feedforward neural network with a single hidden layer can approximate any continuous function",
      "A theorem stating that neural networks cannot approximate complex functions",
      "A theorem about the vanishing gradient problem",
      "A theorem about the optimal number of layers"
    ],
    "correctOption": 0,
    "explanation": "The Universal Approximation Theorem states that a feedforward neural network with a single hidden layer can approximate any continuous function given enough neurons.[reference:45]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is the purpose of batch normalization in deep learning?",
    "options": [
      "To normalize the inputs to each layer, improving training stability and speed",
      "To normalize the output of the network",
      "To reduce the number of parameters",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Batch normalization normalizes the inputs to each layer, reducing internal covariate shift and improving training stability."
  },
  {
    "testId": "ml-test-05",
    "question": "Which architecture is commonly used for natural language processing tasks?",
    "options": ["CNN", "RNN/LSTM", "Autoencoder", "GAN"],
    "correctOption": 1,
    "explanation": "RNNs and LSTMs are commonly used for sequential data like text, making them popular for NLP tasks."
  },
  {
    "testId": "ml-test-05",
    "question": "What is a Generative Adversarial Network (GAN) used for?",
    "options": [
      "Generating new data samples",
      "Classifying images",
      "Clustering data",
      "Dimensionality reduction"
    ],
    "correctOption": 0,
    "explanation": "GANs consist of a generator and discriminator trained adversarially to generate realistic new data samples."
  },
  {
    "testId": "ml-test-05",
    "question": "What is the main difference between a neural network and a deep neural network?",
    "options": [
      "Deep neural networks have multiple hidden layers; shallow networks have few or none",
      "Deep neural networks are always larger",
      "Shallow networks have more layers",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Deep neural networks are characterized by having multiple hidden layers, enabling them to learn hierarchical representations.[reference:46]"
  },
  {
    "testId": "ml-test-05",
    "question": "What is the purpose of the learning rate in neural network training?",
    "options": [
      "To control the step size during weight updates",
      "To determine the number of layers",
      "To activate the neurons",
      "To initialize the weights"
    ],
    "correctOption": 0,
    "explanation": "The learning rate controls how much the weights are adjusted during each update step, balancing speed and stability of training."
  },
  {
    "testId": "ml-test-05",
    "question": "What is the role of the optimizer in neural network training?",
    "options": [
      "To update the network weights to minimize the loss function",
      "To initialize the network weights",
      "To activate the neurons",
      "To evaluate the model performance"
    ],
    "correctOption": 0,
    "explanation": "The optimizer uses gradients to update the network weights in the direction that minimizes the loss function."
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
console.log('Added ' + newQuestions.length + ' ml questions to questions.js');
