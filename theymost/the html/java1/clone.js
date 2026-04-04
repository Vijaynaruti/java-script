const origanl={
    name:"vijay",
    address:{
        city:"benglore"
    }
};
const clone =structuredClone(origanl);
clone.address.city="mysore";
console.log(origanl.address.city)