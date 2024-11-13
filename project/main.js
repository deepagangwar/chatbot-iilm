const responses = {
    "hello": "Hello! How can I assist you with information about IILM?",
    "hi": "Hi there! How can I help you today?",
    "courses": "IILM offers various undergraduate and postgraduate programs including BBA, MBA, and specialized management courses.",
    "admission": "For admission at IILM, you need to complete the online application form and qualify through our selection process. Would you like specific details?",
    "campus": "IILM has multiple campuses located in Delhi, Greater Noida, and Lucknow. Each campus is equipped with modern facilities and infrastructure.",
    "fees": "The fee structure varies by program. Please visit our official website or contact our admissions office for detailed fee information.",
    "placement": "IILM has an excellent placement record with top companies visiting for campus recruitment. Our placement cell provides comprehensive career support.",
    "faculty": "IILM has highly qualified faculty members with extensive academic and industry experience.",
    "contact": "You can reach us at admissions@iilm.edu or call our helpline at +91-XXXXXXXXXX.",
    "facilities": "Our campuses feature modern classrooms, libraries, computer labs, sports facilities, and student accommodation.",
    "default": "I'm not sure about that. Please contact our admissions office for more specific information."
};

function getBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Check for keywords in the input
    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    return responses.default;
}

function addMessage(message, isUser) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, true);
        
        // Get and add bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, false);
        }, 500);
        
        // Clear input
        userInput.value = '';
    }
}

// Handle Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});