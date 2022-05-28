/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function() {
  
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const $submit = $('#tweet-article');
  $($submit).submit(function(event) {
    $('#error1').hide('fast');
    $('#error2').hide('fast');
    let data = $(this).serializeArray()[0].value;
    let userInput = escape(data);
    event.preventDefault();
    if (charCount === 140) {
      $('#error1').show('slow');
      setTimeout(() => {
        $('#error1').hide('slow');
      }, 3000);
      return;
    }


    if (charCount < 0) {
      $('#error2').show('slow');
      setTimeout(() => {
        $('#error2').hide('slow');
      }, 3000);
      return;
    }


    loadtweets(function(obj) {
      obj[0].content.text = userInput;
      let tweet = [obj[0]];
      renderTweets(tweet);
    });
  });

  //gets mock tweets from tweet generator and passes the formed objects to cb fn
  const loadtweets = function(cb) {
    $.getJSON('http://localhost:8080/tweets', function(jsontweets) {
      cb(jsontweets);
    });
  };
  //loops through tweet array of objects. sends each through createTweetElement then appends resulting 'tweet' asynchronously to 'main' element
  const renderTweets = function(tweets) {
    for (let aTweet of tweets) {
      const $tweet = createTweetElement(aTweet);
      $('#tweets-container').append($tweet);
    }
  };
  loadtweets(renderTweets);
  //takes tweet object from renderTweet, inserts values into html string, then returns html string to renderTweets
  const createTweetElement = function($tweet) {
    const twtUsr = $tweet.user;
    const created_at = $tweet['created_at'];
    let timeStamp = timeago.format(created_at);
    const tweetCompiler = $(`
    <article class="posted-tweet">
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
    </article>`
    );
    
    return tweetCompiler;
  };
 
  
});