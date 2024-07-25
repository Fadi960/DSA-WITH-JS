// find the frequency of characters in a string with a time complexity of O(n)

function characterFrequency(str) {
    const frequency = {};

    for (const char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}


const string = "hello world";
const result = characterFrequency(string);
console.log(result); 
