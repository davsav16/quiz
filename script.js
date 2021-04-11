var startBtn = document.querySelector("#start");

function questionOne() {
    console.log("text");
    console.log(document.getElementById("#title"));
    document.getElementById("title").innerHTML = "What Data Type is not supported by JavaScript?"; 
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button"); 
    oneBtn.innerHTML = "Number";
    twBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Boolean";
    twoBtn.classList.add("btn");

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "String";
    threeBtn.classList.add("btn");

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "Positive";
    fourBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);

}

function questionTwo() {
    document.getElementById("title").innerHTML = "True or False: JavaScript is a case-sensitive language?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "True";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    towBtn.innerHTML = "False";
    twoBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
}

function questionThree() {
    document.getElementById("title").innerHTML = "Which of the following is a variable scope in JavaScript?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "Local";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Server";
    twoBtn.classList.add("btn");

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "Storage";
    threeBtn.classList.add("btn");

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "World";
    fourBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);
}

function questionFour() {
    document.getElementById("title").innerHTML = "Which of the following is NOT a way JavaScript can be involved in an HTML file?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "Inline";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Internal";
    twoBtn.classList.add("btn");

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "External";
    threeBtn.classList.add("btn");

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "Offline";
    fourBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);
}

function questionFive() {
    document.getElementById("title").innerHTML = "True or False: Angular is a JavaScript framework?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "True";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "False";
    twoBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
}

function done() {
    document.getElementById("title").innerHTML = "Finished! How did you do? :)";
    document.querySelector("#start").classList.add('no-show');
    document.querySelector('.text').innerHTML = "Your final score is (#).";

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-record");

    var textTwo = document.createElement("text");
    textTwo.innerHTML = "Enter your initials";
    textTwo.classList.add("text");

    var inputForm = document.createElement("INPUT");
    inputForm.setAttribute("type", "text");

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");

    contentDiv.appendChild(textTwo);
    contentDiv.appendChild(inputForm);
    contentDiv.appendChild(submitBtn);
}

startBtn.addEventListener("click", done);