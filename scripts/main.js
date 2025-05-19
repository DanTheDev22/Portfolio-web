particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#00ff88"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.25,
      random: false
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00ff88",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});


  document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const action = form.action;

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Network error. Please check your connection.");
    }
  });



  const modal = document.getElementById('videoModal');
  const video = document.getElementById('previewVideo');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.btn-preview').forEach(button => {
    button.addEventListener('click', () => {
      const videoSrc = button.getAttribute('data-video');
      video.src = videoSrc;
      modal.style.display = 'block';
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  };

  window.onclick = e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    }
  };
