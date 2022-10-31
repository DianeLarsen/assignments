var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");


submit.addEventListener("click", function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['kosher'].checked) {
        diet.push(document.getElementById("kosher").value);
    }
    if (form.elements['vegetarian'].checked) {
        diet.push(document.getElementById('vegetarian').value);
    }
    if (form.elements['lactoseFree'].checked) {
        diet.push(document.getElementById('lactoseFree').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
});