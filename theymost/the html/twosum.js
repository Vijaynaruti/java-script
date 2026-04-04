function twosumoptimall(num,traget){
    const seen={};
    for(let i=0;i<num.length;i++){
        const currentnum=num[i];
        const neednum=traget-currentnum;
        if(seen[neednum]!==undefined){
            return[seen[neednum],i];

        }
        seen[currentnum]=i;
    }
      return[];
}
console.log(twosumoptimall([2,7,11,15],9));

