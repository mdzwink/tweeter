/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1653356348716
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1653442748716
  }
]

// const timeStamp = function(created_at) {
//   const currentTime = new Date(0);
//   console.log(currentTime)
//   const 
//   const formattedTime = 
// }


$(document).ready(function() {
  console.log('ready from client.js, tweet gen');

  const $submit = $('tweet-button-div');

  $submit.on('submit', function(){
    console.log('submission attempted')

  })





  const renderTweets = function(tweets) {
    for (let aTweet of tweets) {
      console.log('found a tweet')
      const $tweet = createTweetElement(aTweet)
      $('#tweets-container').append($tweet);
    }  
  }
  const createTweetElement = function($tweet) {
  const twtUsr = $tweet.user;
  const created_at = $tweet['created_at'];
  let timeStamp = created_at
  const tweetCompiler = $(`
      <article>
        <header>
          <div class="user-name">
          <div><img src="${twtUsr.avatars}"></div>
          <div>${twtUsr.name}</div>
          </div>
          <div>${twtUsr.handle}</div>
        </header>
        <p>${$tweet.content.text}</p>
        <footer>
        <div>${timeStamp}</div>
        <div class="reactions">
          <div class="flag"><i class="fas fa-flag"></i></div>
          <div class="retweet" ><i class="fa fa-retweet" aria-hidden="true"></i></div>
          <div class="like"><i class="fa-solid fa-heart"></i></div>
        </div>
      </footer>
    </article>`);
  
  return tweetCompiler;
  } 

renderTweets(data);


})