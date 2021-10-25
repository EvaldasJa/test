
// Pages
const slidePage = document.querySelector(".slide-page");
// Buttons
const nextBtnFirst = document.querySelector("#firstNext");
const prevBtnSec = document.querySelector("#prev-1");
const nextBtnSec = document.querySelector("#next-1");
const prevBtnThird = document.querySelector("#prev-2");
const nextBtnThird = document.querySelector("#next-2");
const prevBtnFourth = document.querySelector("#prev-3");
const submitBtn = document.querySelector("#submit");
// Progress bar
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
// Inputs
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phonenumber");
const contactChoice = document.querySelector(`input[type="radio"][name=contact]:checked`);
const birthday = document.querySelector("#birthday");
const gender = document.querySelector("#gender");

const summary = document.querySelector("#summary");

const checkConsent = document.querySelector("#consent");

// Check input validity and Enable Next button
document.addEventListener("keyup", event => {
  if (firstName.validity.valid && lastName.validity.valid) {
    nextBtnFirst.removeAttribute("disabled");
  } else {
    nextBtnFirst.setAttribute("disabled", "disabled");
  }
})


nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  // on Next click slides in next div class "page" by setting new left margin
  slidePage.style.marginLeft = "-25%";
  //  adds color and check to finished bullets
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  // sets new value of current
  current += 1;
});

// Check input validity and Enable Next button
document.addEventListener("keyup", event => {
  if (email.validity.valid && phoneNumber.validity.valid) {
    nextBtnSec.removeAttribute("disabled");
  } else {
    nextBtnSec.setAttribute("disabled", "disabled");
  }
})


nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;


summary.insertAdjacentHTML("beforeend",`<ul>
    <li>First Name:<strong> ${firstName.value.substring(0,1).toUpperCase() + firstName.value.substring(1).toLowerCase()}</strong></li>
    <li>Last Name:<strong> ${lastName.value.substring(0,1).toUpperCase() + lastName.value.substring(1)}</strong></li>
    <li>Email Address:<strong> ${email.value.toLowerCase()}</strong></li>
    <li>Phone Number:<strong> ${phoneNumber.value}</strong></li>
    <li>Prefered contact method:<strong> ${contactChoice.value}</strong></li>
    <li>Date of Birth:<strong> ${birthday.value}</strong></li>
    <li>Gender:<strong> ${gender.value}</strong></li>
  </ul>`);

});

// Enable/disable Submit button

checkConsent.addEventListener("change", function(event) {
    if (event.currentTarget.checked){
      submitBtn.removeAttribute("disabled", "disabled");
    }else {
      submitBtn.setAttribute("disabled", "disabled");
    };
})

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  summary.innerHTML = "";
});
