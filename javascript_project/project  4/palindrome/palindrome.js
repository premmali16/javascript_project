let x=Number(prompt("Enter no to check palindrome"));
let temp=x;
let rev=0;
while(x>0)
{
  let rem=x%10;
  rev=rev*10+rem;
  x=parseInt(x/10);
}
if(temp==rev)
{
  console.log("Palindrome");
}   
else
{
  console.log("Not Palindrome");
}