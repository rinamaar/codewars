// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Should return 5 for 'abracadabra'


function getCount(str) {
    let count = 0;
      let arr = str.toLowerCase().split("");
      let vowels = ["a", "e", "i", "o", "u"];
  
      for(let i = 0; i < str.length; i++) {
          if (vowels.includes(arr[i])) {
              count++
          }
      }
      return count
  }
  console.log(getCount("abracadabra"))
  
  
  

