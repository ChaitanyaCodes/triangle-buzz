// Navigation Controls 
const triangleAngleSumSection = document.querySelector(".triangle-angles-sum");
const triangleAreaSection = document.querySelector(".triangle-area");
const triangleHypotenuseSection = document.querySelector(".triangle-hypotenuse");
const triangleQuizSection = document.querySelector(".triangle-quiz");
const navigationList = document.querySelector(".nav-list");

hideSections();
showBlock(triangleAngleSumSection);

navigationList.addEventListener("click", (e) => {
    let targetId = e.target.id
    if(targetId === "angles") {
        hideSections();
        showBlock(triangleAngleSumSection);
    } else if(targetId === "area") {
        hideSections();
        showBlock(triangleAreaSection);
    } else if(targetId === "hypotenuse") {
        hideSections();
        showBlock(triangleHypotenuseSection);
    } else if(targetId === "quiz") {
        hideSections();
        showBlock(triangleQuizSection);
    }
});

function hideSections(){
    triangleAngleSumSection.style.display = "none";
    triangleAreaSection.style.display = "none";
    triangleHypotenuseSection.style.display = "none";
    triangleQuizSection.style.display = "none";
}

function showBlock(block){
    block.style.display = "block";
}

// Angle sum section
const angleInputs = document.querySelectorAll(".angle-input");
const checkTriangleBtn = document.querySelector("#check-triangle-btn");
const messageArea1 = document.querySelector(".message-area1");


function isTriangle(e){
    e.preventDefault();
    let sumOfAngles = getAngleSum(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));

    if(sumOfAngles === 180){
        messageArea1.innerText = "Yeah!! these angles can form a triangle."
    }else {
        messageArea1.innerText = "Sorry!! these angles cannot form a triangle."
    }
}

function getAngleSum(angle1, angle2, angle3){
    let sum = 0;
    sum = angle1 + angle2 + angle3;
    return sum;
}

checkTriangleBtn.addEventListener('click', isTriangle)

// Area section 
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const getAreaBtn = document.querySelector("#get-area-btn");
const messageArea2 = document.querySelector(".message-area2");

function calculateArea(base, height){
    let area = ((base*height)/2).toFixed(2);
    return area;
}

function handleGetArea(e){
    e.preventDefault();
    if(base.value && height.value){
        let triangleArea = calculateArea(Number(base.value), Number(height.value));
        messageArea2.innerText = "The area of the triangle is " + triangleArea
    }else {
        messageArea2.innerText = "Please enter all the fields.";
    }
}

getAreaBtn.addEventListener("click", handleGetArea);

// Hypotenuse
const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const getHypotenuseBtn = document.querySelector("#get-hypotenuse-btn");
const messageArea3 = document.querySelector(".message-area3");

getHypotenuseBtn.addEventListener("click", handleGetHypotenuse);

function handleGetHypotenuse(e){
    e.preventDefault();
    if(sideA.value && sideB.value){
        let triangleHypotenuse = calculateHypotenuse(Number(sideA.value), Number(sideB.value));
        messageArea3.innerText = "The hypotenuse of the triangle is " + triangleHypotenuse
    }else {
        messageArea3.innerText = "Please enter all the fields.";
    }
}

function calculateHypotenuse(sideA, sideB){
    let hypotenuse = Math.hypot(sideA, sideB).toFixed(2);
    return hypotenuse;
}

// Quiz

const quizForm = document.querySelector(".quiz-form");
const questionBox = document.querySelectorAll(".question-box");
const scoreBox = document.querySelector(".score");

const correctAnswers = ["yes", "yes", "no", "100", "50", "60"];
let score= 0;

quizForm.addEventListener('submit', handleFormSubmition);

function handleFormSubmition(e){
    e.preventDefault();
    const formData = new FormData(quizForm);
    let index = 0;
    for(let value of formData.values()){
        if(value == correctAnswers[index]) {
            questionBox[index].style.backgroundColor = "lightgreen";
            score += 10;
        }
        else{
            questionBox[index].style.backgroundColor = "pink";
        }
            index++;
    }

    scoreBox.innerText = "Your score is " + score + " points.";
}