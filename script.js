// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("menu-active");
  }
  
  // Typewriter effect
  const texts = ["STUDENT", "DEVELOPER", "TECH ENTHUSIAST"];
  const speed = 100;
  const textElement = document.querySelector(".typewriter-text");
  let textIndex = 0;
  let charIndex = 0;
  
  function typeWriter() {
    if (charIndex < texts[textIndex].length) {
      textElement.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, 1000);
    }
  }
  
  function eraseText() {
    if (textElement.innerHTML.length > 0) {
      textElement.innerHTML = textElement.innerHTML.slice(0, -1);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(typeWriter, 500);
    }
  }
  
  window.onload = typeWriter;
  