// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function (obj) {
  // your code goes here
  if(obj === null) {
    return 'null';
  }
  if(typeof obj === 'boolean') {
    return `${obj}`;
  }
  if (typeof obj === 'string') return `"${obj}"`;
  if (typeof obj === 'number') return `${obj}`;
  if (Array.isArray(obj)) {
    if(obj.length === 0) {
      return `[]`;
    }
    let output = [];
    for (let i = 0; i < obj.length; i++) {
      let current = obj[i];
      if (current.length > 1) {
        output.push(stringifyJSON(current));
      } else {
        output.push(current); //maybe add current.toString()
      }
    }
    return output;
  }
  if (typeof obj === 'object') {
    let emptyObjArr = [];
    for (let [key, value] of Object.entries(obj)) {
      emptyObjArr.push(`${stringifyJSON(key)}:${stringifyJSON(value)}`);
    }
    let emptyString = emptyObjArr.join(',')
    return '{' + emptyString + '}';
  }
};

/* let obj1 = {
  name: 'zachary',
  school: 'galvanize',
  lives: 'california',
};

let obj2 = {
  name: 'zachary',
  school: "galvanize",
  lives: 'california',
  friends: {
    girls: 4,
    boys: 3
  }
}; */

/* console.log(stringifyJSON('zach likes the color blue')); // ""hello""
console.log(stringifyJSON(334))// "3"
console.log(stringifyJSON([1, 2, [3, 4], [5, 6, 7]])) //"[1,2,3]"
console.log(stringifyJSON([{ x: 5 }, { x: 6 }, { x: 7 }]))
console.log(stringifyJSON({ x: 5 }))
console.log(stringifyJSON(obj1))
console.log(stringifyJSON(obj2))

console.log('------------------------------ test break')

console.log('stringify test-----', JSON.stringify('zach likes the color blue'));
console.log('stringify test-----', JSON.stringify(334));
console.log('stringify test-----', JSON.stringify([1, 2, [3, 4], [5, 6, 7]]));
console.log('stringify test-----', JSON.stringify([{ x: 5 }, { x: 6 }, { x: 7 }]));
console.log('stringify test-----', JSON.stringify({ x: 5 })); //'{"x":5}'
console.log('stringify test-----', JSON.stringify(obj1));
console.log('stringify test-----', JSON.stringify(obj2)); //'{"x":5}'
 */
