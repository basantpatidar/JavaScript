// Function contructor

var john ={
    name: 'John',
    yearOfBirth: 1990,
    job:'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth,
    this.job = job;
    // this.calculateAge = function(){
    //     console.log(2016 - this.yearOfBirth);
    // }
}

Person.prototype.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
    }

var john = new Person('John',1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1992, 'developer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();



  
  