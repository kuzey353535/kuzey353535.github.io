let selectedMood = null; 
let selectedPreference = null; 

const moodButtons = document.querySelectorAll('.mood-btn');
const preferenceButtons = document.querySelectorAll('.preference-btn');
const resultDisplay = document.getElementById('suggestion-result');

function displaySuggestion() {
    let outputSuggestion = "Select your options to see a suggestion."; 

    if (selectedMood && selectedPreference) {
        if (selectedMood === "relax" && selectedPreference === "view") {
            outputSuggestion = "Seaside Café";
        } else if (selectedMood === "work" && selectedPreference === "wifi") {
            outputSuggestion = "Cowork Café";
        } else if (selectedMood === "socialize" && selectedPreference === "live music") {
            outputSuggestion = "Jazz Lounge";
        } else {
            outputSuggestion = "Coffee Stop";
        }
    }

    resultDisplay.style.opacity = 0;
    setTimeout(() => {
        resultDisplay.textContent = outputSuggestion;
        resultDisplay.style.opacity = 1;
    }, 300);
}

function handleMoodSelection(event) {
    moodButtons.forEach(button => button.classList.remove('selected'));
    const clickedButton = event.target;
    clickedButton.classList.add('selected');
    selectedMood = clickedButton.dataset.mood;
    displaySuggestion();
}

function handlePreferenceSelection(event) {
    preferenceButtons.forEach(button => button.classList.remove('selected'));
    const clickedButton = event.target;
    clickedButton.classList.add('selected');
    selectedPreference = clickedButton.dataset.preference;
    displaySuggestion();
}

moodButtons.forEach(button => {
    button.addEventListener('click', handleMoodSelection);
});

preferenceButtons.forEach(button => {
    button.addEventListener('click', handlePreferenceSelection);
});

