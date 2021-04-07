module.exports = Phrase;



//Reverses a string.
//add reverse to all strings. because natively string.reverse() does not work;
String.prototype.reverse=function reverse(){
  return Array.from(this).reverse().join("")
}

// function reverse(string){
//   return Array.from(string).reverse().join("")
// }

//Returns true for a palindrome, false otherwise.
function palindrome(string){
  string = string.toLowerCase()
  return string === reverse(string)
}

////defines a Phrase object
function Phrase(string){
  this.content=string

  this.letter=function letter(){
      return Array.from(this.content).filter(i=>i.match(/[a-zA-Z]+/g)).join("")
    };


  //return (this.content.match(/[a-z]/gi) || []).join("")
  //(because empty match results return error instead of empty array)

  //   let letters=[]
  //   for (let i = 0; i < this.content.length; i++) {
  //     if(this.content[i].match(/[a-zA-Z]+/g))
  //     letters.push(this.content[i].match(/[a-zA-Z]+/g))
  //   }
  //   return letters.join("")
  // }

  this.processedContent=function processedContent(){
    return this.letter().toLowerCase()
  }

  //returns true if the phrase is a palindrome, false otherwise.
  this.palindrome=function palindrome(){
    return this.processedContent() === this.processedContent().reverse()
  }

  //Makes the phrase LOUDER.
  this.louder=function louder(){
    return this.content = this.content.toUpperCase()
  }
}


//defines a translated phrase object.
function TranslatedPhrase(string, translation){
  this.content=string
  this.translation=translation

  //returns translation in lowercase for palindrome testing.
  this.processedContent=function processedContent(){
    return this.processor(this.translation)
  }
}

TranslatedPhrase.prototype = new Phrase()

//blank method to string prototype: returns true is string consists solely of whitespace or is empty
String.prototype.blank=function blank(){
  return !!this.match(/^\s*$/)
}



//exercise:returns the last element of an array using slicing and indexing

Array.prototype.last=function last(){
  return this.slice(-1)
}
//return this[this.length-1]
