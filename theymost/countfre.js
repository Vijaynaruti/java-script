const numbers = [30, 20, 30, 40, 20, 30]; // Assuming this is your array

const frequency = numbers.reduce((acc, curval) => {
    // 1. Check if the property already exists
    if (acc[curval]) {
        acc[curval] += 1;
    } else {
        // 2. If it doesn't exist, create it and set it to 1
        acc[curval] = 1;
    }
    
    // 3. THE FIX: You MUST return the accumulator so the next loop can use it!
    return acc; 
}, {}); // <-- Also make sure you have this empty object here at the end

console.log(frequency);