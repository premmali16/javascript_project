function swap(){
let y="The Quick Brown Fox";
let z=" ";
for( let x of y){
    // console.log(x);
    
    if(x== x.toLowerCase()){
z+=x.toUpperCase();
    }
    else{
        z+= x.toLowerCase();
    }
}

console.log(`${z}`);

}
swap();
