let selectedMood = null;
let selectedPreference = null;

const moodButtons = document.querySelectorAll('.mood-btn');
const preferenceButtons = document.querySelectorAll('.preference-btn');
const resultDisplay = document.getElementById('suggestion-result');
const descriptionDisplay = document.getElementById('description');

function displaySuggestion() {
  let suggestion = "Make your choices above ⬆️";
  let description = "";

  if (selectedMood && selectedPreference) {
    if (selectedMood === "relax" && selectedPreference === "view") {
      suggestion = "🌅 Seaside Café";
      description = "Calm atmosphere with a beautiful sea view.";
    } else if (selectedMood === "work" && selectedPreference === "wifi") {
      suggestion = "💼 Cowork Café";
      description = "Perfect for productivity with fast Wi-Fi.";
    } else if (selectedMood === "socialize" && selectedPreference === "live music") {
      suggestion = "🎷 Jazz Lounge";
      description = "Great spot for friends & live tunes.";
    } else {
      suggestion = "☕ Coffee Stop";
      description = "Cozy and casual for any vibe.";
    }
  }

  resultDisplay.textContent = suggestion;
  descriptionDisplay.textContent = description;
}

function handleMoodSelection(e) {
  moodButtons.forEach(btn => btn.classList.remove('selected'));
  e.target.classList.add('selected');
  selectedMood = e.target.dataset.mood;
  displaySuggestion();
}

function handlePreferenceSelection(e) {
  preferenceButtons.forEach(btn => btn.classList.remove('selected'));
  e.target.classList.add('selected');
  selectedPreference = e.target.dataset.preference;
  displaySuggestion();
}

moodButtons.forEach(btn => btn.addEventListener('click', handleMoodSelection));
preferenceButtons.forEach(btn => btn.addEventListener('click', handlePreferenceSelection));

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
