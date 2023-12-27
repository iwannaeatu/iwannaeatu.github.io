// Wrap every letter in a span
var textWrapper = document.querySelector(".bs-txt");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".bs-txt .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: (el, i) => 40 * (i + 1),
  })
  .add({
    targets: ".bs-txt",
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000,
    easing: "t",
  });
var textWrapper = document.querySelector(".bs-txt1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".bs-txt1 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 800,
    delay: (el, i) => 40 * (i + 1),
  })
  .add({
    targets: ".bs-txt1",
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000,
    easing: "t",
  });

var textWrapper = document.querySelector(".bs-txt2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".bs-txt2 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: (el, i) => 40 * (i + 1),
  })
  .add({
    targets: ".bs-txt2",
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000,
    easing: "t",
  });
var textWrapper = document.querySelector(".bs-txt3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".bs-txt3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: (el, i) => 40 * (i + 1),
  })
  .add({
    targets: ".bs-txt3",
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000,
    easing: "t",
  });
