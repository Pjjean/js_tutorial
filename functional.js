// mapping
let states = ["Kansas","Nebraska","North Dakota","South Dakota"]

// urls:imperative method
function imperativeUrls(element){
  let url=[];
  element.forEach(function(element){
    element=element.toLowerCase().split(/\s+/g).join("-");
    url.push(element);
  })
  return url
}
console.log(imperativeUrls(states))

// functional method
function functionalUrls(element){
  return element.map(function(element){
    return element=element.toLowerCase().split(/\s+/g).join("-")
  })
}
console.log(functionalUrls(states))

//simplify mapping

function sFunctionalUrls(element){
  return element.map(element=>element.toLowerCase().split(/\s+/g).join("-")
)}
console.log(sFunctionalUrls(states))
//replace chaining with a simple functional
function urlify(string){
  return string.toLowerCase().split(/\s+/g).join("-")
}
// this way we can replace previous functions as:
//element=urlify(element)
//elements.map(element=>urlify(element))

function fullUrls(element){
  return element.map(element=>`https://example.com/${urlify(element)}`)//or return "https://example.com/"+states
}
console.log(fullUrls(states))


//singles:imperative method

function imperativeSingle(element){
  let singles=[];
  element.forEach(function(element){
    if (element.split(/\s+/g).length===1){
      singles.push(element)//**pay attention to 'push' syntax
    }
  })
  return singles
}
console.log(imperativeSingle(states))

//singles:functional method

function functionalSingle(element){
  return element.filter(element=>element.split(/\s+/g).length===1)
}
console.log(functionalSingle(states))

//exercise: str.includes('string')
function dakotasInclude(element){
  return element.filter(element=>element.toLowerCase().includes('dakota'))
}
console.log(dakotasInclude(states))

function dakotasRegex(element){
  return element.filter(element=>element.split(/\s+/g).length===2)
}
console.log(dakotasRegex(states))


//sum:imperative method
let numbers=[1,2,3,4,5,6,7,8,9,10]

let total=0
function imperativeSum(elements){
  elements.forEach(function(n){
    total=total+n//total+=n;
  })
  return total
}

console.log(imperativeSum(numbers))

//sum:functional method
function functionalSum(elements){
  return elements.reduce((total,n)=>{
    return total += n
  },0
)}

console.log(functionalSum(numbers))

//key/value pairs: state:state.length

let lengths={}
function imperativeLengths(elements){
  elements.forEach(function(elements) {
    lengths[elements]=elements.length
  });
  return lengths
}

console.log(imperativeLengths(states))

//key/value pairs functional method

function functionalLengths(elements){
  return elements.reduce((lengths,i)=>{
   lengths[i] = i.length
   return lengths
  },{})
}
console.log(functionalLengths(states))

//exercise: returns product of elements in an array
let b =[2,4,6,8,10]
function multiply(elements){
  return elements.reduce((product,n)=>{
    return product *= n
  },1
)}
console.log(multiply(b))
