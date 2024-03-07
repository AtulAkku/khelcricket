export const validateRequired = (requiredFields) => {
    requiredFields.forEach((field) => {
        const inputField = document.getElementById(field);
        const errorElement = document.getElementById(`${field}Error`);
        if (inputField.value === '') {
            inputField.classList.add('is-invalid');
            errorElement.textContent = 'This field is required';
        } else {
            inputField.classList.remove('is-invalid');
            errorElement.textContent = null;
        }
    });
}

export const validatePhone = (phoneInput, phoneValue) => {
    const phoneError = document.getElementById('phoneNoError');
    if (!/^[6-9]\d{9}$/.test(phoneValue)) {
        phoneInput.classList.add('is-invalid');
        phoneError.textContent = 'Phone Number Is Invalid';
    } else {
        phoneInput.classList.remove('is-invalid');
        phoneError.textContent = null;
    }
}
export const validateEmail = (emailInput, emailValue) => {
    const emailError = document.getElementById('emailError');
    if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = 'Enter a valid email address';
    } else {
        emailInput.classList.remove('is-invalid');
        emailError.textContent = null;
    }
}
export const validatePassword = (passwordInput, passwordValue) => {
    const passwordError = document.getElementById('passwordError');
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~]).{6,}$/
    .test(passwordValue)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must be at least 6 characters long and contain at least one digit, one special character, one lowercase letter, and one uppercase letter';
    } else {
        passwordInput.classList.remove('is-invalid');
        passwordError.textContent = null;
    }
}
export const validatePinCode = (pinCodeInput, pinCodeValue) => {
    const pinCodeError = document.getElementById('pinCodeError');
    if (!((pinCodeValue>= 110001)&&(pinCodeValue<= 855117))) {
        pinCodeInput.classList.add('is-invalid');
        pinCodeError.textContent = 'Please Enter a valid Pincode';
    } else {
        pinCodeInput.classList.remove('is-invalid');
        pinCodeError.textContent = null;
    }
}
export const confirmPassword = (passwordValue, confirmPasswordValue, confirmPasswordInput) => {
    const conPasswordError = document.getElementById('conPasswordError');
    console.log(confirmPasswordValue);
    if(confirmPasswordValue !== ''){
        if (!(confirmPasswordValue === passwordValue)) {
            confirmPasswordInput.classList.add('is-invalid');
            conPasswordError.textContent = 'Password and Confirm Passwords do not match';
        } else {
            confirmPasswordInput.classList.remove('is-invalid');
            conPasswordError.textContent = null;
        }
    }
}