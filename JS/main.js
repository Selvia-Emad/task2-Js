var quotes = [
    {
      owner: "--Oscar Wilde",
      quote: "Be yourself; everyone else is already taken."
    },
    {
      owner: "--Marilyn Monroe",
      quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
      owner: "--Frank Zappa",
      quote: "So many books, so little time."
    },
    {
      owner: "--Albert Einstein",
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
      owner: "--Marcus Tullius Cicero",
      quote: "A room without books is like a body without a soul."
    },
    {
      owner: "--Bernard M. Baruch",
      quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    {
      owner: "--William W. Purkey",
      quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth."
    },
    {
      owner: "--Dr. Seuss",
      quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {
      owner: "--Mae West",
      quote: "You only live once, but if you do it right, once is enough."
    },
    {
      owner: "--Mahatma Gandhi",
      quote: "Be the change that you wish to see in the world."
    },
    {
      owner: "--Robert Frost",
      quote: "In three words I can sum up everything I've learned about life: it goes on."
    },
    {
      owner: "--J.K. Rowling",
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
    },
    {
      owner: "--Albert Camus",
      quote: "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend."
    },
    {
      owner: "--Mark Twain",
      quote: "If you tell the truth, you don't have to remember anything."
    },
    {
      owner: "--Maya Angelou",
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
      owner: "--C.S. Lewis",
      quote: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'"
    },
    {
      owner: "--Oscar Wilde",
      quote: "To live is the rarest thing in the world. Most people exist, that is all."
    },
    {
      owner: "--Elbert Hubbard",
      quote: "A friend is someone who knows all about you and still loves you."
    },
    {
      owner: "--Oscar Wilde",
      quote: "Always forgive your enemies; nothing annoys them so much."
    },
    {
      owner: "--Martin Luther King Jr.",
      quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."
    },
    {
      owner: "--Mahatma Gandhi",
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
    },
    {
      owner: "--Stephen Chbosky",
      quote: "We accept the love we think we deserve."
    },
    {
      owner: "--Friedrich Nietzsche",
      quote: "Without music, life would be a mistake."
    },
    {
      owner: "--Oscar Wilde",
      quote: "I am so clever that sometimes I don't understand a single word of what I am saying."
    },
    {
      owner: "--Ralph Waldo Emerson",
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    },
    {
      owner: "--Steve Jobs",
      quote: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. ... Because the people who are crazy enough to think they can change the world, are the ones who do."
    },
    {
      owner: "--Narcotics Anonymous",
      quote: "Insanity is doing the same thing, over and over again, but expecting different results."
    },
    {
      owner: "--Marilyn Monroe",
      quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right..."
    },
    {
      owner: "--Andre Gide",
      quote: "It is better to be hated for what you are than to be loved for what you are not."
    },
    {
      owner: "--H. Jackson Brown Jr.",
      quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do..."
    }
  ];
var newNum;
function generateQoute() {
    var randomeNum=Math.floor(Math.random()*quotes.length);
    
    console.log(randomeNum);
    if (newNum!=randomeNum) {
      generater(randomeNum);
      console.log(newNum);
      newNum=randomeNum;
      console.log(newNum);

    }else{
      generateQoute();
    }
    
}


function generater(i) {
      var q=quotes[i].quote;
      var o=quotes[i].owner;
      console.log(q);
      console.log(o);
      document.getElementById("quote").innerHTML=q;
      document.getElementById("owner").innerHTML =o;

      // return  q ,o
      
}