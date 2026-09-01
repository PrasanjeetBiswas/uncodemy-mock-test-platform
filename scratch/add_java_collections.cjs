const fs = require('fs');

const missingTests = [
  {
    "id": "collection-test-01",
    "seriesId": "collections",
    "courseId": "java",
    "title": "Collection Framework Fundamentals & Interfaces",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "collection-test-02",
    "seriesId": "collections",
    "courseId": "java",
    "title": "List & Set Implementations",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "collection-test-03",
    "seriesId": "collections",
    "courseId": "java",
    "title": "Map & Queue Implementations",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "collection-test-04",
    "seriesId": "collections",
    "courseId": "java",
    "title": "Utility Classes & Advanced Concepts",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const endBraceIndex = testsFile.lastIndexOf('];');

if (endBraceIndex !== -1 && !testsFile.includes('"collection-test-01"')) {
  const injectionString = ',\n' + missingTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Successfully injected java collections tests into tests.js array!');
} else {
  console.log('Tests already exist or tests.js is not an array ending in ];');
}

const questions = [
  {
    "testId": "collection-test-01",
    "question": "What is the root interface of the Java Collection Framework hierarchy?",
    "options": ["Iterable", "Collection", "List", "Set"],
    "correctOption": 0,
    "explanation": "Iterable is the root interface of the entire Collection Framework. It provides the iterator() method for traversing elements."
  },
  {
    "testId": "collection-test-01",
    "question": "Which interface is the parent of all collection interfaces except Map?",
    "options": ["Iterable", "Collection", "List", "Set"],
    "correctOption": 1,
    "explanation": "The Collection interface is the root interface for all collection types (List, Set, Queue) except Map, which is separate."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the primary difference between Collection and Collections in Java?",
    "options": [
      "Collection is an interface; Collections is a utility class",
      "Collection is a class; Collections is an interface",
      "Both are interfaces",
      "Both are utility classes"
    ],
    "correctOption": 0,
    "explanation": "Collection is the root interface of the collection hierarchy. Collections is a utility class with static methods for operating on collections."
  },
  {
    "testId": "collection-test-01",
    "question": "Which of the following is NOT a sub-interface of the Collection interface?",
    "options": ["List", "Set", "Map", "Queue"],
    "correctOption": 2,
    "explanation": "Map does not extend Collection. It is a separate interface in the Collection Framework. List, Set, and Queue extend Collection."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the purpose of the equals() and hashCode() methods in collections?",
    "options": [
      "To compare objects for equality and for hashing in hash-based collections",
      "To make objects cloneable",
      "To convert objects to strings",
      "To implement serialization"
    ],
    "correctOption": 0,
    "explanation": "equals() is used for content comparison. hashCode() is used in hash-based collections (HashMap, HashSet) for efficient storage and retrieval."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the default implementation of the List interface?",
    "options": ["ArrayList", "LinkedList", "Vector", "Stack"],
    "correctOption": 0,
    "explanation": "ArrayList is the most commonly used default implementation of the List interface."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the difference between a Collection and an Array in Java?",
    "options": [
      "Collection is dynamic and can grow; Array has fixed size",
      "Array is dynamic; Collection has fixed size",
      "Both are fixed size",
      "Both are dynamic"
    ],
    "correctOption": 0,
    "explanation": "Arrays have a fixed size once created. Collections can dynamically grow and shrink as elements are added or removed."
  },
  {
    "testId": "collection-test-01",
    "question": "Which interface allows duplicate elements?",
    "options": ["List", "Set", "Map", "Both List and Map"],
    "correctOption": 0,
    "explanation": "List allows duplicate elements. Set does not allow duplicates. Map allows duplicate values but not duplicate keys."
  },
  {
    "testId": "collection-test-01",
    "question": "Which interface maintains insertion order?",
    "options": ["Set", "List", "HashSet", "TreeSet"],
    "correctOption": 1,
    "explanation": "List maintains insertion order. HashSet does not guarantee order. TreeSet maintains sorted order."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the purpose of generics in the Collection Framework?",
    "options": [
      "To provide compile-time type safety",
      "To improve runtime performance",
      "To reduce memory usage",
      "To enable dynamic typing"
    ],
    "correctOption": 0,
    "explanation": "Generics provide compile-time type safety by ensuring that collections are homogeneous and preventing ClassCastException at runtime."
  },
  {
    "testId": "collection-test-01",
    "question": "What is a List in Java?",
    "options": [
      "An ordered collection that allows duplicate elements",
      "An unordered collection that does not allow duplicates",
      "A key-value pair collection",
      "A collection for processing elements"
    ],
    "correctOption": 0,
    "explanation": "List is an ordered collection (sequence) that allows duplicate elements and provides positional access."
  },
  {
    "testId": "collection-test-01",
    "question": "What is a Set in Java?",
    "options": [
      "A collection that does not allow duplicate elements",
      "An ordered collection that allows duplicates",
      "A key-value pair collection",
      "A collection with positional access"
    ],
    "correctOption": 0,
    "explanation": "Set is a collection that cannot contain duplicate elements. It models the mathematical set abstraction."
  },
  {
    "testId": "collection-test-01",
    "question": "What is a Map in Java?",
    "options": [
      "A collection that maps keys to values",
      "A collection that stores only keys",
      "A collection that stores only values",
      "A collection of elements with no order"
    ],
    "correctOption": 0,
    "explanation": "Map is an object that maps keys to values. It cannot contain duplicate keys; each key can map to at most one value."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the difference between HashSet and TreeSet?",
    "options": [
      "HashSet is unordered; TreeSet is sorted",
      "TreeSet is unordered; HashSet is sorted",
      "Both are sorted",
      "Both are unordered"
    ],
    "correctOption": 0,
    "explanation": "HashSet does not guarantee any order. TreeSet maintains elements in sorted order (natural or custom order)."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the purpose of the Iterator interface?",
    "options": [
      "To traverse elements in a collection",
      "To sort elements in a collection",
      "To add elements to a collection",
      "To remove elements from a collection"
    ],
    "correctOption": 0,
    "explanation": "Iterator is used to traverse elements in a collection, providing methods like hasNext(), next(), and remove()."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the difference between Iterator and ListIterator?",
    "options": [
      "ListIterator can traverse both directions; Iterator only forward",
      "Iterator can traverse both directions; ListIterator only forward",
      "Both can traverse both directions",
      "Both can only traverse forward"
    ],
    "correctOption": 0,
    "explanation": "ListIterator extends Iterator and allows bidirectional traversal, modification, and insertion. Iterator can only traverse forward."
  },
  {
    "testId": "collection-test-01",
    "question": "What is the default capacity of an ArrayList created with the no-argument constructor?",
    "options": ["10", "16", "8", "32"],
    "correctOption": 0,
    "explanation": "The default initial capacity of an ArrayList is 10. However, it's lazily initialized in Java 8+ and may not allocate memory until the first element is added."
  },
  {
    "testId": "collection-test-02",
    "question": "Which List implementation is best for frequent insertion and deletion operations?",
    "options": ["ArrayList", "LinkedList", "Vector", "Stack"],
    "correctOption": 1,
    "explanation": "LinkedList is best for frequent insertion/deletion as it uses a doubly linked list, making these operations O(1)."
  },
  {
    "testId": "collection-test-02",
    "question": "Which List implementation is best for frequent random access operations (get/set)?",
    "options": ["ArrayList", "LinkedList", "Vector", "Stack"],
    "correctOption": 0,
    "explanation": "ArrayList is best for random access as it implements RandomAccess and provides O(1) time complexity for get/set operations."
  },
  {
    "testId": "collection-test-02",
    "question": "What is the difference between ArrayList and Vector?",
    "options": [
      "Vector is synchronized; ArrayList is not synchronized",
      "ArrayList is synchronized; Vector is not",
      "Both are synchronized",
      "Both are not synchronized"
    ],
    "correctOption": 0,
    "explanation": "Vector is legacy and thread-safe (synchronized). ArrayList is not synchronized, making it faster for single-threaded environments."
  },
  {
    "testId": "collection-test-02",
    "question": "Which Set implementation maintains insertion order?",
    "options": ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
    "correctOption": 1,
    "explanation": "LinkedHashSet maintains insertion order while providing HashSet performance. TreeSet is sorted, and HashSet is unordered."
  },
  {
    "testId": "collection-test-02",
    "question": "What is the time complexity of adding an element to an ArrayList?",
    "options": ["O(1) amortized", "O(n) always", "O(log n)", "O(n^2)"],
    "correctOption": 0,
    "explanation": "Adding to an ArrayList is O(1) amortized for most cases. If the array needs to be resized, it becomes O(n)."
  },
  {
    "testId": "collection-test-02",
    "question": "What is the time complexity of adding an element to a LinkedList?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    "correctOption": 0,
    "explanation": "Adding an element to a LinkedList is O(1) as it only requires updating node references (assuming you have access to the position)."
  },
  {
    "testId": "collection-test-02",
    "question": "Which class is a legacy class that is synchronized and extends Vector?",
    "options": ["Stack", "ArrayList", "LinkedList", "HashSet"],
    "correctOption": 0,
    "explanation": "Stack extends Vector and is a legacy class that follows LIFO (Last In, First Out) principle. It is synchronized."
  },
  {
    "testId": "collection-test-02",
    "question": "What is the difference between HashSet and LinkedHashSet?",
    "options": [
      "LinkedHashSet maintains insertion order; HashSet does not",
      "HashSet maintains insertion order; LinkedHashSet does not",
      "Both maintain insertion order",
      "Both do not maintain insertion order"
    ],
    "correctOption": 0,
    "explanation": "LinkedHashSet maintains insertion order using a linked list. HashSet does not guarantee any specific order."
  },
  {
    "testId": "collection-test-02",
    "question": "Which Set implementation is sorted by default?",
    "options": ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
    "correctOption": 2,
    "explanation": "TreeSet implements NavigableSet and maintains elements in sorted order (natural or custom comparator)."
  },
  {
    "testId": "collection-test-02",
    "question": "What is the initial capacity of a HashSet created with no argument constructor?",
    "options": ["10", "16", "8", "32"],
    "correctOption": 1,
    "explanation": "The default initial capacity of a HashSet is 16 with a load factor of 0.75."
  },
  {
    "testId": "collection-test-02",
    "question": "What is the load factor of a HashSet?",
    "options": ["0.75", "0.5", "1.0", "0.25"],
    "correctOption": 0,
    "explanation": "The default load factor for HashSet (and HashMap) is 0.75, meaning the collection will be resized when it reaches 75% capacity."
  },
  {
    "testId": "collection-test-02",
    "question": "Which of the following is NOT a List implementation?",
    "options": ["ArrayList", "LinkedList", "Vector", "HashSet"],
    "correctOption": 3,
    "explanation": "HashSet is a Set implementation, not a List. ArrayList, LinkedList, and Vector are all List implementations."
  },
  {
    "testId": "collection-test-03",
    "question": "Which Map implementation maintains insertion order?",
    "options": ["HashMap", "LinkedHashMap", "TreeMap", "Hashtable"],
    "correctOption": 1,
    "explanation": "LinkedHashMap maintains insertion order using a linked list while providing HashMap performance."
  },
  {
    "testId": "collection-test-03",
    "question": "Which Map implementation maintains sorted order based on keys?",
    "options": ["HashMap", "LinkedHashMap", "TreeMap", "Hashtable"],
    "correctOption": 2,
    "explanation": "TreeMap implements NavigableMap and maintains keys in sorted order (natural or custom comparator)."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the difference between HashMap and Hashtable?",
    "options": [
      "HashMap is not synchronized; Hashtable is synchronized",
      "Hashtable allows null keys; HashMap does not",
      "HashMap is synchronized; Hashtable is not",
      "Both are synchronized"
    ],
    "correctOption": 0,
    "explanation": "HashMap is not synchronized and allows one null key. Hashtable is synchronized and does not allow null keys or values."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the difference between TreeMap and HashMap?",
    "options": [
      "TreeMap is sorted; HashMap is unsorted",
      "HashMap is sorted; TreeMap is unsorted",
      "Both are sorted",
      "Both are unsorted"
    ],
    "correctOption": 0,
    "explanation": "TreeMap maintains keys in sorted order (Red-Black tree). HashMap does not guarantee any order."
  },
  {
    "testId": "collection-test-03",
    "question": "What is a PriorityQueue in Java?",
    "options": [
      "A queue that orders elements based on priority (natural or comparator)",
      "A queue that follows FIFO order",
      "A queue that follows LIFO order",
      "A queue that is synchronized"
    ],
    "correctOption": 0,
    "explanation": "PriorityQueue orders elements according to their natural order or a provided comparator, not FIFO."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the difference between Queue and Deque?",
    "options": [
      "Queue is FIFO; Deque supports both ends",
      "Deque is FIFO; Queue supports both ends",
      "Both are FIFO",
      "Both support both ends"
    ],
    "correctOption": 0,
    "explanation": "Queue follows FIFO (First In, First Out). Deque (Double-Ended Queue) supports operations at both ends."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the difference between poll() and remove() in Queue?",
    "options": [
      "poll() returns null if queue is empty; remove() throws NoSuchElementException",
      "remove() returns null if empty; poll() throws exception",
      "Both return null if empty",
      "Both throw exception if empty"
    ],
    "correctOption": 0,
    "explanation": "poll() returns null for an empty queue; remove() throws NoSuchElementException."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the difference between offer() and add() in Queue?",
    "options": [
      "offer() returns false if capacity exceeded; add() throws IllegalStateException",
      "add() returns false if capacity exceeded; offer() throws exception",
      "Both return false if capacity exceeded",
      "Both throw exception if capacity exceeded"
    ],
    "correctOption": 0,
    "explanation": "offer() returns false if the queue is full (bounded queues). add() throws IllegalStateException."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the initial capacity of a HashMap created with the no-argument constructor?",
    "options": ["10", "16", "8", "32"],
    "correctOption": 1,
    "explanation": "The default initial capacity of a HashMap is 16 with a load factor of 0.75."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the difference between keySet() and entrySet() in Map?",
    "options": [
      "keySet() returns Set of keys; entrySet() returns Set of Map.Entry",
      "entrySet() returns keys; keySet() returns entries",
      "Both return keys",
      "Both return entries"
    ],
    "correctOption": 0,
    "explanation": "keySet() provides a view of all keys. entrySet() provides a view of key-value pairs (Map.Entry objects)."
  },
  {
    "testId": "collection-test-03",
    "question": "Which Map implementation allows one null key and multiple null values?",
    "options": ["HashMap", "Hashtable", "TreeMap", "ConcurrentHashMap"],
    "correctOption": 0,
    "explanation": "HashMap allows one null key and multiple null values. Hashtable and TreeMap do not allow null keys."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the time complexity of get() operation in HashMap?",
    "options": ["O(1) average", "O(n) average", "O(log n)", "O(n^2)"],
    "correctOption": 0,
    "explanation": "HashMap get() is O(1) average (constant time) assuming a good hash function, though worst-case can be O(n) due to collisions."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the time complexity of put() operation in TreeMap?",
    "options": ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
    "correctOption": 0,
    "explanation": "TreeMap put() is O(log n) as it uses a Red-Black tree for storing entries."
  },
  {
    "testId": "collection-test-03",
    "question": "What is a NavigableMap in Java?",
    "options": [
      "A SortedMap with navigation methods like lowerKey(), higherKey(), floorKey(), ceilingKey()",
      "A map that can be navigated with an iterator",
      "A map that is sorted",
      "A map that is synchronized"
    ],
    "correctOption": 0,
    "explanation": "NavigableMap extends SortedMap and provides methods for navigation like lowerKey(), higherKey(), floorKey(), and ceilingKey()."
  },
  {
    "testId": "collection-test-03",
    "question": "What is the difference between HashMap and ConcurrentHashMap?",
    "options": [
      "ConcurrentHashMap is thread-safe for concurrent access; HashMap is not",
      "HashMap is thread-safe; ConcurrentHashMap is not",
      "Both are thread-safe",
      "Both are not thread-safe"
    ],
    "correctOption": 0,
    "explanation": "ConcurrentHashMap is designed for high concurrency with fine-grained locking. HashMap is not thread-safe."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the Collections class in Java?",
    "options": [
      "A utility class with static methods for manipulating collections",
      "The root interface of the Collection Framework",
      "A class that implements all collection interfaces",
      "A deprecated class"
    ],
    "correctOption": 0,
    "explanation": "Collections is a utility class providing static methods for sorting, searching, and performing operations on collections."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.sort()?",
    "options": [
      "To sort a List in ascending order",
      "To sort an array",
      "To sort a Set",
      "To sort a Map"
    ],
    "correctOption": 0,
    "explanation": "Collections.sort() sorts a List in ascending order using natural order or a custom comparator."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the difference between Collections.sort() and List.sort()?",
    "options": [
      "List.sort() is a default method; Collections.sort() is a static method",
      "Collections.sort() is a default method; List.sort() is static",
      "Both are static methods",
      "Both are default methods"
    ],
    "correctOption": 0,
    "explanation": "List.sort() is a default method introduced in Java 8 on the List interface. Collections.sort() is a static utility method."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.binarySearch()?",
    "options": [
      "To search for an element in a sorted List",
      "To search for an element in a Set",
      "To search for an element in a Map",
      "To search for an element in an array"
    ],
    "correctOption": 0,
    "explanation": "binarySearch() searches for an element in a sorted List using the binary search algorithm. The List must be sorted first."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.reverse()?",
    "options": [
      "To reverse the order of elements in a List",
      "To reverse the order of elements in a Set",
      "To reverse the order of elements in a Map",
      "To reverse the order of elements in an array"
    ],
    "correctOption": 0,
    "explanation": "Collections.reverse() reverses the order of elements in a List."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.shuffle()?",
    "options": [
      "To randomly permute the elements in a List",
      "To sort the elements in a List",
      "To reverse the elements in a List",
      "To copy the elements in a List"
    ],
    "correctOption": 0,
    "explanation": "Collections.shuffle() randomly permutes the elements in a List using a default random source or a provided Random object."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.unmodifiableList()?",
    "options": [
      "To create a read-only view of a List",
      "To create a synchronized version of a List",
      "To create a sorted version of a List",
      "To create a copy of a List"
    ],
    "correctOption": 0,
    "explanation": "Collections.unmodifiableList() returns a view of the List that cannot be modified (read-only)."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the difference between Collections.synchronizedList() and CopyOnWriteArrayList?",
    "options": [
      "synchronizedList uses locking; CopyOnWriteArrayList creates copies on modification",
      "CopyOnWriteArrayList uses locking; synchronizedList creates copies",
      "Both use locking",
      "Both create copies on modification"
    ],
    "correctOption": 0,
    "explanation": "synchronizedList uses mutual exclusion for thread safety. CopyOnWriteArrayList creates a new copy of the array on each modification, suitable for read-heavy scenarios."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.copy()?",
    "options": [
      "To copy elements from one List to another",
      "To copy elements from a Set to a List",
      "To copy elements from a Map to a List",
      "To clone a collection"
    ],
    "correctOption": 0,
    "explanation": "Collections.copy() copies elements from one List to another. The destination List must be large enough to hold all elements."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the difference between fail-fast and fail-safe iterators?",
    "options": [
      "Fail-fast throws ConcurrentModificationException; fail-safe does not",
      "Fail-safe throws ConcurrentModificationException; fail-fast does not",
      "Both throw ConcurrentModificationException",
      "Neither throws ConcurrentModificationException"
    ],
    "correctOption": 0,
    "explanation": "Fail-fast iterators (e.g., ArrayList iterator) throw ConcurrentModificationException if the collection is modified during iteration. Fail-safe iterators (e.g., CopyOnWriteArrayList) do not."
  },
  {
    "testId": "collection-test-04",
    "question": "What is an example of a fail-safe collection?",
    "options": ["CopyOnWriteArrayList", "ArrayList", "LinkedList", "HashSet"],
    "correctOption": 0,
    "explanation": "CopyOnWriteArrayList is a fail-safe collection that creates a copy of the underlying array on modification, allowing safe iteration."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of the Arrays class?",
    "options": [
      "A utility class with static methods for operating on arrays",
      "A class that implements array interfaces",
      "A deprecated class",
      "A class for creating dynamic arrays"
    ],
    "correctOption": 0,
    "explanation": "Arrays is a utility class providing methods like sort(), binarySearch(), copyOf(), asList(), and toString() for arrays."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Arrays.asList()?",
    "options": [
      "To convert an array to a fixed-size List view",
      "To convert a List to an array",
      "To convert an array to a Set",
      "To sort an array"
    ],
    "correctOption": 0,
    "explanation": "Arrays.asList() returns a fixed-size List backed by the original array. It provides a view, not a copy."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of the ListIterator interface?",
    "options": [
      "To traverse a List in both directions and modify elements",
      "To traverse any Collection",
      "To traverse a Set",
      "To traverse a Map"
    ],
    "correctOption": 0,
    "explanation": "ListIterator extends Iterator and allows bidirectional traversal, modification, and insertion in a List."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.singletonList()?",
    "options": [
      "To create an immutable List containing a single element",
      "To create a List with one element",
      "To convert a single element to a List",
      "To create a List with a null element"
    ],
    "correctOption": 0,
    "explanation": "singletonList() creates an immutable List containing exactly one element. It is memory-efficient for single-element lists."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.checkedList()?",
    "options": [
      "To create a type-safe view of a List",
      "To check if a List is sorted",
      "To check if a List contains a specific element",
      "To check if a List is empty"
    ],
    "correctOption": 0,
    "explanation": "checkedList() returns a List that performs runtime type checking to ensure that all elements are of the specified type."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.emptyList()?",
    "options": [
      "To return an immutable empty List",
      "To create a new empty List",
      "To clear a List",
      "To check if a List is empty"
    ],
    "correctOption": 0,
    "explanation": "emptyList() returns an immutable, type-safe empty List. It is useful for returning empty lists without creating new objects."
  },
  {
    "testId": "collection-test-04",
    "question": "Which comparator method is used to create a Comparator that reverses the natural order?",
    "options": ["Comparator.reverseOrder()", "Comparator.naturalOrder().reversed()", "Both A and B", "Collections.reverseOrder()"],
    "correctOption": 3,
    "explanation": "Collections.reverseOrder() is the classic way. In Java 8+, Comparator.reverseOrder() is also available. Both work."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.max()?",
    "options": [
      "To return the maximum element in a Collection based on natural order",
      "To return the maximum element in an array",
      "To sort the Collection",
      "To count the elements in a Collection"
    ],
    "correctOption": 0,
    "explanation": "Collections.max() returns the maximum element in a Collection according to natural order or a provided comparator."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.min()?",
    "options": [
      "To return the minimum element in a Collection",
      "To return the minimum element in an array",
      "To sort the Collection",
      "To count the elements in a Collection"
    ],
    "correctOption": 0,
    "explanation": "Collections.min() returns the minimum element in a Collection according to natural order or a provided comparator."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.addAll()?",
    "options": [
      "To add all specified elements to a Collection",
      "To add all elements from one Collection to another",
      "To create a Collection from an array",
      "To remove all elements from a Collection"
    ],
    "correctOption": 0,
    "explanation": "Collections.addAll() adds all specified elements (varargs) to a Collection. It is a convenient way to populate a Collection."
  },
  {
    "testId": "collection-test-04",
    "question": "What is the purpose of Collections.nCopies()?",
    "options": [
      "To create an immutable List with a specified number of copies of an element",
      "To create a List with copies of elements",
      "To copy elements from one List to another",
      "To count the number of elements in a Collection"
    ],
    "correctOption": 0,
    "explanation": "nCopies() returns an immutable List consisting of a specified number of copies of a given object."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const endBraceIndexQ = questionsFile.lastIndexOf('];');

if (endBraceIndexQ !== -1 && !questionsFile.includes('"collection-test-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndexQ) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Successfully injected java collections questions into questions.js array!');
} else {
  console.log('Questions already exist or questions.js is not an array ending in ];');
}
