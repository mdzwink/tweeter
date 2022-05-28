let charCount = 140;

const countChar = function(event) {
  let inputVal = $(this).val();
  charCount = 140 - inputVal.length;//<<<<<<<<< char count;
  let $tweetCounter = document.querySelector('output.counter');
  $tweetCounter.innerHTML = charCount;
  if (charCount >= 0) {
    $tweetCounter.style.color = '#545149';
  }
  if (charCount < 0) {
    $tweetCounter.style.color = 'red';
  }
};

$(document).ready(function() {
  console.log("Document Ready");
  const $tweetInput = document.querySelector('textarea');
  $tweetInput.addEventListener("input", countChar);
});














