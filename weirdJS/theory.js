/*

1.  Syntax Parser : - A program which reads developer code and checks for correctness of syntex.

2.  Lexical Environment : - It is the position of any variable, function, object where it seats in the program.

3.  Execution Environment : - It's the concept which holds information of current executing code. Whenever a new function executes a
                            new execution context it created to the program.
                            Every function has its own execution context and every execution context has its own scope,
                            Every scope has its own variables like "let" and "const" which are limited to it.

3A. Execution context has two phase : 
    i). Creation : Memory space is allocated to developers code.
    ii). Exection : Code is executed.

3B. As soon as JS file runs inside JS engine a global execution context, 'this, window/global object are created. 
                            A global Object in browser while Window Object in case of Node is created.
                            As this time 'this' is pointing to global/window object.

4.   'Let' :- It is a keywork which allows to declear a variable, It gets into memory while execution phase but can only be used 
            after line of code where it is decleard. 'Let' does not suppost hoisting unlike 'var'.                         

5.  Object : - It is collected to key/name value pair. In JavaScript everthing is Object. Array and function are also object.
                In an Object a value is called using either . Dot notation or [] bracket notation. 
                Everything about object is discussed later

6.  Hoisting : - Its a concept where ececution stack setsup memory space for variable only 'var' and functions.
                    var will be undefined until a value is not initialized on the other hand function gets in memory 
                    and can be executed before it is defined.
                In general this is not a good practice as you might endup with undifined. 'let' and 'const' are not hoisted.
                
7.  Synchronous: - JS is synchronous language, In JS code gets executed Line by line.

8.  Asynchronous: - More than One code gets executed at a time. For Example - when a network request is made then browser takes care
                    of that n/w request while JS is synchronously running and gets the n/w request when received.

9.  Event Queue :- After js code gets executed (execution stack is empty) then JS looks for the event queue which contains a onClick()
                    events or a HTTP request.

10. Dynamic Typing:- JS has dynamic typing and JS engine dont need to know the type of variable. JS figures it out on runtime and 
                        type can be changed on runtime.
                        
  */

11. Data types : -
        A. Primitive: - Value type, a = 5; b = a; In this case be will have copied value of 'a' and memory address of 'b' will
                        be defferent than memory address of 'a'. There are 6 types of Primitive data types 
                            i.      Undifined : Lack of existence
                            ii.     Null : Lack of existence
                            iii.    String : Sequence of characters
                            iv.     Number : floting point numbers
                            v.      Boolean : true/false
                            vi.     Symbol :  Introduces in ES6

        B. Reference type : - Object and Array are reference type which points to same memory address even after mutation or after 
        making a copy from One to another.
                            

12. JSON: - JavaScript Object Notation is simple a syntax used for exchanging information. JSON Syntax is like JS object but in JSON
            both key and value are under quotes. JSON is faster and simpler than XML.
            Using JSON.stringify(objLiteral); an Object can be converted into JSON syntax
            while using JSON.parse(); as JSON can be converted into JS Onject. .

 */

 /*

//13. Types of functions: 
//Function Statement
stmt();
function stmt(){
    console.log("This is function statement and this can be invoked before it is declared as functinons are hoisted.");
}

//Function Expression
var expsn = function(){
    console.log("This is function expression and this can only be invoked after it is declared or it will throw undefined error",
                "as variables are not hoisted with values, they just get memory space with undefined");
}
expsn(); //This is the way function expression is invoked.

// First class function : A function is passed as an argument to another function
function firstClass(a){
    a(); //Invoking function from argument.
}
firstClass(function(){
    console.log("This function is passed as an argument to firstClass function as 'a'");
});
*/
/*