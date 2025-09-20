// Define the flowData object
const flowData = {
  start: {
    message: "What are your primary academic interests and strengths?",
    options: ["1",
      "Mathematics and Science",
      "Biology and Health Sciences",
      "Art, Design, or Performing Arts",
      "Business Studies and Economics",
      "Social Sciences and Humanities"
    ]
  },
  academicInterests: {
    message: "Which subjects or fields do you enjoy studying the most?",
    options: ["1",
      "Analytical and problem-solving subjects (e.g., Mathematics, Engineering)",
      "Experimental and research-oriented subjects (e.g., Biology, Medical Sciences)",
      "Creative and design-focused subjects (e.g., Art, Design)",
      "Practical and business-related subjects (e.g., Business Management, Commerce)",
      "Critical thinking and interpretive subjects (e.g., Literature, Social Sciences)"
    ]
  },
  subjectsEnjoyed: {
    message: "What are your long-term career aspirations or goals?",
    options: ["1",
      "Engineering or Technology fields",
      "Healthcare or Medical professions",
      "Creative or Design careers",
      "Business or Management roles",
      "Arts, Media, or Social Sciences"
    ]
  },
  careerAspirations: {
    message: "Which type of work environment do you see yourself thriving in?",
    options: ["1",
      "Technical and problem-solving roles",
      "Research and healthcare settings",
      "Creative and artistic environments",
      "Business and corporate settings",
      "Educational, media, or social service settings"
    ]
  },
  workEnvironment: {
    message: "What motivates you the most in choosing a career path?",
    options: ["1",
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
    message: "Based on your responses, here are some recommendations:",
    options: {"1-1-1-1-1":"SUCCESSFUL",
      "Science with PCM": "Recommended if you have interests in Mathematics and Science, enjoy analytical subjects, aspire to fields in engineering or technology, and are motivated by solving complex problems.",
      "Science with PCB": "Recommended if you have interests in Biology and Health Sciences, enjoy experimental subjects, aspire to healthcare or medical professions, and are motivated by making a difference.",
      "Science with PCMB": "Recommended for a broad approach including both PCM and PCB interests.",
      "Commerce": "Recommended if you have interests in Business Studies and Economics, enjoy practical business subjects, aspire to management roles, and are motivated by leading business opportunities.",
      "Humanities": "Recommended if you have interests in Art, Design, or Performing Arts, enjoy creative subjects, aspire to creative careers, and are motivated by expressing creativity."
    }
  },
  Class11_12: {
    message: "Based on your responses, here are some recommendations:",
    options: {
      "BTech, BE, BCA, BIT": "Recommended for interests in Mathematics and Science, enjoyment of analytical subjects, aspirations in engineering or technology, and motivation by technical challenges.",
      "MBBS, BSc Nursing, BPharm, BHMS, BPT": "Recommended for interests in Biology and Health Sciences, enjoyment of research-oriented subjects, aspirations in healthcare professions, and motivation by making a difference.",
      "BFA, BDes, BPA, BM": "Recommended for interests in Art, Design, or Performing Arts, enjoyment of creative subjects, aspirations in creative careers, and motivation by innovation.",
      "BBA, BCom, BMS, BIB, BBM": "Recommended for interests in Business Studies and Economics, enjoyment of practical business subjects, aspirations in management roles, and motivation by leading opportunities.",
      "BA Sociology, BA Pol Sci, BSW, BSc Psychology": "Recommended for interests in Social Sciences and Humanities, enjoyment of critical thinking subjects, aspirations in arts or social sciences, and motivation by understanding societal impacts."
    }
  }
};

// Initialize the chatbot
let currentStage = 'start';
let previousStage = null;

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
    displayOptions(Object.keys(flowData[currentStage].options));
  } else if (currentStage in flowData && Object.keys(flowData[currentStage].options).includes(option)) {
    displayMessage(flowData[currentStage].options[option]);
    document.getElementById('chatbot-options').innerHTML = ''; // Clear options after showing result
  }
}

function startChat() {
  currentStage = 'start';
  previousStage = null;
  document.getElementById('chatbot-messages').innerHTML = '';
  displayMessage(flowData.start.message);
  displayOptions(flowData.start.options);
}

function goBack() {
  if (previousStage) {
    const tempStage = currentStage;
    currentStage = previousStage;
    previousStage = tempStage;
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
