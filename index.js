const textArea = document.getElementById("textarea");
const totalCount = document.getElementById("total-count");
const remainCount = document.getElementById("remain-count");

let currCount =0;

//function to update the character on screen
const updateCounter = () =>{
    currCount = textArea.value.length;
    totalCount.innerText = currCount;
    remainCount.innerText = 150 - currCount;
}; //this semicolon is optional?? 

//call "updateCounter()" when keyboard key is relased .ie `keyup` event occur.

//using arrowFunction
//textArea.addEventListener("keyup", ()=>updateCounter())
          //or
//using Directly Passing 
textArea.addEventListener("keyup",updateCounter);

/* 
1. Arrow Function :
- This creates an anonymous function that calls updateCounter. The arrow function does not have its own `this` context; it uses the `this` value from its enclosing context.
- executed each time the keyup event occurs because the arrow function wrapper invokes it.
2. Direct Function Reference :
 - This directly passes the updateCounter function as a callback to the event listener. When `keyup` is triggered, updateCounter is called with the this context set to the textArea element.
 - function itself is called directly by the event listener when the `keyup` event occurs.
When to Use Each:
Conclusion: 
In your specific scenario, both approaches will work because updateCounter does not need any arguments and does not rely on the `this` context. 
However, the more straightforward and commonly used approach is to "pass the function reference directly"
 */


//to C{opy text
const copyText =()=>{
    textArea.select();
    textArea.setSelectionRange(0,150);
    navigator.clipboard.writeText(textArea.value); //Important 
}