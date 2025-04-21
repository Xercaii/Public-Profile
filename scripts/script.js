console.log("Profile loaded!");

// Add logic to toggle mode icons
function updateModeIcons() {
    const isNightMode = document.body.classList.contains('night-mode');
    const nightIcon = document.getElementById('nightIcon');
    const dayIcon = document.getElementById('dayIcon');
  
    if (isNightMode) {
      nightIcon.style.display = 'none';
      dayIcon.style.display = 'block'; // Show day icon when in night mode
    } else {
      nightIcon.style.display = 'block'; // Show night icon when in day mode
      dayIcon.style.display = 'none';
    }
  }
  
  // Override setDayMode to update icons
  function setDayMode() {
    document.body.classList.remove('night-mode');
    videoSource.src = "extra/videos/backgroundvideo.mp4"; // Set day mode video
    video.load(); // Reload video
    updateModeIcons(); // Update mode icons
  }
  
  // Override setNightMode to update icons
  function setNightMode() {
    document.body.classList.add('night-mode');
    videoSource.src = "extra/videos/nightmode.mp4"; // Set night mode video
    video.load(); // Reload video
    updateModeIcons(); // Update mode icons
  }
  
  // Initialize icons on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateModeIcons();
  });