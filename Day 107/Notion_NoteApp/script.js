const getBtn = document.querySelector(".get");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");

const emojiBtn = document.querySelector(".emoji");
const emojiPicker = document.querySelector(".emojiPicker");

function notionSwitch() {
    getBtn.addEventListener("click", () => {
  // Hide section1
  section1.classList.add("hidden");

  // Show section2 after section1 fades out
  setTimeout(() => {
    section2.classList.add("active");
  }, 600); // match with CSS transition duration of section1 opacity (0.6s)
});
}

notionSwitch();

emojiBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  emojiPicker.classList.toggle("active");
});

// Select emoji
emojiPicker.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    emojiBtn.textContent = e.target.textContent;
    emojiPicker.classList.remove("active");
  }
});

// Click outside to close picker
document.addEventListener("click", (e) => {
  if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) {
    emojiPicker.classList.remove("active");
  }
});