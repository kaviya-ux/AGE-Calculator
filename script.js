const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const resultDiv = document.getElementById("result");

  if (!dobInput) {
    alert("Please select your date of birth.");
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  const birthDay = days[dob.getDay()];
  const birthMonth = months[dob.getMonth()];

  let lifeStage;
  if (age < 13) {
    lifeStage = "Child";
  } else if (age < 20) {
    lifeStage = "Teenager";
  } else if (age < 60) {
    lifeStage = "Adult";
  } else {
    lifeStage = "Senior Citizen";
  }

  resultDiv.innerHTML = `
    <p><strong>Age:</strong> ${age} years</p>
    <p><strong>Born on:</strong> ${birthDay}, ${birthMonth} ${dob.getDate()}, ${dob.getFullYear()}</p>
    <p><strong>Today:</strong> ${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}</p>
    <p><strong>Life Stage:</strong> ${lifeStage}</p>
  `;

  resultDiv.classList.remove("hidden");
}
