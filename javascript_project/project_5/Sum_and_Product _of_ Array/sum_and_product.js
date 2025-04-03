let arr=[1,2,3,4,5];
let sum=0;
let product=1;
arr.forEach((x,y)=>{
    sum=sum+x;
    product*=x;
    // console.log(y);
    
})
console.log(sum);
console.log(product);