let num=[22,33,67,88,55,34,888,56,88];
 
const findlargest=(nums)=>{
    let largest=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]>largest){
            largest=nums[i];

        }
    }
    return largest;
}
console.log(findlargest(num));
