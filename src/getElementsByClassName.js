// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

let getElementsByClassName = function (className) {

  //output array
  let newArr = [];
  //create a inner closure function
  let doesClassNameExist = (test) => {
      // check if there are any classes and if the classNames contain the function argument
      if (test.classList && (test.classList.value.indexOf(className) > -1)) {
        // push, maybe here ???
        newArr.push(test);
        //console.log(newArr);
      }
      // check if there are any sub-nodes/children
      if(test.childNodes) {
        // childNodes is an array, loop through the childNodes
        //for(let i = 0; i < test.childNodes.length; i++) {
          // recursive function is called on each individual node element
          //doesClassNameExist(test.childNodes[i]);
        //}
        test.childNodes.forEach(element => doesClassNameExist(element));
      }
  }
  //function is invoked here for the first time
  doesClassNameExist(document.body);
  // return the result array
  return newArr;
}


