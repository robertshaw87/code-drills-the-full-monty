// x 25
// 51-60 Day one

// alerts
// confirms
// prompts

// + plus
// - minus
// / slash
// * asterisk
// % percent
// < less-than
// > greater-than
// <= less-than-equal
// >= greater-than-equal

// declear a variable with a prompt and a string of Welcome to the sandwich shop, what do i call you ?
var welcomePrompt = prompt("Welcome to the sandwich shop, what do i call you ?");
// then alert with a string of a variable of hello and the varible of welcomePrompt
alert("Hello " + welcomePrompt);

// declear a variable with a confirm and a string of are you here for a sandwich ?
var question = confirm("are you here for a sandwich ?")
// if question is equal to true
if(question === true){
    // prompt the user with a string of What kind of sandwich would you like ?
    var foodPrompt = prompt("what kind of sandwich would you like ?")
    // then write on the page with the variable welceomPrompt and a string of please wait 10 min for your with another variable of foodPrompt
    document.write( welcomePrompt + " please wait 10 min for your " + foodPrompt);
}else{
    // question isn't true write on the page with a string of if you dont want a sandwich what are you here for !
    document.write("if you dont want a sandwich what are you here for !")
}
