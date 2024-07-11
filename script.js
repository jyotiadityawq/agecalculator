function calculateAge() {
    var dob = document.getElementById('dob').value;
    var result = document.getElementById('result');

    if (!dob) {
        result.textContent = 'Please enter your date of birth';
        return;
    }

    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    result.textContent = 'Your age is ' + age + ' years';
}
