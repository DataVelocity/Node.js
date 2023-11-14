console.log("Weather-App Started! ")


// it follows (Asynchronous model)Non-Blocking I/O models - One function does not wait others to execute 
// it means all the function independant to each others 
// Wait 2 seconds before running the function
console.log("Starting")
setTimeout(()=>{
    console.log(" 10 second timer")
},2000)

setTimeout(()=>{
    console.log("0 second timer")
},0)


console.log("Stopping")