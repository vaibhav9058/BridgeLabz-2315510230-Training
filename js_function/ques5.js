
// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);   // inherit properties
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);

// Reset constructor
Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

// Create object
const s1 = new Student("Deepak", "CSE");

// Call parent + child methods
s1.showName();
s1.showBranch();
