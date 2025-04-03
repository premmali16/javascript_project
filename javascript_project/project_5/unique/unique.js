let array=[1,2,3,2,1];

for(let x=0;x<array.length;x++){
    let temp=0;
let y=0;
    while(y<array.length){
        if(x != y){
        if(array[x]==array[y]){
            temp++;

        }}
        y++;
    }
    if(temp==0){
        console.log(`unique element is ${array[x]}`);
        
    }
}