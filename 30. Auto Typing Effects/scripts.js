const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Hi There! This is Eimmiit ";
const anotherText =
  "A website Developer";
let idx = 1;
let idx2 = 1;
let speed = 300 / speedEl.value;

writeText();



function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    textEl.innerText = anotherText.slice(0, idx2);
    idx2++;
  }

  

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
