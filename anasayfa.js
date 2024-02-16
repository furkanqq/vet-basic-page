document.addEventListener('DOMContentLoaded', function() {
  const bannerContent1 = document.querySelector('.banner-content');
  const bannerContent2 = document.querySelector('.banner-content-second');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let currentContent = 1;
  updateIndicator();

  prevButton.addEventListener('click', function() {
    if (currentContent === 2) {
      toggleContent();
      currentContent = 1;
      updateIndicator();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentContent === 1) {
      toggleContent();
      currentContent = 2;
      updateIndicator();
    }
  });

  function toggleContent() {
    bannerContent1.style.display = (currentContent === 1) ? 'none' : 'flex';
    bannerContent2.style.display = (currentContent === 2) ? 'none' : 'flex';
    prevButton.style.opacity = currentContent === 1 ? "1" : "0.3";
    nextButton.style.opacity = currentContent === 2 ? "1" : "0.3";
  }

  function updateIndicator() {
    document.querySelector('.indicator span').textContent = currentContent;
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const bannerContent1 = document.querySelector(".banner-content");
//   const bannerContent2 = document.querySelector(".banner-content2");
//   const prevButton = document.getElementById("prev-button");
//   const nextButton = document.getElementById("next-button");

//   let currentContent = 1;
//   updateIndicator();

//   prevButton.addEventListener("click", function () {
//     if (currentContent === 2) {
//       toggleContent();
//       currentContent = 1;
//       updateIndicator();
//     }
//   });

//   nextButton.addEventListener("click", function () {
//     if (currentContent === 1) {
//       toggleContent();
//       currentContent = 2;
//       updateIndicator();
//     }
//   });

//   function toggleContent() {
//     bannerContent1.style.transform =
//       currentContent === 1 ? "translateX(-110%)" : "translateX(0%)";
//     bannerContent2.style.transform =
//       currentContent === 2 ? "translateX(10%)" : "translateX(-100%)";
//     prevButton.style.opacity = currentContent === 1 ? "1" : "0.3";
//     nextButton.style.opacity = currentContent === 2 ? "1" : "0.3";
//   }

//   function updateIndicator() {
//     document.querySelector(".indicator span").textContent = currentContent;
//   }
// });

