// Variable M: mood
let selectedMood = null; 
// Variable T: preference
let selectedPreference = null; 

// Get the DOM elements
const moodButtons = document.querySelectorAll('.mood-btn');
const preferenceButtons = document.querySelectorAll('.preference-btn');
const resultDisplay = document.getElementById('suggestion-result');

/**
 * Updates the suggestion based on the selected mood and preference.
 * This is the core decision logic of the application.
 */
function displaySuggestion() {
    // Variable O: output suggestion
    let outputSuggestion = "Select your options to see a suggestion."; 

    if (selectedMood && selectedPreference) {
        // IF M = "relax" AND T = "view" THEN O = "Seaside Café"
        if (selectedMood === "relax" && selectedPreference === "view") {
            outputSuggestion = "Seaside Café";
        } 
        // IF M = "work" AND T = "wifi" THEN O = "Cowork Café"
        else if (selectedMood === "work" && selectedPreference === "wifi") {
            outputSuggestion = "Cowork Café";
        } 
        // IF M = "socialize" AND T = "live music" THEN O = "Jazz Lounge"
        else if (selectedMood === "socialize" && selectedPreference === "live music") {
            outputSuggestion = "Jazz Lounge";
        } 
        // ELSE O = "Coffee Stop"
        else {
            outputSuggestion = "Coffee Stop";
        }
    }

    // Display the result with a fade-in effect
    resultDisplay.style.opacity = 0;
    setTimeout(() => {
        resultDisplay.textContent = outputSuggestion;
        resultDisplay.style.opacity = 1;
    }, 300); // Wait for the fade-out to complete
}

/**
 * Handles the selection of a mood button.
 * @param {Event} event - The click event object.
 */
function handleMoodSelection(event) {
    // Remove the 'selected' class from all mood buttons
    moodButtons.forEach(button => button.classList.remove('selected'));
    
    // Add the 'selected' class to the clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('selected');

    // Store the selected mood value (Variable M)
    selectedMood = clickedButton.dataset.mood;
    
    // Check if both mood and preference are selected to show the suggestion
    displaySuggestion();
}

/**
 * Handles the selection of a preference button.
 * @param {Event} event - The click event object.
 */
function handlePreferenceSelection(event) {
    // Remove the 'selected' class from all preference buttons
    preferenceButtons.forEach(button => button.classList.remove('selected'));
    
    // Add the 'selected' class to the clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('selected');

    // Store the selected preference value (Variable T)
    selectedPreference = clickedButton.dataset.preference;
    
    // Check if both mood and preference are selected to show the suggestion
    displaySuggestion();
}

// Add event listeners to all mood and preference buttons
moodButtons.forEach(button => {
    button.addEventListener('click', handleMoodSelection);
});

preferenceButtons.forEach(button => {
    button.addEventListener('click', handlePreferenceSelection);
});
