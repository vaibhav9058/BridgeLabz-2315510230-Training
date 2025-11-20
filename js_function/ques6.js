
// Level 1
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Level 2
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log("Department: " + this.department);
};

// Level 3
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

// Create Professor object
const p1 = new Professor("Deepak", "Computer Science", "JavaScript");

// Calling methods from all levels
p1.showName();        // From Person
p1.showDepartment();  // From Faculty
p1.showSubject();     // From Professor
