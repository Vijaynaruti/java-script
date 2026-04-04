const flatten=arr=>{
    const result=[];
    arr.forEach(element=>{
       if(Array.isArray(element)){
        result.push(...flatten(element));
       }
       else{
        result.push(element);
       }
    });
    return result;
}