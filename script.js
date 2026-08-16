
function calculateAge() {
    let dob = document.getElementById("dob").value;
    if(dob === ""){
        alert("Please select your Date of Birth");
        return;
    }
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    // Day Names
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    // Month Names
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let birthDay = days[birthDate.getDay()];
    let birthMonth = months[birthDate.getMonth()];
    let status = "";
    if(age < 13){
        status = "Child";
    }
    else if(age < 20){
        status = "Teenager";
    }
    else if(age < 60){
        status = "Adult";
    }
    else{
        status = "Senior Citizen";
    }
    let result = document.getElementById("result");
    result.classList.remove("hidden");
    result.innerHTML = `
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-4">
            Age Details
        </h2>
        <p class="mb-2"><strong>Age :</strong> ${age} Years</p>
        <p class="mb-2"><strong>Date of Birth :</strong> ${dob}</p>
        <p class="mb-2"><strong>Birth Day :</strong> ${birthDay}</p>
        <p class="mb-2"><strong>Birth Month :</strong> ${birthMonth}</p>
        <p class="mb-2"><strong>Birth Year :</strong> ${birthDate.getFullYear()}</p>
        <p class="mb-2"><strong>Current Date :</strong> ${today.toLocaleDateString()}</p>
        <p class="mb-2"><strong>Current Year :</strong> ${today.getFullYear()}</p>
        <p class="mb-2"><strong>Status :</strong> ${status}</p>
    `;
}
