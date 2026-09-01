const fs = require('fs');

const newTests = [
  {
    "id": "mongodb-test-01",
    "courseId": "mern",
    "seriesId": "mongodb",
    "title": "MongoDB Fundamentals & CRUD Operations",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "mongodb-test-02",
    "courseId": "mern",
    "seriesId": "mongodb",
    "title": "MongoDB Aggregation, Indexing & Advanced",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const testsEndIndex = testsFile.lastIndexOf('];');

if (testsEndIndex !== -1 && !testsFile.includes('"mongodb-test-01"')) {
  const injectionString = ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, testsEndIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Injected MongoDB tests into tests.js');
}

const rawQuestions = [
  {
    "testId": "mongodb-test-01",
    "question": "What is MongoDB?",
    "options": [
      "A NoSQL document-oriented database",
      "A relational database management system",
      "A graph database",
      "A key-value store"
    ],
    "correctOption": 0,
    "explanation": "MongoDB is a NoSQL document-oriented database that stores data in flexible, JSON-like documents."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What is a collection in MongoDB?",
    "options": [
      "A group of documents, analogous to a table in SQL",
      "A single document",
      "A database",
      "An index"
    ],
    "correctOption": 0,
    "explanation": "A collection in MongoDB is a grouping of MongoDB documents, similar to a table in a relational database."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What is a document in MongoDB?",
    "options": [
      "A record in a collection, stored as a BSON object",
      "A table in a database",
      "A field in a record",
      "An index key"
    ],
    "correctOption": 0,
    "explanation": "A document is a record in a MongoDB collection, represented as a BSON (Binary JSON) object containing key-value pairs."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What does BSON stand for?",
    "options": [
      "Binary JSON",
      "Binary Serialized Object Notation",
      "Basic Structured Object Notation",
      "Byte Sequence Object Notation"
    ],
    "correctOption": 0,
    "explanation": "BSON stands for Binary JSON, which is a binary-encoded serialization of JSON-like documents used by MongoDB for efficient storage and traversal."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which command is used to insert a single document in MongoDB?",
    "options": ["insertOne()", "insert()", "add()", "save()"],
    "correctOption": 0,
    "explanation": "The `insertOne()` method is used to insert a single document into a collection in MongoDB."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which command is used to insert multiple documents in MongoDB?",
    "options": ["insertMany()", "insert()", "addMany()", "saveMany()"],
    "correctOption": 0,
    "explanation": "The `insertMany()` method is used to insert multiple documents into a collection in MongoDB."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you query for all documents in a collection in MongoDB?",
    "options": ["db.collection.find()", "db.collection.find({})", "Both A and B", "db.collection.getAll()"],
    "correctOption": 2,
    "explanation": "Both `find()` and `find({})` return all documents in a collection."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which method is used to find a single document in MongoDB?",
    "options": ["findOne()", "find()", "getOne()", "first()"],
    "correctOption": 0,
    "explanation": "The `findOne()` method is used to retrieve a single document that matches the query criteria."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which operator is used for equality in MongoDB queries?",
    "options": ["$eq", "$eq", "=", "=="],
    "correctOption": 0,
    "explanation": "The `$eq` operator is used for equality in MongoDB queries, matching documents where the field value equals the specified value."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which operator is used to check if a value is greater than a specified value?",
    "options": ["$gt", "$gte", "$lt", "$lte"],
    "correctOption": 0,
    "explanation": "`$gt` (greater than) is used to match documents where the field value is greater than the specified value."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which operator is used to check if a value is in an array of values?",
    "options": ["$in", "$nin", "$eq", "$ne"],
    "correctOption": 0,
    "explanation": "The `$in` operator matches documents where the field value equals any value in the specified array."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you update a single document in MongoDB?",
    "options": ["updateOne()", "update()", "updateMany()", "modify()"],
    "correctOption": 0,
    "explanation": "The `updateOne()` method updates a single document that matches the filter criteria."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you update multiple documents in MongoDB?",
    "options": ["updateMany()", "update()", "updateAll()", "modifyMany()"],
    "correctOption": 0,
    "explanation": "The `updateMany()` method updates all documents that match the filter criteria."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you delete a single document in MongoDB?",
    "options": ["deleteOne()", "delete()", "removeOne()", "remove()"],
    "correctOption": 0,
    "explanation": "The `deleteOne()` method deletes a single document that matches the filter criteria."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you delete multiple documents in MongoDB?",
    "options": ["deleteMany()", "delete()", "removeMany()", "remove()"],
    "correctOption": 0,
    "explanation": "The `deleteMany()` method deletes all documents that match the filter criteria."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What is the purpose of the `_id` field in MongoDB documents?",
    "options": [
      "It uniquely identifies a document in a collection",
      "It stores the document's creation date",
      "It stores the document's size",
      "It is optional and can be omitted"
    ],
    "correctOption": 0,
    "explanation": "The `_id` field is a unique identifier for each document in a collection. If not provided, MongoDB automatically generates an ObjectId."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What is an ObjectId in MongoDB?",
    "options": [
      "A 12-byte unique identifier automatically generated for the `_id` field",
      "A 24-byte identifier",
      "A string identifier",
      "A numeric identifier"
    ],
    "correctOption": 0,
    "explanation": "ObjectId is a 12-byte BSON type that is the default value for the `_id` field, consisting of a timestamp, machine identifier, process ID, and incrementing counter."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you sort documents in MongoDB?",
    "options": [
      "Using the sort() method with 1 for ascending and -1 for descending",
      "Using orderBy()",
      "Using sort() with ASC and DESC",
      "Using arrange()"
    ],
    "correctOption": 0,
    "explanation": "The `sort()` method is used to sort documents, where 1 represents ascending order and -1 represents descending order."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you limit the number of documents returned in MongoDB?",
    "options": ["limit()", "top()", "first()", "max()"],
    "correctOption": 0,
    "explanation": "The `limit()` method restricts the number of documents returned by a query."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you skip documents in the result set in MongoDB?",
    "options": ["skip()", "offset()", "ignore()", "jump()"],
    "correctOption": 0,
    "explanation": "The `skip()` method skips a specified number of documents in the result set, often used with `limit()` for pagination."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which operator is used for logical AND in MongoDB queries?",
    "options": ["$and", "AND", "&&", "$or"],
    "correctOption": 0,
    "explanation": "The `$and` operator performs a logical AND operation on an array of conditions."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which operator is used for logical OR in MongoDB queries?",
    "options": ["$or", "OR", "||", "$and"],
    "correctOption": 0,
    "explanation": "The `$or` operator performs a logical OR operation on an array of conditions."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What is projection in MongoDB?",
    "options": [
      "Specifying which fields to include or exclude in the result",
      "Specifying the query filter",
      "Specifying the sort order",
      "Specifying the collection name"
    ],
    "correctOption": 0,
    "explanation": "Projection allows you to specify which fields to include (1) or exclude (0) in the result set."
  },
  {
    "testId": "mongodb-test-01",
    "question": "Which of the following is a valid update operator in MongoDB?",
    "options": ["$set", "$push", "$inc", "All of the above"],
    "correctOption": 3,
    "explanation": "`$set` (sets field value), `$push` (adds to array), and `$inc` (increments numeric value) are all valid update operators."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What does the `$set` operator do in MongoDB?",
    "options": [
      "Sets the value of a field",
      "Deletes a field",
      "Adds an element to an array",
      "Increments a numeric value"
    ],
    "correctOption": 0,
    "explanation": "The `$set` operator sets the value of a field in a document. If the field doesn't exist, it will be created."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What does the `$inc` operator do in MongoDB?",
    "options": [
      "Increments a numeric value by a specified amount",
      "Decrements a numeric value",
      "Sets a value",
      "Adds to an array"
    ],
    "correctOption": 0,
    "explanation": "The `$inc` operator increments a numeric field by a specified amount. It is commonly used for counters."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What is the purpose of `countDocuments()` in MongoDB?",
    "options": [
      "To count the number of documents in a collection",
      "To count the number of collections",
      "To count the number of fields",
      "To count the number of indexes"
    ],
    "correctOption": 0,
    "explanation": "`countDocuments()` returns the number of documents in a collection that match the query criteria."
  },
  {
    "testId": "mongodb-test-01",
    "question": "How do you check if a field exists in MongoDB?",
    "options": ["$exists", "$type", "$eq", "$in"],
    "correctOption": 0,
    "explanation": "The `$exists` operator matches documents where the specified field exists or does not exist."
  },
  {
    "testId": "mongodb-test-01",
    "question": "What is the difference between `insertOne()` and `save()` in MongoDB?",
    "options": [
      "save() can update an existing document if _id is provided; insertOne() cannot",
      "insertOne() can update; save() cannot",
      "Both are the same",
      "save() is deprecated"
    ],
    "correctOption": 0,
    "explanation": "`save()` will update an existing document if the `_id` is provided and matches; `insertOne()` will throw an error if `_id` already exists."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is the aggregation pipeline in MongoDB?",
    "options": [
      "A framework for data aggregation and transformation through multiple stages",
      "A query language",
      "An indexing mechanism",
      "A replication method"
    ],
    "correctOption": 0,
    "explanation": "The aggregation pipeline is a framework for data aggregation where documents pass through multiple stages like `$match`, `$group`, `$project`, etc."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which stage is used to filter documents in the aggregation pipeline?",
    "options": ["$match", "$filter", "$where", "$find"],
    "correctOption": 0,
    "explanation": "The `$match` stage filters documents, similar to the `find()` method, and is typically the first stage for reducing the number of documents."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which stage is used to group documents in the aggregation pipeline?",
    "options": ["$group", "$sort", "$project", "$match"],
    "correctOption": 0,
    "explanation": "The `$group` stage groups documents by a specified key and performs aggregations like `$sum`, `$avg`, `$min`, `$max`, etc."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which stage is used to specify which fields to include or exclude in the aggregation pipeline?",
    "options": ["$project", "$group", "$match", "$sort"],
    "correctOption": 0,
    "explanation": "The `$project` stage allows you to include, exclude, or add new fields to the documents passing through the pipeline."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which stage is used to sort documents in the aggregation pipeline?",
    "options": ["$sort", "$order", "$arrange", "$group"],
    "correctOption": 0,
    "explanation": "The `$sort` stage sorts documents by specified fields, with 1 for ascending and -1 for descending."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which stage is used for left outer join between collections in the aggregation pipeline?",
    "options": ["$lookup", "$join", "$merge", "$union"],
    "correctOption": 0,
    "explanation": "The `$lookup` stage performs a left outer join with another collection, similar to SQL's JOIN."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which stage is used to unwind an array field in the aggregation pipeline?",
    "options": ["$unwind", "$unfold", "$split", "$explode"],
    "correctOption": 0,
    "explanation": "The `$unwind` stage deconstructs an array field, creating a separate document for each element in the array."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is the purpose of indexes in MongoDB?",
    "options": [
      "To improve query performance",
      "To enforce uniqueness",
      "To reduce storage space",
      "Both A and B"
    ],
    "correctOption": 3,
    "explanation": "Indexes improve query performance and can enforce uniqueness (unique index)."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which command is used to create an index in MongoDB?",
    "options": ["createIndex()", "addIndex()", "newIndex()", "createIndex()"],
    "correctOption": 0,
    "explanation": "The `createIndex()` method is used to create an index on a collection."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is a compound index in MongoDB?",
    "options": [
      "An index on multiple fields",
      "An index on a single field",
      "An index on nested fields",
      "An index on arrays"
    ],
    "correctOption": 0,
    "explanation": "A compound index is an index that includes multiple fields, supporting queries that filter or sort on those fields."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is the default index created on every collection?",
    "options": ["Index on _id", "Index on name", "No default index", "Index on createdDate"],
    "correctOption": 0,
    "explanation": "Every MongoDB collection has a default index on the `_id` field to ensure uniqueness and fast document retrieval."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which operator is used to perform a text search in MongoDB?",
    "options": ["$text", "$search", "$match", "$contains"],
    "correctOption": 0,
    "explanation": "The `$text` operator performs a text search on fields that have a text index."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is a replica set in MongoDB?",
    "options": [
      "A group of MongoDB servers that replicate data for high availability",
      "A backup system",
      "A clustering system for sharding",
      "A single MongoDB server"
    ],
    "correctOption": 0,
    "explanation": "A replica set is a group of MongoDB nodes that maintain the same data set, providing redundancy and high availability."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is sharding in MongoDB?",
    "options": [
      "Distributing data across multiple servers for horizontal scaling",
      "Replicating data for high availability",
      "Indexing data for faster queries",
      "Compressing data"
    ],
    "correctOption": 0,
    "explanation": "Sharding is a method of distributing data across multiple servers to handle large datasets and high throughput."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is a shard key in MongoDB?",
    "options": [
      "A key used to distribute data across shards",
      "A primary key",
      "A foreign key",
      "An index key"
    ],
    "correctOption": 0,
    "explanation": "A shard key is a field or combination of fields used to partition data across shards."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Does MongoDB support ACID transactions?",
    "options": [
      "Yes, since version 4.0 for multi-document transactions",
      "No, MongoDB does not support transactions",
      "Only for single-document operations",
      "Only in MongoDB Atlas"
    ],
    "correctOption": 0,
    "explanation": "MongoDB has supported multi-document ACID transactions since version 4.0, allowing operations across multiple documents and collections."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is schema validation in MongoDB?",
    "options": [
      "A mechanism to enforce document structure and data types",
      "A way to validate queries",
      "A tool for schema design",
      "A method for data migration"
    ],
    "correctOption": 0,
    "explanation": "Schema validation allows you to enforce rules on document structure, field types, and values using JSON Schema."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is the difference between `$push` and `$addToSet` in MongoDB?",
    "options": [
      "$push adds an element to an array; $addToSet adds only if not already present",
      "$addToSet adds an element; $push adds only if not present",
      "Both are the same",
      "$push works on objects; $addToSet works on arrays"
    ],
    "correctOption": 0,
    "explanation": "`$push` appends an element to an array (allowing duplicates). `$addToSet` adds an element only if it is not already present (ensuring uniqueness)."
  },
  {
    "testId": "mongodb-test-02",
    "question": "Which stage is used to create new documents from the aggregation pipeline?",
    "options": ["$out", "$merge", "Both A and B", "$create"],
    "correctOption": 2,
    "explanation": "`$out` writes the results of the pipeline to a new collection, while `$merge` merges the results into an existing collection."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is a covered query in MongoDB?",
    "options": [
      "A query that can be answered entirely from an index without reading documents",
      "A query that covers all fields",
      "A query that is covered by a replica set",
      "A query that is encrypted"
    ],
    "correctOption": 0,
    "explanation": "A covered query is a query where all the fields needed are included in an index, so MongoDB can answer the query without reading the actual documents."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is the purpose of the `explain()` method in MongoDB?",
    "options": [
      "To provide information about how a query is executed",
      "To explain the database schema",
      "To explain the collection structure",
      "To explain the indexing strategy"
    ],
    "correctOption": 0,
    "explanation": "The `explain()` method returns information about the query execution plan, helping to analyze and optimize query performance."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is the recommended approach for updating a large number of documents in MongoDB?",
    "options": [
      "Use `updateMany()` with proper filters",
      "Use `updateOne()` in a loop",
      "Use `bulkWrite()` for large operations",
      "Both A and C are valid"
    ],
    "correctOption": 3,
    "explanation": "For large updates, `updateMany()` can be efficient. For extremely large operations, `bulkWrite()` provides more control and better performance."
  },
  {
    "testId": "mongodb-test-02",
    "question": "What is the purpose of the `$regex` operator in MongoDB?",
    "options": [
      "To perform regular expression pattern matching on strings",
      "To match numbers",
      "To match arrays",
      "To match dates"
    ],
    "correctOption": 0,
    "explanation": "The `$regex` operator allows you to use regular expressions for pattern matching in string fields."
  }
];

const questions = rawQuestions.map((q, index) => {
  return {
    ...q,
    id: `${q.testId}-q${index + 1}`
  };
});

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const questionsEndIndex = questionsFile.lastIndexOf('];');

if (questionsEndIndex !== -1 && !questionsFile.includes('"mongodb-test-01-q1"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, questionsEndIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Injected MongoDB questions into questions.js');
}

// Ensure subjects.js for MongoDB reflects 4 tests (2 reused + 2 new).
let subjectsFile = fs.readFileSync('src/data/subjects.js', 'utf8');
subjectsFile = subjectsFile.replace('{ id: "mongodb", courseId: "mern", title: "MongoDB", testsCount: 2', '{ id: "mongodb", courseId: "mern", title: "MongoDB", testsCount: 4');
fs.writeFileSync('src/data/subjects.js', subjectsFile);
console.log("Updated subjects.js for MongoDB");

