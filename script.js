document.getElementById("menu-button").addEventListener("click", function () {
  var nav = document.querySelector("nav ul");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

var testimonials = Array.from(document.querySelectorAll(".testimonial-item"));
var currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(function (testimonial, i) {
    if (i === index) {
      testimonial.style.display = "block";
    } else {
      testimonial.style.display = "none";
    }
  });
}

showTestimonial(currentIndex);

setInterval(function () {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 3000);

document.querySelectorAll("a.smooth-scroll").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

document.querySelectorAll(".scroll-animate").forEach(function (element) {
  observer.observe(element);
});

var backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
});

var modal = document.getElementById("modal");
var btn = document.querySelector(".cta-button");
var span = document.querySelector(".close-button");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
