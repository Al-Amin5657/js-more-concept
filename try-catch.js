function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Please enter a number"
        }
        else if (age < 18) {
            throw "bascha kascha not allow"
        }
        else if (age > 30) {
            throw "Murobbi ra aikhane aisen na"
        }
        errorTag.innerHTML = '';
    }
    catch (err) {
        console.log('ERROR', err);
        errorTag.innerText = 'Error: ' + err;
    }
    finally {
        console.log('All done inside try catch')
    }
    console.log(11111);
}