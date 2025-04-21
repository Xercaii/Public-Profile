console.log("Profile loaded!");

// Add logic to toggle mode icons
function updateModeIcons() {
    const isNightMode = document.body.classList.contains('night-mode');
    const nightIcon = document.getElementById('nightIcon');
    const dayIcon = document.getElementById('dayIcon');
    const dayModeRadio = document.getElementById('dayMode');
    const nightModeRadio = document.getElementById('nightMode');
  
    if (isNightMode) {
      nightIcon.style.display = 'none'; // Hide the night icon
      dayIcon.style.display = 'block'; // Show the day icon
      nightModeRadio.checked = true; // Sync the radio button to night mode
      dayModeRadio.checked = false;
    } else {
      nightIcon.style.display = 'block'; // Show the night icon
      dayIcon.style.display = 'none'; // Hide the day icon
      dayModeRadio.checked = true; // Sync the radio button to day mode
      nightModeRadio.checked = false;
    }
  }
  
  // Override setDayMode to update icons and radio buttons
  function setDayMode() {
    document.body.classList.remove('night-mode'); // Remove night mode class
    videoSource.src = "extra/videos/backgroundvideo.mp4"; // Set day mode video
    video.load(); // Reload video
    updateModeIcons(); // Update mode icons and radio buttons
  }
  
  // Override setNightMode to update icons and radio buttons
  function setNightMode() {
    document.body.classList.add('night-mode'); // Add night mode class
    videoSource.src = "extra/videos/nightmode.mp4"; // Set night mode video
    video.load(); // Reload video
    updateModeIcons(); // Update mode icons and radio buttons
  }
  
  // Initialize icons and radio buttons on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateModeIcons(); // Ensure icons and settings match the current mode
  });