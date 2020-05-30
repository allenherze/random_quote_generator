// Declaring variables

const quoteBtn = document.querySelector('.btn-primary');
const showcase = document.querySelector('#showcase');
const toggleBtn = document.querySelector('.btn-toggle');
const quoteView = document.querySelector('#quote');
const authorView = document.querySelector('#author');

const quotes = [
  { quote: 'Be yourself; everyone else is already taken', author: 'Oscar Wilde' },
  { quote: 'So Many Books, So Little Time', author: 'Frank Zappa' },
  { quote: 'A room without books is like a body without soul', author: 'Marcus Tullius Cicero' },
  { quote: 'You only live once, but if you do it right, once is enough', author: 'Mae West' },
];

const tweetBtn = document.querySelector('.btn-twitter');
const fbBtn = document.querySelector('.btn-facebook');

// Click Events

toggleBtn.addEventListener('click', darkMode);
quoteBtn.addEventListener('click', randomQuote);
tweetBtn.addEventListener('click', twitterShare);
fbBtn.addEventListener('click', facebookShare);

// Functions

function darkMode() {
  showcase.classList.toggle('dark-mode');
  toggleBtn.classList.toggle('light-toggle');
  quoteBtn.classList.toggle('btn-light');

  if (toggleBtn.innerHTML === '<i class="far fa-lightbulb fa-3x"></i>') {
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb fa-3x"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="far fa-lightbulb fa-3x"></i>';
  }
}

function randomQuote() {
  let i = Math.floor(Math.random() * quotes.length);

  quoteView.innerHTML = quotes[i].quote;
  authorView.innerHTML = quotes[i].author;
}

function twitterShare() {
  window.open(`https://twitter.com/intent/tweet?text= ${quoteView.textContent} - ${authorView.textContent}`);
}

function facebookShare() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL);
}
