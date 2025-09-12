if (document.querySelector('[data-bs-toggle="tooltip"]')) {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}

if (document.querySelector(".carousel-1")) {
  $(document).ready(function () {
    $(".carousel-1").owlCarousel({
      items: 5,
      loop: true,
      nav: true,
      navText: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>`,
      ],
    });
  });
}

if (document.querySelector(".carousel-2")) {
  $(document).ready(function () {
    $(".carousel-2").owlCarousel({
      items: 6,
      loop: true,
      mouseDrag: true,
      autoplay: true,
    });
  });
}

window.addEventListener("scroll", () => {
  var upArrow = document.getElementById("upArrow");

  if (document.documentElement.scrollTop > 250) upArrow.style.opacity = 1;
  else upArrow.style.opacity = 0;

  var nav = document.querySelector(".nav-js");
  if (document.documentElement.scrollTop > 650) {
    nav.classList.add("fixed-top", "shadow-bottom");
  } else {
    nav.classList.remove("fixed-top", "shadow-bottom");
  }
});

if (document.querySelector(".contactForm")) {
  var contactForm = document.querySelector(".contactForm");
  contactForm.addEventListener("input", (e) => {
    e.preventDefault();
    if (e.target.id == "userName") {
      nameValidation(e.target);
    } else if (e.target.id == "userEmail") {
      emailValidation(e.target);
    } else if (e.target.id == "userSubject") {
      subjectValidation(e.target);
    }
  });
  contactForm.addEventListener("submit", (e) => {
    var count = 0;
    for (var i = 0; i < 3; i++) {
      if (!e.srcElement.elements[i].value.trim()) {
        handleError(e.srcElement.elements[i], "This field is required");
        count++;
      }
    }
    if (!count) {
      e.target.submit();
    }
  });
}

function nameValidation(element) {
  var inputValue = element.value.trim();
  inputValue.length < 3
    ? handleError(element, "Please enter at least 3 characters")
    : handleError(element);
}

var emailValidation = (input) => {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(input.value)) handleError(input);
  else handleError(input, "Please enter a valid email");
};

function subjectValidation(element) {
  var inputValue = element.value.trim();
  inputValue.length < 3
    ? handleError(element, "Please enter at least 3 characters")
    : handleError(element);
}

function handleError(input, msg = "") {
  input.nextElementSibling.innerText = msg;
}
