// without promises
function first() {
  console.log("hi");
  setTimeout(second, 3000);
}
function second() {
  console.log("hello");
  setTimeout(third, 5000);
}
function third() {
  console.log("bye");
}
setTimeout(first, 1000);

// with promises
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hii");
  setTimeoutPromisified(3000).then(function(){
    console.log("helloo");
    setTimeoutPromisified(5000).then(function(){
      console.log("byee");
    });
  })
})

// better structure
setTimeoutPromisified(1000).then(function(){
  console.log("knock knock");
  return setTimeoutPromisified(3000);
})
.then (function(){
  console.log("who's there");
  return setTimeoutPromisified(5000);
})
.then (function(){
  console.log("whomama");
})
