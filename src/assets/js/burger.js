(() => {
    const refs = {
      openBurgerBtn: document.querySelector("[data-burger-open]"),
      closeBurgerBtn: document.querySelectorAll("[data-burger-close]"),
      header: document.querySelector(".header-container"),
      burger: document.querySelector("[data-burger]"),
      body: document.querySelector("body"),
    };
  
    var closeBurgerBtnArray = [...refs.closeBurgerBtn];

    refs.openBurgerBtn.addEventListener("click", toggleModal);
    closeBurgerBtnArray.forEach(el => {
      el.addEventListener("click", toggleModal)
    });

    function toggleModal() {
      refs.header.classList.toggle("non-active")
      refs.burger.classList.toggle("is-active");
      refs.body.classList.toggle("no-scroll");
    }
}) ();  