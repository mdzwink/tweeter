let charCount;

const countChar = function(event) {
  let key = event.data;
  console.log('the key pressed was:', key)
  let inputVal = $(this).val();
  charCount = 140-inputVal.length;//<<<<<<<<< char count
  let $tweetCounter = document.querySelector('output.counter');
  $tweetCounter.innerHTML = charCount;
  console.log(charCount)
  console.log()
  if (charCount >= 0) {
    $tweetCounter.style.color = '#545149'
  }
  if (charCount < 0) {
    $tweetCounter.style.color = 'red'
  }
  
  // console.log(this.querySelector('.counter'));
}

$(document).ready(function() {
  console.log("Document Ready")
  const $tweetInput = document.querySelector('textarea')
  $tweetInput.addEventListener("input", countChar)
  // $($tweetCounter).html(`${counter}`);
});











