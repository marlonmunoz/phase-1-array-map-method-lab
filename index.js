const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function capFirtChar(array){
//   const titleCased = tutorials.map(word => word.split(' ').map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(' '));
//   return titleCased
// }

// console.log(capFirtChar(tutorials))

const titleCased = () => {
  return tutorials.map(tutorial => {
    const words = tutorial.split(" ");
    const titleCaseWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return titleCaseWords.join(" ");
  });
};

console.log(titleCased());



