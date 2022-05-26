//box shadow on mouse over
//buttons highlight on mouse over


// const mouseOverFlag = function(event) {
//   console.log('mouse is over')
//   this.style.color = 'red';
// }
// const mouseLeaveFlag = function(event) {
//   console.log('mouse has left')
//   this.style.color = 'inherit';
// }
// const mouseOverRetweet = function(event) {
//   console.log('mouse is over')
//   this.style.color = 'red';
// }
// const mouseLeaveRetweet = function(event) {
//   console.log('mouse has left')
//   this.style.color = 'inherit';
// }
// const mouseOverLike = function(event) {
//   console.log('mouse is over')
//   this.style.color = 'red';
// }
// const mouseLeaveLike = function(event) {
//   console.log('mouse has left')
//   this.style.color = 'inherit';
// }




const mouseOver = function(event) {
  console.log('mouse is over')
  this.style['box-shadow'] = '1px 1px 9px 1px #c9beb5';
}
const mouseLeave = function(event) {
  console.log('mouse has left')
  this.style['box-shadow'] = 'none';
}


$(document).ready(function() {
  const $postCard = document.querySelector('article');
  $postCard.addEventListener('mouseover', mouseOver)
  $postCard.addEventListener('mouseleave', mouseLeave)
    
})



// const $flag = document.querySelector('flag');
// const $retweet = document.querySelector('retweet');
// const $like = document.querySelector('like');
// $flag.addEventListener('mouseover', mouseOverFlag)
// $flag.addEventListener('mouseleave', mouseLeaveFlag)
// $retweet.addEventListener('mouseover', mouseOverRetweet)
// $retweet.addEventListener('mouseleave', mouseLeaveRetweet)
// $like.addEventListener('mouseover', mouseOverLike)
// $like.addEventListener('mouseleave', mouseLeaveLike)