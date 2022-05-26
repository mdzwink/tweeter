/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {  

  const $submit = $('#tweet-article');
  
  $($submit).submit(function(event){//<<<<<<<<<<<current work
    let data = $(this).serialize();
    event.preventDefault();
    if (charCount === 140) {
      alert("Form empty: please enter your message before submitting!")
      return;
    }
    if (charCount < 0) {
      alert("You have exceeded the maximum message size!")
      return;
    }
    $.post('/tweets/', data);
  })
  
  const renderTweets = function(tweets) {
    for (let aTweet of tweets) {
      const $tweet = createTweetElement(aTweet);
      $('#tweets-container').append($tweet);
    }  
  }
  const createTweetElement = function($tweet) {
    const twtUsr = $tweet.user;
    const created_at = $tweet['created_at'];
    let timeStamp = timeago.format(created_at);
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
  
  const loadtweets = function() {
    $.getJSON('http://localhost:8080/tweets', function(jsontweets) {
      renderTweets(jsontweets);
    })
  }
  loadtweets();
  
})