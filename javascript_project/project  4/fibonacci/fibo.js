// fibonacci series
let x=Number(prompt("Enter no to fibbonacci series"));
let n1=0;
let n2=1;
let n3=n1+n2;
console.log(n1);
console.log(n2);

while(x>2)
{
  n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
    x--;

}