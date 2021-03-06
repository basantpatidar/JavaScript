let address = {
  street: 222,
  city: "New York",
  zipcode: 123213
};

function showAddress(address) {
  for (let i in address) {
    console.log(i + " " + address[i]);
  }
}
showAddress(address);

// Factory Function
function myAddress() {
  return {
    street: 222,
    city: "New York",
    zipcode: 123213
  };
}
let factoryFunction = myAddress();
console.log(factoryFunction);

function ShowMyAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}
let myNewAddress1 = new ShowMyAddress(123, "a", 123400);
let myNewAddress2 = new ShowMyAddress(123, "a", 123410);

function objectChecker(myNewAddress1, myNewAddress2) {
  let c = 0;
  let l = Object.keys(myNewAddress1).length;
  for (let key in myNewAddress1) {
    if (myNewAddress1[key] === myNewAddress2[key]) {
      c++;
      if (c === l) {
        console.log("Same");
        return true;
      } else {
        console.log("Both are different");
        return false;
      }
    }
  }
}

objectChecker(myNewAddress1, myNewAddress2);

function blogPost(
  blogTitle,
  body,
  author,
  views,
  commentAuthor,
  commentBlog,
  isLive
) {
  const blog = {
    title: blogTitle,
    body: body,
    author: author,
    views: views,
    comments: {
      commentAuthor: commentAuthor,
      commentBlog: commentBlog
    },
    isLive: isLive
  };
  return blog;
}

console.log(
  blogPost(
    "myBlog",
    "This is body",
    "Jone",
    "15",
    "Comment author name",
    "This is comment blog",
    true
  )
);

function blogPostArray(
  blogTitle,
  body,
  author,
  views,
  commentAuthor,
  commentBody,
  isLive
) {
  const blog = {
    title: blogTitle,
    body: body,
    author: author,
    views: views,
    comments: [
      { commentAuthor: commentAuthor, commentBody: commentBody },
      {
        commentAuthor: "b",
        commentBody: "c"
      }
    ],
    isLive: isLive
  };
  return blog;
}

console.log(
  blogPostArray(
    "myBlog",
    "This is body",
    "Jone",
    "15",
    "Comment author name",
    "This is comment blog",
    true
  )
);

// creating a blog post fucntion
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  views = 0;
  this.comments = [];
  this.isLive = false;
  // let today = new Date();
  this.day = new Date().getDay();
}

let post1 = new Post("a", "b", "c");
console.log(post1);

//use of delete
function useOfDelete() {
  let student = {
    name: "John",
    sclass: "x",
    rollno: "v"
  };
  delete student.rollno;
  return student;
}

let result = useOfDelete();
console.log(result);

// Length of object
function findLength() {
  let student = {
    name: "John",
    sclass: "x",
    rollno: "v"
  };
  lengthOfStudent = Object.keys(student).length;
  console.log(lengthOfStudent);
}
findLength();

//Array

function arrayMethods() {
  //use of arrow function
  const numbers = [1, 2, 3];
  numbers.forEach(number => console.log(number));

  //same code without arrow function
  numbers.forEach(function(number) {
    console.log(number);
  });

  // for each method of array with 2 parameteres
  numbers.forEach((number, index) =>
    console.log(index + " <= Index || Element => " + number)
  );

  // use of Joined method
  const joined = numbers.join("A"); //1A2A3  // returns a string with all the elements of array joined
  console.log(joined);

  const message = "This is John";
  const parts = message.split(" "); // returns a array with all the letters in a string splited in array
  console.log(parts);

  const combined = parts.join("-");
  console.log(combined); //return a string will all the elements in array combined
}
arrayMethods();

function arraySorting() {
  console.log("-----------------Array sorting----------------");
  const numbers = [2, 3, 1];
  // Use of sort method
  numbers.sort();
  console.log(numbers);

  //use of reverse sorting
  numbers.reverse();
  console.log(numbers);

  //Sorting on object
  const courses = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "javascript" },
    { id: 3, name: "Python" },
    { id: 4, name: "zavascript" },
    { id: 5, name: "Aython" }
  ]; // sorting works with any number of keys in an object

  courses.sort(function(a, b) {
    const nameA = a.name.toLowerCase(); // removing case sensitivity.
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  console.log(courses);
}
arraySorting();

// every() and some() are the methods used for serching in Js
// where every() needs evert index to be true while in
//some() even if single index is true it returns true

//

function arrayExercise() {
  let numbers = arrayFromRange(1, 5);
  console.log(numbers);

  function arrayFromRange(min, max) {
    let num = [];
    for (let i = min; i <= max; i++) num.push(i);
    return num;
  }

  const find = includes(numbers, 6);
  console.log(find);

  function includes(inputArray, searchElement) {
    for (let value of inputArray) if (value === searchElement) return true;
    return false;
  }

  const newArray = except(numbers, [1, 2]);
  console.log(newArray);

  function except(array, excluded) {
    for (let i = 0; i < array.length; i++)
      for (let values of excluded) if (array[i] == values) array.splice(i, 1); // i
    return array;
  }

  const newOutput = exceptIncludes(numbers, [1, 2]);
  console.log(newOutput);

  function exceptIncludes(array, excluded) {
    const output = [];
    for (let element of array)
      if (!excluded.includes(element)) output.push(element);
    return output;
  }

  numbers = [1, 2, 3, 4, 5];
  let output = move(numbers, 1, 3);
  console.log(output);

  function move(array, number, offset) {
    let index = array.indexOf(number);
    array.splice(index, 1);
    array.splice(index + offset, 0, number);
    return array;
  }

  numbers.push(5);
  output = countOccurrences(numbers, 5);
  console.log(output);

  function countOccurrences(array, searchElement) {
    let output = 0;
    for (let value of array) if (value == searchElement) output += 1;
    return output;
  }

  // counting the number of occurence using reduce

  output = countUsingReduce(numbers, 5);
  console.log(output);

  function countUsingReduce(array, searchElement) {
    return array.reduce((accomulator, current) => {
      const occurence = current === searchElement ? 1 : 0;
      return accomulator + occurence;
    }, 0);
  }

  let max = getMax(numbers);
  console.log(max);

  function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b ? a : b));
  }
  // use of filter, sort, reverse and map methods
  const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 }
  ];

  console.log(showMovieRating(movies));

  function showMovieRating(movie) {
    const title = movie
      .filter(m => m.year === 2018 && m.rating >= 4)
      .sort((a, b) => a.rating - b.rating)
      .reverse()
      .map(m => m.title);
    return title;
  }
}
arrayExercise();

function functionExercise() {
  console.log("----------------Functions-------------------");

  // use of ...REST operator
  function sum(...args) {
    let total = 0;
    console.log(args);
    if (Array.isArray(args[0])) {
      for (let values of args[0]) {
        total += values;
      }
      return total;
    }
    for (let values of args) {
      total += values;
    }
    return total;
  }

  const getSum = sum([1, 2, 3]);
  console.log(getSum);

  //use of getter
  let areaOfCircle = {
    radius: 2,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  };
  console.log(areaOfCircle.area);

  const numbers = [1, 2, 3, 4];
  try {
    const count = countOccurrences(true, 1);
    console.log(count);
  } catch (e) {
    console.log(e.message);
  }

  function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) throw new Error("Not a array type");
    return array.reduce((accomulator, current) => {
      const occurence = current === searchElement ? 1 : 0;
      return accomulator + occurence;
    }, 0);
  }
}
functionExercise();

//  Example of this keyword
function Circle(radius) {
  console.log("--------------Circle Function-------------");

  this.radius = radius;

  let defaultLocation = { x: 0, y: 1 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error("Invalid location");

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.defaultLocation = { x: 4, y: 5 };
console.log(circle.defaultLocation);
circle.draw();

function ObjectGetterSetter() {
  function Stopwatch() {
    let startTime,
      endTime,
      running,
      duration = 0;
    this.start = function() {
      if (running) throw new Error("Stopwatch is already running");
      running = true;

      startTime = new Date();
    };
    this.stop = function() {
      if (!running) throw new Error("Stopwatch is already stop");

      running = false;
      endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    };

    this.reset = function() {
      startTime = null;
      endTime = null;
      running = false;
      duration = 0;
    };

    Object.defineProperty(this, "duration", {
      get: function() {
        return duration;
      }
    });
  }

  const sw = new Stopwatch();

  function StopwatchProto() {
    let startTime,
      endTime,
      running,
      duration = 0;

    Object.defineProperty(this, "duration", {
      get: function() {
        return duration;
      },
      set: function(value) {
        duration = value;
      }
    });

    Object.defineProperty(this, "startTime", {
      get: function() {
        return startTime;
      }
    });

    Object.defineProperty(this, "endTime", {
      get: function() {
        return endTime;
      }
    });

    Object.defineProperty(this, "running", {
      get: function() {
        return running;
      }
    });
  }

  // const sw = new StopwatchProto();

  StopwatchProto.prototype.start = function() {
    if (this.running) throw new Error("Stopwatch is already running");
    this.running = true;

    this.startTime = new Date();
  };
  StopwatchProto.prototype.stop = function() {
    if (!this.running) throw new Error("Stopwatch is already stop");

    this.running = false;
    this.endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  StopwatchProto.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    duration = 0;
  };
}

// ObjectGetterSetter();

console.log(
  "---------------------------------------------Last-----------------------------------------"
);
function wThreeResource() {
  var library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false
    }
  ];
  for (key of library) {
    if (key.readingStatus) console.log("You already read this book");
    else console.log("You have not read this book yet.");
  }

  function mapMethod() {
    // will be using arrow function and back tick
    const colors = ["blue", "green", "white"];
    const colorList = colors.map(color => `<li>${color}</li>`);
    console.log(colorList);
  }

  mapMethod();

  function bubbleSort() {
    let list = [6, 4, 0, 3, -2, 1];
    for (let i = 0; i <= list.length; i++) {
      for (let j = 1; j <= list.length; j++) {
        if (j > i) {
          // list[]
        }
      }
    }
  }
}

wThreeResource();

function all_values(obj) {
  var keys = _keys(obj);
  var length = keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[keys[i]];
  }
  return values;
}
function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(all_values({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

function invertKeyValue(obj) {
  var result = {};
  var keys = _keys(obj);
  for (var i = 0, length = keys.length; i < length; i++) {
    result[obj[keys[i]]] = keys[i];
  }
  return result;
}
function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(
  invertKeyValue({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);

//checking object key
function hasKey(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
console.log(
  hasKey({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "green")
);

function understandingObject() {
  console.log(Date.prototype);

  const basant = new Object();
  basant.height = 160;
  basant.weight = 250;
  basant["city"] = "indore";
  console.log(basant);
  console.log(Object.prototype);

  const avtar = {
    height: 120,
    weight: 650,
    city: "patna"
  };
  console.log(avtar);

  console.log(avtar.city);
  console.log(basant["city"]);

  // Put the same code back to index.html to run below code
  // <!-- <body onload="rString('h1')"> -->
  // 	<!-- <h1 id="h1"> Basic Javascript programs</h1>
  // 	<button onclick="printThis()">Print</button>
  // 	<button onclick="leapYear()">Find Leap year</button>
  // 	<br>
  // 	<input type="text" id="value1" name="value1" placeholder="Enter Value One">
  // 	<br>
  // 	<input type="text" id="value2" name="value2" placeholder="Enter Value two">
  // 	<br>
  // 	<button onclick="calcMultipy()">Multiply</button>
  // 	<button onclick="calcdivide()">divide</button>
  // 	<p id="result"> </p>
  // 	<p id="ly"></p> --></br>

  function rString(h1) {
    var element = document.getElementById(h1);
    var textNode = element.childNodes[0];
    var str = textNode.data;
    setInterval(function() {
      // let str = "Basant";
      // str = str[str.length - 1] + str.substring(0,str.length - 1);
      str = str.substring(1, str.length) + str[0];
      // console.log(str);
      textNode.data = str;
    }, 250);
  }

  function showProperties(movie) {
    for (let key in movie) {
      // console.log(movie[key]);

      if (typeof movie[key] == "string") {
        console.log(key + " " + movie[key]);
      }
    }
  }
  const movie = {
    title: "a",
    releaseYear: 2019,
    rating: 4.5,
    director: "b"
  };
  showProperties(movie);
}
