var totalMarks = 200;
var n = 0;

n = prompt("Please enter the number of subjects:");
console.log("Total no of subjects are: " + n);
let obMarks = [];

for (var i = 0; i < n; i++) {
    let marks = prompt("Enter marks for subject " + (i + 1) + ":");
    marks = parseFloat(marks);
    if (!isNaN(marks)) {
        obMarks.push(marks);
    } else {
        alert("Invalid input ");
        i--; 
    }
    
}
console.log("Marks for each subject:");
for (let i = 0; i < obMarks.length; i++) {
    console.log("Subject " + (i + 1) + ": " + obMarks[i]);
}
let sumOfMarks = 0;
for (var i = 0; i < obMarks.length; i++) {
    sumOfMarks += obMarks[i];
}
console.log("Total marks: " + sumOfMarks);

percentage=sumOfMarks/totalMarks*100;
console.log('Final Percentage is:' + percentage +"%");
if (percentage >= 90) {
    console.log(' GPA is 4.0');
} else if (percentage >= 85) {
    console.log('  GPA is 3.7');
} else if (percentage>= 80) {
    console.log(' GPA is 3.3');
} else if (percentage >= 75) {
    console.log(' GPA is 3.0');
} else if (percentage>= 70) {
    console.log(' GPA is 2.7');
} else if (percentage>= 65) {
    console.log(' GPA is 2.3');
} else if (percentage>= 60) {
    console.log(' GPA is 2.0');
} else {
    console.log('0.0');
}