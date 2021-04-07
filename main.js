let Phrase = require("jeanpeng-palindrome")
let string = prompt("Please enter a string for palindrome testing")

let userEntry = new Phrase(string)

if(userEntry.palindrome()){
  alert(`"${userEntry.content}" is a palindrome!`)
} else{
  alert(`"${userEntry.content}" is not a palindrome!`)
}
