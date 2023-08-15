window.onload = () => {
  const quote_text = document.querySelector("#quote_text");
  let audio = new Audio();
  audio.src = "https://www.dropbox.com/s/8xzjbuokx9tozq6/Thunder.mp3?dl=1";

  let index = 0;
  let textPosition = 0;
  let flag = true;
  let quoteArray = [];

  function quotesCall() {
    let quotes = {
      "- Albert Einstein":
        "“We cannot solve problems with the kind of thinking we employed when we came up with them.”",

      "- Mahatma Gandhi":
        "“Learn as if you will live forever, live like you will die tomorrow.”",

      "- Mark Twain":
        "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",

      "- Eleanor Roosevelt":
        "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",

      "- Norman Vincent Peale":
        "“When you change your thoughts, remember to also change your world.”",

      "- Jason Chukwuebuka(me)":
        '"Have a good mind but think like a criminal, it will help you in times of adversity"',

      "- Winston S. Churchill":
        '"Success is not final; failure is not fatal: It is the courage to continue that counts."',

      "-Jim Rohn": "“Either you run the day or the day runs you.” ",
      "-Paulo Coelho":
        "“When we strive to become better than we are, everything around us becomes better too.”",

      "-Thomas Edison":
        '"Opportunity is missed by most people because it is dressed in overalls and looks like work.”',

      "-Steve Jobs":
        "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you havent found it yet, keep looking. Dont settle. As with all matters of the heart, youll know when you find it.” ",

      "-Arlan Hamilton":
        "We don’t just sit around and wait for other people. We just make, and we do.”",

      "-Jason chukwuebuka (Me)":
        '"Try and help yourself to a certain degree before seeking help. no one is ever going to help you from 0%.Even God cant help everyone"',

      "-Alexander Graham Bell":
        "“Concentrate all your thoughts upon the work in hand. The suns rays do not burn until brought to a focus.“",

      "-Madeleine Albright":
        "“It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.”",

      "-Ayn Rand":
        "“I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.” ",
    }; // End of object

    let quoteKeys = Object.keys(quotes);

    let randomQuoteKeys =
      quoteKeys[Math.floor(Math.random() * quoteKeys.length)];

    let newRandomQuote = {
      quotes: quotes[randomQuoteKeys],
      authors: randomQuoteKeys,
    };

    quoteArray[index] = newRandomQuote;
  } //End of quotesCall();

  function typeQuote() {
    if (flag) {
      quotesCall();
      flag = false;
    }

    quote_text.innerHTML = ` ${quoteArray[index].quotes.substring(
      0,
      textPosition
    )}<span><i class="fa-solid fa-pen fa-shake"></i></span>
      <br> <br> <br> 
        ${quoteArray[0].authors}`;

    if (textPosition++ !== quoteArray[0].quotes.length) {
      setTimeout(typeQuote, 100);
    } else {
      flag = true;
      setTimeout(typeQuote, 2000);
      quoteArray = [];
      textPosition = 0;
    }
  } // End of typeQuote();

  typeQuote();

  quote_text.addEventListener("click", () => {
    audio.play();
  });
}; // End of general()✅✅
