let x=parseInt(prompt("Enter  number to digit sum"));
let rem=0;
console.log(x);

let rev;
while(x!=0){
 rev=x%10;
 rem=rem+rev;
  x=parseInt(x/10);
}
console.log(rem);
