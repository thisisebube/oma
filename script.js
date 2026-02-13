// YES button (unchanged, but keeping the safer version)
document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yes');
  if (yesBtn) {
    yesBtn.onclick = () => {
      alert("Yayyyy! 😍💖 My heart is exploding right now!\nYou're officially my Valentine forever, my love 💘\nI love you more than anything in this world ❤️");
      // Optional fun: change background color after yes
      document.body.style.background = "linear-gradient(to bottom, #ff4081, #ffeb3b)";
    };
  }

  // NO button: vanishes on click/tap
  const noBtn = document.getElementById('no');
  if (noBtn) {
    noBtn.onclick = () => {
      noBtn.style.opacity = '0';
      noBtn.style.pointerEvents = 'none';  // can't click again
      noBtn.style.transition = 'opacity 0.6s ease';  // smooth fade

      // Optional: tiny funny message after it vanishes
      setTimeout(() => {
        alert("Oops... the NO button disappeared! 😅\nGuess your heart already knows the answer is YES 💕");
      }, 700);  // slight delay so fade is visible first
    };
  }

  // Floating hearts (unchanged)
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
  createHeart(); // start immediately
});
