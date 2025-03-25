//  string for user
let x=prompt("Enter a string");
// split the string

let y=x.split(" ");
// empty string
let z="";
// capitalize the first letter of each word
for(let i=0;i<y.length;i++)
{
  z+=y[i].charAt(0).toUpperCase()+y[i].slice(1)+" ";
  console.log(z);
  
}  
alert(z);
// output


