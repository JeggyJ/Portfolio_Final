$(document).ready(function () {
  $(".portfolio-link > a").on("click", function (e) {
    e.preventDefault();
    $(".portfolio-dropdown").slideToggle(300);
  });
  $('.Contact_Click').click(function(){
    $(this).toggleClass('open_contacts');
    if($(this).hasClass('open_contacts')){
      $('.Contact_Navbar').css({'height': '100vh', 'opacity': '1', 'display': 'flex', 'z-index' : '1'});
      $('.close-btn').css({'display':inline-block});
    }
    else {
      $('.Contact_Navbar').css({'height': '0vh', 'opacity': '0', 'display': 'none', 'z-index' : '-1'});
      $('.close-btn').css({'display':none});
    }
  })
  $('.Contact_Click_Footer').click(function(){
    $(this).toggleClass('open_contacts_Footer');
    if($(this).hasClass('open_contacts_Footer')){
      $('.Contact_Navbar_Footer').css({'height': '100vh', 'opacity': '1', 'display': 'flex'});
    }
    else {
      $('.Contact_Navbar_Footer').css({'height': '0vh', 'opacity': '0', 'display': 'none'});
    }
  })

});

$(window).on('load', function () {
  setTimeout(function () {
    $('.loader').css('opacity', '1');
  }, 100);
  setTimeout(function () {
    $('.loader').fadeOut('fast');
    $('.page_fade').css('opacity', '1');
  initiateScrambleTextAnimation();});   // If I want to see the loader, add time after 'initiateScrambleTextAnimation();}, 2500);' e.g. the 2500
  const sun = $(".sun");

  function sunRiseSetAnimation() {
    sun.css({ "animation": "sun-rise-set 3s linear infinite" });
  }

  sunRiseSetAnimation();
});

const cursor = document.querySelector('.custom-cursor');

function updateCursor(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
}

function cursorClick() {
  cursor.classList.add('click');
  setTimeout(() => {
    cursor.classList.remove('click');
  }, 300);
}

window.addEventListener('mousemove', updateCursor);
window.addEventListener('mousedown', cursorClick);

// Create a new function that wraps the scrambleText function and initializes the observer
const observeScramble = (element, text, duration, delay) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrambleText(element, text, duration, delay);
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.1
    });
  
    observer.observe(element);
  };
  
  // The scrambleText function remains the same as before
  const scrambleText = (element, text, duration, delay) => {
    const scramblePool = "!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    let counter = 0;
  
    const randomChar = () => {
      return scramblePool[Math.floor(Math.random() * scramblePool.length)];
    };
  
    const update = () => {
      output = "";
      let i = 0;
      while (i < text.length) {
        const currentChar = text[i];
        if (counter > i) {
          output += currentChar;
        } else if (counter === i) {
          output += randomChar();
        } else {
          output += " ";
        }
        i++;
      }
      element.innerText = output;
      if (counter < text.length) {
        counter++;
        setTimeout(update, delay);
      }
    };
  
    setTimeout(() => {
      update();
    }, duration);
  };
  
  // Use the observeScramble function instead of the scrambleText function
  const initiateScrambleTextAnimation = () => {
  const targetText = "Let's transform your ideas into something extraordinary. Contact me.";
  const scrambleElem = document.querySelector(".scramble-text");
  scrambleElem.innerText = "";
  observeScramble(scrambleElem, targetText, 500, 30); // duration: 500ms (0.5s), delay: 30ms
  

  const targetTextAbout = "ABOUT JOEL'S SON";
  const scrambleElemAbout = document.querySelector(".scramble-text-about");
  scrambleElemAbout.innerText = "";
  observeScramble(scrambleElemAbout, targetTextAbout, 500, 30);
  }

document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  fadeInElements.forEach(element => {
      observer.observe(element);
  });
});


