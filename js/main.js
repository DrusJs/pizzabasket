const burgerButton = document.getElementById("burger-button");
const popupMenu = document.getElementById("popup-menu");

const modalWrappers = document.querySelectorAll(".modal-wrapper");
const modalCloseButtons = document.querySelectorAll(".modal__close-button");

const locationBlock = document.getElementById("location");
const locationSelect = document.getElementById("location-select");
const locationField = document.getElementById("location-select-value");
const locationOptions = document.querySelectorAll(".location-select__list");

burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    if (burgerButton.classList.contains("active")) {
        popupMenu.classList.add("active");
    } else {
        popupMenu.classList.remove("active");
    }
});

modalWrappers.forEach(el =>{
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-wrapper")){
            e.currentTarget.classList.remove("active");
        }
    });
});

modalCloseButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove("active");
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
    });
    document.querySelector(".modal__link.login").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-login").classList.add("active");
    });
    document.querySelector(".modal__link.register").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-register").classList.add("active");
    });
    document.querySelector(".modal__link.remind").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-remind").classList.add("active");
    });
    document.querySelectorAll(".reset-btn").forEach(el => {
        el.addEventListener("click", () => {
            document.querySelector(".modal-wrapper.active").classList.remove("active");
        });
    });
}

setActionModal();
//basket
