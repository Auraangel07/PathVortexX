// Define the flowData object with short result mappings
const flowData = {
  start: {
    message: "What are your primary academic interests and strengths?",
    options: [
      "Mathematics and Science",
      "Biology and Health Sciences",
      "Art, Design, or Performing Arts",
      "Business Studies and Economics",
      "Social Sciences and Humanities"
    ]
  },
  academicInterests: {
    message: "Which subjects or fields do you enjoy studying the most?",
    options: [
      "Analytical and problem-solving subjects (e.g., Mathematics, Engineering)",
      "Experimental and research-oriented subjects (e.g., Biology, Medical Sciences)",
      "Creative and design-focused subjects (e.g., Art, Design)",
      "Practical and business-related subjects (e.g., Business Management, Commerce)",
      "Critical thinking and interpretive subjects (e.g., Literature, Social Sciences)"
    ]
  },
  subjectsEnjoyed: {
    message: "What are your long-term career aspirations or goals?",
    options: [
      "Engineering or Technology fields",
      "Healthcare or Medical professions",
      "Creative or Design careers",
      "Business or Management roles",
      "Arts, Media, or Social Sciences"
    ]
  },
  careerAspirations: {
    message: "Which type of work environment do you see yourself thriving in?",
    options: [
      "Technical and problem-solving roles",
      "Research and healthcare settings",
      "Creative and artistic environments",
      "Business and corporate settings",
      "Educational, media, or social service settings"
    ]
  },
  workEnvironment: {
    message: "What motivates you the most in choosing a career path?",
    options: [
      "Solving complex problems and technical challenges",
      "Contributing to healthcare and making a difference",
      "Expressing creativity and innovation",
      "Leading and managing business opportunities",
      "Understanding human behavior and societal impacts"
    ]
  },
  classChoice: {
    message: "Are you currently in Class 10 or Class 11/12?",
    options: ["Class 10", "Class 11/12"]
  },
  Class10: {
    message: "Based on your responses, here are your results:",
    resultMappings: {
      // Existing combinations
      "Mathematics and Science-Analytical and problem-solving subjects (e.g., Mathematics, Engineering)-Engineering or Technology fields-Technical and problem-solving roles-Solving complex problems and technical challenges": "Science with PCM",
      "Biology and Health Sciences-Experimental and research-oriented subjects (e.g., Biology, Medical Sciences)-Healthcare or Medical professions-Research and healthcare settings-Contributing to healthcare and making a difference": "Science with PCB",
      
      // New combinations
      "Mathematics and Science-Analytical and problem-solving subjects (e.g., Mathematics, Engineering)-Healthcare or Medical professions-Research and healthcare settings-Solving complex problems and technical challenges": "Science with PCMB",
      "Business Studies and Economics-Practical and business-related subjects (e.g., Business Management, Commerce)-Business or Management roles-Business and corporate settings-Leading and managing business opportunities": "Commerce",
      "Art, Design, or Performing Arts-Creative and design-focused subjects (e.g., Art, Design)-Creative or Design careers-Creative and artistic environments-Expressing creativity and innovation": "Humanities"
    }
  },
  Class11_12: {
    message: "Based on your responses, here are your results:",
    resultMappings: {
      // Existing combinations
      "Mathematics and Science-Analytical and problem-solving subjects (e.g., Mathematics, Engineering)-Engineering or Technology fields-Technical and problem-solving roles-Solving complex problems and technical challenges": "BTech, BE, BCA, BIT",
      
      // New combinations
      "Biology and Health Sciences-Experimental and research-oriented subjects (e.g., Biology, Medical Sciences)-Healthcare or Medical professions-Research and healthcare settings-Contributing to healthcare and making a difference": "MBBS, BSc Nursing, BPharm, BHMS, BPT",
      "Art, Design, or Performing Arts-Creative and design-focused subjects (e.g., Art, Design)-Creative or Design careers-Creative and artistic environments-Expressing creativity and innovation": "BFA, BDes, BPA, BM",
      "Business Studies and Economics-Practical and business-related subjects (e.g., Business Management, Commerce)-Business or Management roles-Business and corporate settings-Leading and managing business opportunities": "BBA, BCom, BMS, BIB, BBM",
      "Social Sciences and Humanities-Critical thinking and interpretive subjects (e.g., Literature, Social Sciences)-Arts, Media, or Social Sciences-Educational, media, or social service settings-Understanding human behavior and societal impacts": "BA Sociology, BA Pol Sci, BSW, BSc Psychology"
    }
  }
};


// Initialize the chatbot
let currentStage = 'start';
let previousStage = null;
let selectedOptions = [];

function displayMessage(message) {
  const messageContainer = document.getElementById('chatbot-messages');
  messageContainer.innerHTML = ''; // Clear previous messages
  const messageElement = document.createElement('div');
  messageElement.className = 'chatbot-message';
  messageElement.innerText = message;
  messageContainer.appendChild(messageElement);
}

function displayOptions(options) {
  const optionsContainer = document.getElementById('chatbot-options');
  optionsContainer.innerHTML = ''; // Clear previous options
  options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.className = 'chatbot-option';
    optionButton.innerText = option;
    optionButton.onclick = () => handleOptionSelect(option);
    optionsContainer.appendChild(optionButton);
  });
}

function handleOptionSelect(option) {
  selectedOptions.push(option); // Track the user's selected options

  if (currentStage === 'start') {
    previousStage = 'start';
    currentStage = 'academicInterests';
    displayMessage(flowData.academicInterests.message);
    displayOptions(flowData.academicInterests.options);
  } else if (currentStage === 'academicInterests') {
    previousStage = 'academicInterests';
    currentStage = 'subjectsEnjoyed';
    displayMessage(flowData.subjectsEnjoyed.message);
    displayOptions(flowData.subjectsEnjoyed.options);
  } else if (currentStage === 'subjectsEnjoyed') {
    previousStage = 'subjectsEnjoyed';
    currentStage = 'careerAspirations';
    displayMessage(flowData.careerAspirations.message);
    displayOptions(flowData.careerAspirations.options);
  } else if (currentStage === 'careerAspirations') {
    previousStage = 'careerAspirations';
    currentStage = 'workEnvironment';
    displayMessage(flowData.workEnvironment.message);
    displayOptions(flowData.workEnvironment.options);
  } else if (currentStage === 'workEnvironment') {
    previousStage = 'workEnvironment';
    currentStage = 'classChoice';
    displayMessage(flowData.classChoice.message);
    displayOptions(flowData.classChoice.options);
  } else if (currentStage === 'classChoice') {
    previousStage = 'classChoice';
    currentStage = option === 'Class 10' ? 'Class10' : 'Class11_12';
    displayMessage(flowData[currentStage].message);
    
    // Combine selected options into a key
    const selectedKey = selectedOptions.slice(0, 5).join('-');
    
    // Check if there's a matching result in the resultMappings
    const result = flowData[currentStage].resultMappings[selectedKey];
    if (result) {
      displayMessage(result); // Display the short result like "Science with PCM"
    } else {
      displayMessage("No exact match found for your selections.");
    }
    
    document.getElementById('chatbot-options').innerHTML = ''; // Clear options after showing result
  }
}

function startChat() {
  currentStage = 'start';
  previousStage = null;
  selectedOptions = []; // Reset selected options
  document.getElementById('chatbot-messages').innerHTML = '';
  displayMessage(flowData.start.message);
  displayOptions(flowData.start.options);
}

function goBack() {
  if (previousStage) {
    const tempStage = currentStage;
    currentStage = previousStage;
    previousStage = tempStage;
    selectedOptions.pop(); // Remove the last selected option
    displayMessage(flowData[currentStage].message);
    displayOptions(flowData[currentStage].options);
  }
}

// Initialize chatbot with the first message
startChat();

// Handle user input
document.getElementById('chatbot-send').onclick = () => {
  const userInput = document.getElementById('chatbot-input').value;
  if (userInput) {
    handleOptionSelect(userInput);
    document.getElementById('chatbot-input').value = '';
  }
};

document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userInput = document.getElementById('chatbot-input').value;
    if (userInput) {
      handleOptionSelect(userInput);
      document.getElementById('chatbot-input').value = '';
    }
  }
});

// Add event listeners for start/end and back buttons
document.getElementById('chatbot-start-end').onclick = startChat;
document.getElementById('chatbot-back').onclick = goBack;
