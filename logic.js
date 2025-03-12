function validate() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    var nameRegex = /^[a-zA-Z]+$/;

    if (name === "" || pass === "") {
        alert("Both fields are required!");
        return false;
    }

    if (!nameRegex.test(name)) {
        alert("Name should only contain alphabets (lowercase or uppercase)!");
        return false;
    }

    // Add more validation logic if needed

    // If validation passes, show success alert and redirect to home.html
    alert("Details are correct!");
    window.location.href = "home.html";
}