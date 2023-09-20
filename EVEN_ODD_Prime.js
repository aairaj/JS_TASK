var n;
let pr = true;
var n = prompt("Enter number:");
n= parseInt(n);
if(n%2==0){
    document.write(n + " is even number. ");
    document.write("<br>");
    
}
else{
    document.write(n + " is an odd number. ");
    document.write("<br>");
}

if (n< 2) {
  pr = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      pr = false;
      break;
    }
  }
}

if (pr) {
  document.write(n + " is a prime number. ");
} else {
  document.write(n + " is not a prime number. ");
}