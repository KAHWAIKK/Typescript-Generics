"use strict";
/* GENERICS */
//What are they? 
//Sometimes we do not know what types of data may be passed to a function type aliases interface etc, here is where genrics come in; they allow us to provide a placeholder(or a type of variable)
//Generics allow us to write flexible and reusable code by creating functions,classes and interfaces that work with different types
//Example
const stringEcho = (arg) => arg;
// The above function will only work with a type string. So if we want it to work with any other type(become generic), we abstract the type out
//Syntax of a generic Function 
//the echo function takes a generic type parameter T and returns an arguement of the same type
const echo = (argA) => argA;
//When you call the function you specify the actual type you want to use for 'T '
//This generic function could be useful with utility functions when we arent sure with the type we are going to pass in
const isObj = (argNB) => {
    return (typeof argNB === 'object' //this will return true if the parameter is an object and false if the parameter is not an object). 
        && !Array.isArray(argNB) //Since an array is an object, it will also return true, to avoid this problem
        && argNB !== null); //null also retuns true for object if the parameter is null
};
console.log(isObj(true)); //false
console.log(isObj(null)); //false
console.log(isObj(125)); //false
console.log(isObj('Kevin')); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj({ name: 'Kevin' })); //true since its an object
//ANOTHER EXAMPLE OF UTILITY FUNCTION  - istrue with keyof assertion- 
//another indication that you may need a generic function is when your intended function has to do some logic about what it needs to return
const isTrue = (argB) => {
    if (Array.isArray(argB) && !argB.length) /* i.e should not be an empty array) */ {
        return { argB, is: false };
    }
    if (isObj(argB) && !Object.keys(argB).length) 
    /* should not ba an empty object, notice how we used keyof assertion */
    {
        return { argB, is: false };
    }
    return { argB, is: !!argB }; //our function will return an object with an argument property and use the double bang operator; this operator takes the 0 and flip it for the first time then flip it back that makes it a true or false instead if stating 0 or 1 for true or false respectively.
};
console.log(isTrue(false)); //{"argB": false"is": false}
console.log(isTrue(0)); //{"argB": 0 "is": false}
console.log(isTrue(true)); //{"argB": true "is": false}
console.log(isTrue(1)); //{"argB": 1 "is": false}
console.log(isTrue('kahwai')); //{"argB": 'kahwai' "is": true}
console.log(isTrue('')); //{"argB": '' "is": false}
console.log(isTrue(null)); //{"argB": null "is": false}
console.log(isTrue(undefined)); //{"argB": undefined "is": false}
console.log(isTrue({})); //{"argB": {} "is": false}
console.log(isTrue({ name: 'kahwai' })); //{"argB": {name : 'kahwai'}  "is": true}
console.log(isTrue([])); //{"argB": [] "is": false}
console.log(isTrue([1, 2, 3, 4, 5])); //{"argB": [1,2,3,4,5] "is": false}
console.log(isTrue(NaN)); //{"argB": NaN "is": false}
console.log(isTrue(-0)); //{"argB": -0 "is": false}
const checkBoolValue = (argB) => {
    if (Array.isArray(argB) && !argB.length) /* i.e should not be an empty array) */ {
        return { value: argB, is: false };
    }
    if (isObj(argB) && !Object.keys(argB).length) 
    /* should not ba an empty object, notice how we used keyof assertion */
    {
        return { value: argB, is: false };
    }
    return { value: argB, is: !!argB }; //our function will return an object with an argument property and use the double bang operator; this operator takes the 0 and flip it for the first time then flip it back that makes it a true or false instead if stating 0 or 1 for true or false respectively.
};
console.log(checkBoolValue(false)); //{"argB": false"is": false}
console.log(checkBoolValue(0)); //{"argB": 0 "is": false}
console.log(checkBoolValue(true)); //{"argB": true "is": false}
console.log(checkBoolValue(1)); //{"argB": 1 "is": false}
console.log(checkBoolValue('kahwai')); //{"argB": 'kahwai' "is": true}
console.log(checkBoolValue('')); //{"argB": '' "is": false}
console.log(checkBoolValue(null)); //{"argB": null "is": false}
console.log(checkBoolValue(undefined)); //{"argB": undefined "is": false}
console.log(checkBoolValue({})); //{"argB": {} "is": false}
console.log(checkBoolValue({ name: 'kahwai' })); //{"argB": {name : 'kahwai'}  "is": true}
console.log(checkBoolValue([])); //{"argB": [] "is": false}
console.log(checkBoolValue([1, 2, 3, 4, 5])); //{"argB": [1,2,3,4,5] "is": false}
console.log(checkBoolValue(NaN)); //{"argB": NaN "is": false}
console.log(checkBoolValue(-0)); //{"argB": -0 "is": false}
const processUser = (user) => /* what we are doing here is narrowing the generic type henece the type must have an id property */ {
    //process the user with logic here
    return user;
};
console.log(processUser({ id: 252, name: 'John' })); //return 
// {
//     "id": 252,
//     "name": "John"
// }
//console.log(processUser( { name : 'John'}))
//error as the parameter has no id property
/* Multiple Type Variables & Extends with keyof */
//Example
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
//An array full of user objects in the JSON format
const userArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(userArray, "email"));
// [
//     "Sincere@april.biz",
//     "Shanna@melissa.tv"
// ]
console.log(getUsersProperty(userArray, "username"));
// [
//     "Bret",
//     "Antonette"
// ]
console.log(getUsersProperty(userArray, "website"));
// [
//     "hildegard.org",
//     "anastasia.net"
// ]
console.log(getUsersProperty(userArray, "name"));
// [
//     "Leanne Graham",
//     "Ervin Howell"
// ]
console.log(getUsersProperty(userArray, "id"));
//(2) [1, 2]
console.log(getUsersProperty(userArray, "company"));
console.log(getUsersProperty(userArray, "phone"));
// [
//     "1-770-736-8031 x56442",
//     "010-692-6593 x09125"
// ]
//Using a generic in a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    //getter
    get state() {
        return this.data;
    }
    //setter
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John Smith');
console.log(store.state); // John Smith
//setting once more
store.state = "Kevin Kahwai";
console.log(store.state); //its possible to re-assign state Kevin kahwai
//store.state = 12
// error from typescript 
//Type 'number' is not assignable to type 'string'
const myState = new StateObject([10]);
myState.state = ["Kevin"]; //TS SHOWS NO ERROR
myState.state = [256]; //TS SHOWS NO ERROR
myState.state = [false];
//TS SHOWS NO ERROR
myState.state = ["Kevin"];
myState.state = ["Kevin"];
console.log(myState.state); //['Kevin']
