const ids = [
    'firstName',
    'lastName',
    'email',
    'text-message'
]
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var isValidated = true;
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    for (let i = 0; i < ids.length; i++) {
        const ele = document.getElementById(ids[i]);
        if (ids[i] === 'email') {
            if (!emailRegex.test(ele.value)) {
                ele.classList.add('error');
                ele.nextElementSibling.style.visibility = 'visible';
                isValidated = false;
            } else {
                ele.classList.remove('error');
                ele.nextElementSibling.style.visibility = 'hidden';
            }
            continue;
        }
        if (ele.value.trim() === '') {
            ele.classList.add('error');
            ele.nextElementSibling.style.visibility = 'visible';
            isValidated = false;
        } else {
            ele.classList.remove('error');
            ele.nextElementSibling.style.visibility = 'hidden';
        }
    }
    const queryTypeRadios = document.querySelectorAll('.queryType');
    const errorMessage = document.getElementById('error-message-queryType');
    let isSelected = false;

    queryTypeRadios.forEach(radio => {
        if (radio.checked) {
            isSelected = true;
        }
    });

    if (!isSelected) {
        errorMessage.style.visibility = 'visible';
        isValidated = false;
    } else {
        errorMessage.style.visibility = 'hidden';
    }



    const consent = document.getElementById('consent');
    const errormsg = document.getElementById('error-checkbox');

    if (consent.checked) {
        errormsg.style.visibility = 'hidden';
    } else {
        isValidated = false;
        errormsg.style.visibility = 'visible';
    }
    onSubmitBtn();
});



const radioButtons = document.querySelectorAll('.queryType');

radioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
        document.querySelectorAll('.single-radio').forEach(function (wrapper) {
            wrapper.style.backgroundColor = '';
        });


        if (this.checked) {
            console.log(this.parentElement)
            this.parentElement.style.backgroundColor = 'lightblue';
        }
    });
});




function onSubmitBtn() {
    let popUp = document.getElementById("snackbar");
    if (isValidated) {
        popUp.className = "show";
        setTimeout(() => { window.location.reload() }, 2000);

    }
    setTimeout(function () { popUp.className = popUp.className.replace("show", ""); }, 1500);

}