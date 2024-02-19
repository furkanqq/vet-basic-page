document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentContent = 1;
  const totalContents = 4;
  let translateValue = 0;

  for (let i = 1; i <= totalContents; i++) {
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
