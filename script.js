const Inday = document.querySelector("#day");
const Inmonth = document.querySelector("#month");
const Inyear = document.querySelector("#year");
const submit = document.querySelector("#submit")
const form = document.querySelector("#form")
const dayNumber = document.querySelector(".dayNumber")
const monthNumber = document.querySelector(".monthNumber")
const yearNumber = document.querySelector(".yearNumber")

 form.addEventListener("submit", (e) => {
    e.preventDefault()
   
    const D = Inday.value.trim(); // trim removes blanks
    const M = Inmonth.value.trim(); 
    const Y = Inyear.value.trim();
    const birthday = `${Y}-${M}-${D}`;

    let years = new Date().getFullYear() - new Date(birthday).getFullYear();
    let months = new Date().getMonth() - new Date(birthday).getMonth();
    let days = new Date().getDate() - Number(D);
    if (months < 0) {
      years = years - 1;
      months = months + 12;
    }

    if (days < 0) {
        days += getNoOfDays(Y, M - 1);
      }

      // Get Number of Days in a particular months
function getNoOfDays(y, m) {
    return new Date(y, m, 0).getDate();
  }

     // Day Validation
    if(Inday.value === " ") {
        const textReq = document.createElement("p");
        textReq.innerHTML = "This field is required";
        textReq.classList.add("requiredText")
        Inday.style.border = "solid 1px rgb(255, 87, 87)"
        document.querySelector(".section__LDay").style = "color: rgb(255, 87, 87)"
        document.querySelector(".section__Tinputs__Day").appendChild(textReq);

        setTimeout(function() {
           textReq.remove()
          }, 5000); 
          
          
    } else if (Inday.value <= 31) {
        dayNumber.innerHTML = String(days)
    } 
    else {
        const textError = document.createElement("p");
        textError.innerHTML = "Must be a valid day";
        textError.classList.add("requiredText")
        Inday.style.border = "solid 1px rgb(255, 87, 87)"
        document.querySelector(".section__LDay").style = "color: rgb(255, 87, 87)"
        document.querySelector(".section__Tinputs__Day").appendChild(textError);
        setTimeout(function() {
            textError.remove()
           }, 5000); 
    }

    // Month Validation
    
    if(Inmonth.value === " ") {
        const textReq = document.createElement("p");
        textReq.innerHTML = "This field is required";
        textReq.classList.add("requiredText")
        Inmonth.style.border = "solid 1px rgb(255, 87, 87)"
        document.querySelector(".section__LMonth").style = "color: rgb(255, 87, 87)"
        document.querySelector(".section__Tinputs__Month").appendChild(textReq);

        setTimeout(function() {
            textReq.remove()
           }, 5000); 

    } else if (Inmonth.value <= 12) {
        monthNumber.innerHTML = String(months)

    } 
    else {
        const textError = document.createElement("p");
        textError.innerHTML = "Must be a valid Month";
        textError.classList.add("requiredText")
        Inmonth.style.border = "solid 1px rgb(255, 87, 87)"
        document.querySelector(".section__LMonth").style = "color: rgb(255, 87, 87)"
        document.querySelector(".section__Tinputs__Month").appendChild(textError);

        setTimeout(function() {
            textError.remove()
           }, 5000); 
    }

    // Year Validation
    if(Inyear.value === " ") {
        const textReq = document.createElement("p");
        textReq.innerHTML = "This field is required";
        textReq.classList.add("requiredText")
        Inyear.style.border = "solid 1px rgb(255, 87, 87)"
        document.querySelector(".section__LYear").style = "color: rgb(255, 87, 87)"
        document.querySelector(".section__Tinputs__Year").appendChild(textReq);
        setTimeout(function() {
            textReq.remove()
           }, 5000); 
    } else if (Inyear.value <= new Date().getFullYear()) {
        yearNumber.innerHTML = String(years)
    } 
    else {
        const textError = document.createElement("p");
        textError.innerHTML = "Must be a valid Year";
        textError.classList.add("requiredText")
        Inyear.style.border = "solid 1px rgb(255, 87, 87)"
        document.querySelector(".section__LYear").style = "color: rgb(255, 87, 87)"
        document.querySelector(".section__Tinputs__Year").appendChild(textError);
        setTimeout(function() {
            textError.remove()
           }, 5000); 

    } 


}) 