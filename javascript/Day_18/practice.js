// object literals

const student1 = { // in object literals we mainly use const keyword.
    name : "shradha",
    age : 23,
    marks : 94.4
};

let student2 = ["shradha", 23, 94.4];

const item = {
    price : 100.00,
    discount : 50,
    colors : ["red", "pink"]
};

console.log(student1);
console.log(student2);
console.log(item);

// create an object literal for the properties of thread post.

const post = {
    username : "@shradhakhapra", 
    content : "This is my #firstPost",
    likes : 150,
    reposts : 5,
    tags : ["@apnacollege", "@delta"]
};

console.log(post);

// get values.

console.log(post["likes"]); 
console.log(post.reposts); // mostly we use this method but at some point this method doest work. you can see the example below.


let prop = "content";
console.log(post[prop]);
console.log(post.prop); // -- undefined 

// conversion in get values.

const obj = {
    1 : 'a',
    2 : 'b',
    true : 'c', 
    null : 'd',
    undefined : 'e'
};

console.log(obj[1]); // -- no need to write in double code it will be automatically converted into string.
console.log(obj[2]);
console.log(obj[true]); // -- no need to write in double code this will be treated as string true not a boolean keyword.
console.log(obj[null]);
console.log(obj[undefined]);
// console.log(obj.1); -- this will give an error.
// console.log(obj.2);
console.log(obj.null);
console.log(obj.undefined);
console.log(obj.true);

// add/update value

const student = {
    name : "shradha",
    age : 23,
    marks : 94.9,
    city : "Delhi"
};

student.city = "Mumbai";
console.log(student.city);

student.gender = "Female";
console.log(student.gender);

student.marks = "A";
console.log(student.marks);

delete student.age;

console.log(student);

// nested objects -- objects of objects.

const classInfo = {
    aman : {
        grade : "A+",
        city : "Delhi"
    },
    shradha : {
        grade : "A",
        city : "Pune"
    },
    karan : {
        grade : "O",
        city : "Mumbai"
    }
};

console.log(classInfo);

console.log(classInfo.shradha);

console.log(classInfo.shradha.city);

classInfo.shradha.city = "Mumbai";

console.log(classInfo);

// array of objects

const classInfoo = [
    {name : "aman",
    grade : "A+",
    city : "Delhi"
    },
    {name : "shradha",
    grade : "A",
    city : "Pune"
    },
    {name : "karan",
    grade : "O",
    city : "Mumbai"
    }
]

console.log(classInfoo);
console.log(classInfoo[1].name);

classInfoo[1].city = "gurgaon";
classInfoo[1].gender = "Female";

console.log(classInfoo);

console.log(Math);

// Math object

console.log(Math.PI);
console.log(Math.E);

console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));

console.log(Math.random());
console.log(Math.random());

console.log(Math.abs(-6));
console.log(Math.pow(2,4));


// Random integers

let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log(step4);

// now we will be doing the same thing in 1 step.

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// generate a random number between 1 to 100;

random = Math.floor(Math.random() * 100) + 1;
console.log(random);

// generate a random number between 1 to 5;
random = Math.floor(Math.random() * 5) + 1;
console.log(random);

// genrate a random number between 21 to 25.
random = random + 20;
console.log(random);