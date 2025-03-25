let x=parseInt(prompt("Enter  no to reverse"));
let rem=0;
console.log(x);

let rev;
while(x!=0){
 rev=x%10;
 rem=rem*10+rev;
  x=parseInt(x/10);
}
console.log(rem);



