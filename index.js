document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentContent = 1;
  const totalContents = 3;
  let translateValue = 0;

  for (let i = 1; i <= totalContents; i++) {
    console.log("2");
    document.querySelector(
      `.banner-content-${i}`
    ).style.transform = `translateX(${translateValue}%)`;

    translateValue += 100;
  }

  document.querySelector(
    ".indicator .second"
  ).textContent = `/${totalContents}`;

  updateIndicator();

  prevButton.addEventListener("click", function () {
    if (currentContent > 1) {
      currentContent--;
      toggleContent();
      updateIndicator();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentContent < totalContents) {
      currentContent++;
      toggleContent();
      updateIndicator();
    }
  });

  function toggleContent() {
    let translateValue = (currentContent - 1) * -100;

    for (let i = 1; i <= totalContents; i++) {
      document.querySelector(
        `.banner-content-${i}`
      ).style.transform = `translateX(${translateValue}%)`;

      translateValue += 100;
    }
    prevButton.style.opacity = currentContent > 1 ? "0.6" : "0.2";
    nextButton.style.opacity = currentContent < totalContents ? "0.6" : "0.2";
  }

  function updateIndicator() {
    document.querySelector(".indicator .first").textContent = currentContent;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".mobile-menu button");
  var productButton = document.querySelector(
    ".mobile-nav .nav-container .first .mobile-product"
  );
  var backButton = document.querySelector(
    ".mobile-side-nav .back-and-next .back"
  );
  var mobileNav = document.querySelector(".mobile-menu .mobile-nav");
  var open = document.querySelector(`button .open`);
  var close = document.querySelector(`button .close`);
  var firstNav = document.querySelector(
    `.mobile-menu .mobile-nav .nav-container ul`
  );
  var secondNav = document.querySelector(`.nav-container .mobile-side-nav`);

  var isMenuOpen = false;
  var isProductOpen = false;
  var isFirstNavOpen = false;

  menuButton.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      mobileNav.style.right = "0%";
      open.style.display = "none";
      close.style.display = "block";
    } else {
      mobileNav.style.right = "-100%";
      open.style.display = "block";
      close.style.display = "none";
    }
  });

  backButton.addEventListener("click", function () {
    isFirstNavOpen = !isFirstNavOpen;

    if (isFirstNavOpen) {
      firstNav.style.display = "flex";
      secondNav.style.display = "none";
    } else {
      secondNav.style.display = "none";
      firstNav.style.display = "flex";
    }
  });

  productButton.addEventListener("click", function () {
    isProductOpen = !isProductOpen;

    if (isProductOpen) {
      firstNav.style.display = "none";
      secondNav.style.display = "block";
    } else {
      secondNav.style.display = "block";
      firstNav.style.display = "none";
    }
  });
});

document.querySelectorAll(".dropdown-btn").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    const dropdownContent = this.nextElementSibling;

    if (
      dropdownContent.style.height !== "0px" &&
      dropdownContent.style.height !== ""
    ) {
      dropdownContent.style.height = "0px";
      dropdownContent.style.marginBottom = "0px";
    } else {
      dropdownContent.style.height = dropdownContent.scrollHeight + "px";
      dropdownContent.style.marginBottom = "8px";
      count++;
    }
  });
});

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function dropdownMenu() {
  document.getElementById("menuDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};



