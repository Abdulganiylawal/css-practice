var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButtons = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        //.style.display = 'block';
        //backdrop.style.display = 'block';
        //modal.className = 'open'; // This will actually overwrite the list
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener('click', function () {
    //mobileNav.style.display = 'none';
    closeModal();
    mobileNav.classList.remove('open');
});
if (modalNoButtons) {
    modalNoButtons.addEventListener("click", closeModal);
};



function closeModal() {
    // backdrop.style.display = 'none'
    // modal.style.display = 'none'
    if (modal) {
        modal.classList.remove("open");
    };
    backdrop.classList.remove("open");
};

toggleButton.addEventListener('click', function () {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = "block";
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
