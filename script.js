// YES button
document.getElementById('yes').onclick = () => {
    alert("Yayyyy! 😍💖 My heart is exploding right now!\nYou're officially my Valentine forever, my love 💘\nI love you more than anything in this world ❤️");
  };
  
  // NO button runs away (improved bounds for mobile)
  const noBtn = document.getElementById('no');
  noBtn.onmouseover = noBtn.ontouchstart = () => {  // Add touch for mobile
    const maxX = window.innerWidth - 220;  // smaller buffer for phones
    const maxY = window.innerHeight - 180;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.transform = 'none';
  };
  
  // Floating hearts
  const emojis = ["❤️", "💕", "💖", "😍", "💘", "🥰", "💗", "✨"];
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 6 + 8) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 15000);
  }
  setInterval(createHeart, 800);
  createHeart(); // start right away