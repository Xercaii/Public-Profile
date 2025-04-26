console.log("Profile loaded!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("Initializing page...");
  
    // Select all required elements
    const nightIcon = document.getElementById('nightIcon');
    const dayIcon = document.getElementById('dayIcon');
    const dayModeRadio = document.getElementById('dayMode');
    const nightModeRadio = document.getElementById('nightMode');
    const videoSource = document.getElementById('videoSource');
    const video = document.getElementById('bg-video');
  
    // Function to update icons and sync settings
    function updateModeIcons() {
      const isNightMode = document.body.classList.contains('night-mode');
  
      if (isNightMode) {
        // Show the day icon (indicating you can switch to day mode)
        nightIcon.style.display = 'none';
        dayIcon.style.display = 'block';
  
        // Sync radio buttons
        nightModeRadio.checked = true;
        dayModeRadio.checked = false;
      } else {
        // Show the night icon (indicating you can switch to night mode)
        nightIcon.style.display = 'block';
        dayIcon.style.display = 'none';
  
        // Sync radio buttons
        dayModeRadio.checked = true;
        nightModeRadio.checked = false;
      }
    }
  
    // Function to switch to Day Mode
    function setDayMode() {
      document.body.classList.remove('night-mode');
      videoSource.src = "extra/videos/backgroundvideo.mp4";
      video.load();
      updateModeIcons();
      console.log("Switched to Day Mode.");
    }
  
    // Function to switch to Night Mode
    function setNightMode() {
      document.body.classList.add('night-mode');
      videoSource.src = "extra/videos/nightmode.mp4";
      video.load();
      updateModeIcons();
      console.log("Switched to Night Mode.");
    }
  
    // Initialize icons on page load
    updateModeIcons();
  
    // Set up event listeners
    nightIcon.addEventListener('click', setNightMode);
    dayIcon.addEventListener('click', setDayMode);
    dayModeRadio.addEventListener('click', setDayMode);
    nightModeRadio.addEventListener('click', setNightMode);
  
    console.log("Event listeners set up.");
  });