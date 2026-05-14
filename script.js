let totalPoints = 0;
let totalCredits = 0;

function addCourse() {
    const course = document.getElementById("course").value.trim();
    const grade = parseFloat(document.getElementById("grade").value);
    const credits = parseFloat(document.getElementById("credits").value);

    if (course === "" || isNaN(credits) || credits <= 0) {
        alert("Please enter valid course name and credits");
        return;
    }

    totalPoints += grade * credits;
    totalCredits += credits;

    const gpa = totalPoints / totalCredits;

    document.getElementById("output").innerHTML +=
        `<p>${course} - Grade: ${grade}, Credits: ${credits}</p>`;

    document.getElementById("gpa").innerText =
        "GPA: " + gpa.toFixed(2);

    document.getElementById("course").value = "";
    document.getElementById("credits").value = "";
}