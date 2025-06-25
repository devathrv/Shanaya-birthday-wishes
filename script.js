document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bg-music");
  let customPlayer;

  document.querySelectorAll(".slide").forEach(img => {
    img.addEventListener("click", () => {
      const songPath = img.dataset.song;
      if (bgMusic) bgMusic.pause();
      if (customPlayer) customPlayer.pause();
      customPlayer = new Audio(songPath);
      customPlayer.play();
    });
  });

  // Confetti Animation
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let confetti = [];

  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 30 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      tilt: Math.random() * 10 - 5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += 2;
      c.x += Math.sin(c.d);
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 30);
});
    
