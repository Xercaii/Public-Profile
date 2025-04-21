console.log("Profile loaded!");

// References to icons
const nightIcon = document.getElementById('nightIcon');
const dayIcon = document.getElementById('dayIcon');
const video = document.getElementById('bg-video');
const videoSource = document.getElementById('videoSource');

// Function to update the visibility of the icons
function updateModeIcons() {
  const isNightMode = document.body.classList.contains('night-mode');

  if (isNightMode) {
    nightIcon.style.display = 'none'; // Hide the night icon
    dayIcon.style.display = 'block'; // Show the day icon
  } else {
    nightIcon.style.display = 'block'; // Show the night icon
    dayIcon.style.display = 'none'; // Hide the day icon
  }
}

// Function to set Day Mode
function setDayMode() {
  console.log("Switching to Day Mode...");
  document.body.classList.remove('night-mode');
  videoSource.src = "extra/videos/backgroundvideo.mp4"; // Set day mode video
  video.load(); // Reload video
  updateModeIcons(); // Update icons
  console.log("Day mode activated.");
}

// Function to set Night Mode
function setNightMode() {
  console.log("Switching to Night Mode...");
  document.body.classList.add('night-mode');
  videoSource.src = "extra/videos/nightmode.mp4"; // Set night mode video
  video.load(); // Reload video
  updateModeIcons(); // Update icons
  console.log("Night mode activated.");
}

// Initialize the mode icons on page load
document.addEventListener('DOMContentLoaded', () => {
  updateModeIcons(); // Set the correct icon visibility based on the current mode
  console.log("Icons initialized.");
});

// Toggle Sliding Menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
}

// Toggle Audio
function toggleAudio() {
  const audio = document.getElementById('bgAudio');
  const audioToggle = document.getElementById('audioToggle');
  if (audioToggle.checked) {
    audio.muted = false;
    audio.play();
    console.log("Audio enabled.");
  } else {
    audio.muted = true;
    audio.pause();
    console.log("Audio disabled.");
  }
}

// Toggle Video
function toggleVideo() {
  const videoToggle = document.getElementById('videoToggle');
  if (videoToggle.checked) {
    video.style.display = 'block';
    console.log("Video enabled.");
  } else {
    video.style.display = 'none';
    console.log("Video disabled.");
  }
}

// Play/Pause Audio and Video
let isPlaying = true; // Track play/pause state
const playPauseIcon = document.getElementById('playPauseIcon');

function togglePlayPause() {
  const audio = document.getElementById('bgAudio');
  if (isPlaying) {
    audio.pause();
    video.pause();
    playPauseIcon.textContent = '▶'; // Update icon to "Play"
    console.log("Playback paused.");
  } else {
    audio.play().then(() => {
      video.play();
      playPauseIcon.textContent = '⏸'; // Update icon to "Pause"
      console.log("Playback resumed.");
    }).catch((err) => {
      console.error('Error playing audio or video:', err);
    });
  }
  isPlaying = !isPlaying; // Toggle play/pause state
}

// Expandable Song Title
const songTitle = document.getElementById('songTitle');
songTitle.addEventListener('click', () => {
  songTitle.classList.toggle('expanded');
  console.log("Song title toggled.");
});