let name=[22,3,34,44,454,6464,88];
const findlargeset=(names)=>{
    let largest=names[0];
    for(let i=1;i<names.length;i++){
        if(names[i]>largest){
            largest=names[i];
        }
    }
    return largest;
}
console.log(findlargeset(name));
