const burgerButton = document.getElementById("burger-button");
const popupMenu = document.getElementById("popup-menu");

const modalWrappers = document.querySelectorAll(".modal-wrapper");
const modalCloseButtons = document.querySelectorAll(".modal__close-button");

const locationBlock = document.getElementById("location");
const locationSelect = document.getElementById("location-select");
const locationField = document.getElementById("location-select-value");
const locationOptions = document.querySelectorAll(".location-select__list");


const navBlock = document.getElementById("nav");
const navSelect = document.getElementById("nav-select");
const navOptions = document.querySelectorAll(".nav-select__list");

navBlock.addEventListener("mouseover", () => {
    navSelect.classList.add("active");
});
navSelect.addEventListener("mouseover", () => {
    navSelect.classList.add("active");
});
navBlock.addEventListener("mouseout", () => {
    navSelect.classList.remove("active");
});
navSelect.addEventListener("mouseout", () => {
    navSelect.classList.remove("active");
});
navOptions.forEach(el => {
   el.addEventListener("click", (e) => {
        navField.innerHTML = e.currentTarget.innerHTML;
        navSelect.classList.remove("active");
   });
});

burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    if (burgerButton.classList.contains("active")) {
        popupMenu.classList.add("active");
        document.body.classList.add("noscroll");
    } else {
        popupMenu.classList.remove("active");
        document.body.classList.remove("noscroll");
    }
});

modalWrappers.forEach(el =>{
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-wrapper")){
            e.currentTarget.classList.remove("active");
            document.body.classList.remove("noscroll");
        }
    });
});

modalCloseButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove("active");
        document.body.classList.remove("noscroll");
    });
});


// document.getElementById("basket-button").addEventListener("click", () => {
//     document.getElementById("modal-register").classList.add("active");
// });

// locationBlock.addEventListener("click", () => {
//     locationSelect.classList.toggle("active");
// });
locationBlock.addEventListener("mouseover", () => {
    locationSelect.classList.add("active");
});
locationSelect.addEventListener("mouseover", () => {
    locationSelect.classList.add("active");
});
locationBlock.addEventListener("mouseout", () => {
    locationSelect.classList.remove("active");
});
locationSelect.addEventListener("mouseout", () => {
    locationSelect.classList.remove("active");
});
locationOptions.forEach(el => {
   el.addEventListener("click", (e) => {
        locationField.innerHTML = e.currentTarget.innerHTML;
        locationSelect.classList.remove("active");
   });
});

function setActionModal() {
    document.querySelector(".container-info__user").addEventListener("click", () => {
        document.getElementById("modal-login").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelector(".modal__link.login").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-login").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelector(".modal__link.register").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-register").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelector(".modal__link.remind").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-remind").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelectorAll(".reset-btn").forEach(el => {
        el.addEventListener("click", () => {
            document.querySelector(".modal-wrapper.active").classList.remove("active");
            document.body.classList.remove("noscroll");
        });
    });
}

setActionModal();

document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7 (___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});
//basket

function setBascketCardAction() {
    document.querySelectorAll(".dark .counter__inc.plus").forEach(el => {
        el.addEventListener("click", (e) => {
            let multy = e.currentTarget.previousElementSibling.innerHTML;
            e.currentTarget.previousElementSibling.innerHTML = +multy+1;
        });
    });
    document.querySelectorAll(".dark .counter__inc.minus").forEach(el => {
        el.addEventListener("click", (e) => {
            let multy = e.currentTarget.nextElementSibling.innerHTML;
            if (+multy < 2){
                let block = e.currentTarget.parentElement.parentElement.parentElement;
                if (block.parentElement.classList.contains("basket__card")) {
                    block.parentElement.remove();
                    return;
                }
                if (e.currentTarget.parentElement.parentElement.parentElement.classList.contains("basket__card")) {
                    block.remove();
                }
            } else {
                e.currentTarget.nextElementSibling.innerHTML = +multy-1;
            }
        });
    });
}
setBascketCardAction()