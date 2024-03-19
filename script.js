const textarea = document.getElementById("textBox");
const clearBtn = document.getElementById("clearText");
const wordCountSpan = document.getElementById("wordCount");

let setHeight;
let wordCount = 0;

const storedText = localStorage.getItem('textareaContent');

textarea.addEventListener("keyup", function() {
  adjustTextareaHeight(textarea);
  updateWordCount(textarea.value);
});

function adjustTextareaHeight(textarea) {
  setHeight = textarea.scrollHeight;
  textarea.style.height = `${setHeight}px`;
}

function updateWordCount(text) {
  const words = text.trim().split(/\s+/);
  wordCount = words.length;
  wordCountSpan.textContent = `Word count: ${wordCount}`;
}

if (storedText) {
  textarea.value = storedText;
  adjustTextareaHeight(textarea);
  updateWordCount(storedText);
}

textarea.addEventListener("input", function() {
  localStorage.setItem('textareaContent', textarea.value);
});

clearBtn.addEventListener('click', function() {
  textarea.value = '';
  textarea.style.height = '200px';
  localStorage.removeItem('textareaContent');
  wordCount = 0;
  wordCountSpan.textContent = `Word count: ${wordCount}`;
});


