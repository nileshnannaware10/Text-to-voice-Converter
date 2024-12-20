// Function to convert text to speech
function speakText() {
    const text = document.getElementById('text-input').value;
    const status = document.getElementById('status');
    
    // Check if the input text is not empty
    if (text.trim() === '') {
        status.textContent = "Please enter some text to speak.";
        return;
    }

    // Create a new SpeechSynthesisUtterance object
    const speech = new SpeechSynthesisUtterance(text);

    // Optionally, you can set the properties of the speech like voice and rate
    speech.lang = 'en-US';
    speech.rate = 1; // Speed of speech (1 is normal)
    speech.pitch = 1; // Pitch of the voice

    // Speak the text
    speechSynthesis.speak(speech);

    // Update the status message
    status.textContent = "Speaking...";
}

// Function to clear the text area
function clearText() {
    document.getElementById('text-input').value = '';
    document.getElementById('status').textContent = '';
}

// Function to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
