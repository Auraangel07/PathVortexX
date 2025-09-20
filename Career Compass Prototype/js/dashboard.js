//SIDEBAR
document.querySelectorAll("#sidebar .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".content-section")
      .forEach((section) => section.classList.add("d-none"));
    document
      .querySelector(this.getAttribute("href"))
      .classList.remove("d-none");
  });
});




// ECONOMIC INSIGHTS
const economicData = {
  "Technology": [
    {
      name: "TechCorp",
      details: {
        description: "Leading company in technology innovation.",
        profile: "TechCorp is known for its cutting-edge technology solutions.",
        salary: "Competitive",
        requirement: "Bachelor's degree in Computer Science or related field.",
        link: "https://www.techcorp.com",
        logo: "images/face.png"
      },
    },
    // Add more technology companies here
  ],
  "Healthcare": [
    {
      name: "HealthPlus",
      details: {
        description: "Pioneering in healthcare and medical solutions.",
        profile: "HealthPlus offers a range of healthcare products and services.",
        salary: "Varies by position",
        requirement: "Relevant healthcare qualifications.",
        link: "https://www.healthplus.com",
        logo: "https://www.example.com/healthplus-logo.png"
      },
    },
    // Add more healthcare companies here
  ],
  "Finance": [
    {
      name: "FinCo",
      details: {
        description: "Financial services and investment opportunities.",
        profile: "FinCo provides comprehensive financial services.",
        salary: "Competitive",
        requirement: "Degree in Finance or related field.",
        link: "https://www.finco.com",
        logo: "https://www.example.com/finco-logo.png"
      },
    },
    // Add more finance companies here
  ],
  // Continue for other categories
  "Retail": [
    // Add retail companies here
  ],
  "Manufacturing": [
    // Add manufacturing companies here
  ],
  "Energy": [
    // Add energy companies here
  ],
  "Real Estate": [
    // Add real estate companies here
  ],
  "Education": [
    // Add education companies here
  ],
  "Entertainment": [
    // Add entertainment companies here
  ],
  "Tourism and Hospitality": [
    // Add tourism and hospitality companies here
  ],
  "Agriculture": [
    // Add agriculture companies here
  ],
  "Transportation and Logistics": [
    // Add transportation and logistics companies here
  ]
};


document.addEventListener("DOMContentLoaded", () => {
  const economicButtonsContainer = document.getElementById("economicButtons");
  const economicCategoriesContainer = document.getElementById("economicCategories");

  function createEconomicButton(category) {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", () => {
      displayEconomicInsights(category);
    });
    economicButtonsContainer.appendChild(button);
  }

  function displayEconomicInsights(category) {
    // Clear previously displayed insights
    economicCategoriesContainer.innerHTML = "";

    // Add active class to selected button
    const buttons = economicButtonsContainer.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    const activeButton = Array.from(buttons).find(
      (btn) => btn.textContent === category
    );
    if (activeButton) activeButton.classList.add("active");

    // Create and display economic insight cards for the selected category
    const insights = economicData[category];
    insights.forEach((insight) => {
      const insightDiv = document.createElement("div");
      insightDiv.className = "economic-category";


      // Add insight details
      const insightDivDetail = document.createElement("div");
      insightDivDetail.className = "economic-item";

      // Create container for logo and name
      const nameContainer = document.createElement("div");
      nameContainer.className = "company-name-container";

      // Add company logo
      const logoImg = document.createElement("img");
      logoImg.src = insight.details.logo;
      logoImg.alt = `${insight.name} logo`;
      logoImg.className = "company-logo";
      nameContainer.appendChild(logoImg);

      // Add company name
      const insightName = document.createElement("h4");
      insightName.textContent = insight.name;
      nameContainer.appendChild(insightName);

      insightDivDetail.appendChild(nameContainer);

      // Add other details
      for (const [key, value] of Object.entries(insight.details)) {
        if (key !== "logo" && key !== "link") {  // Exclude logo and link from detail paragraphs
          const detailParagraph = document.createElement("p");
          detailParagraph.innerHTML = `<strong>${key}:</strong> ${value}`;
          insightDivDetail.appendChild(detailParagraph);
        }
      }

      // Add link
      const linkParagraph = document.createElement("p");
      const link = document.createElement("a");
      link.href = insight.details.link;
      link.textContent = "Visit Page";
      link.target = "_blank";
      linkParagraph.appendChild(link);
      insightDivDetail.appendChild(linkParagraph);

      insightDiv.appendChild(insightDivDetail);
      economicCategoriesContainer.appendChild(insightDiv);
    });

    // Show the categories container
    economicCategoriesContainer.style.display = "block";
  }

  // Create buttons for each category
  for (const category of Object.keys(economicData)) {
    createEconomicButton(category);
  }
});


// TREND UPDATES
const trendUpdatesData = {
  "Technology": [
    {
      title: "AI Advancements",
      about: "The latest in artificial intelligence technologies.",
      link: "https://www.technews.com/ai-advancements",
      date: "05/09/2024"
    },
    {
      title: "Quantum Computing Breakthroughs",
      about: "Recent progress in quantum computing technology.",
      link: "https://www.technews.com/quantum-computing",
      date: "15/08/2024"
    }
  ],
  "Healthcare": [
    {
      title: "Telemedicine Growth",
      about: "How telemedicine is revolutionizing healthcare.",
      link: "https://www.healthnews.com/telemedicine-growth",
      date: "22/07/2024"
    },
    {
      title: "Wearable Health Devices",
      about: "Advancements in wearable technology for health monitoring.",
      link: "https://www.healthnews.com/wearable-health-devices",
      date: "10/06/2024"
    }
  ],
  "Finance": [
    {
      title: "Fintech Innovations",
      about: "Emerging trends in financial technology.",
      link: "https://www.fintechnews.com/innovations",
      date: "30/05/2024"
    },
    {
      title: "Cryptocurrency Regulations",
      about: "How new regulations are impacting cryptocurrencies.",
      link: "https://www.fintechnews.com/crypto-regulations",
      date: "18/04/2024"
    }
  ],
  "Retail": [
    {
      title: "E-commerce Trends",
      about: "Latest trends in online retail.",
      link: "https://www.retailnews.com/ecommerce-trends",
      date: "12/03/2024"
    },
    {
      title: "Omnichannel Shopping Experience",
      about: "How retailers are integrating online and offline experiences.",
      link: "https://www.retailnews.com/omnichannel-shopping",
      date: "25/02/2024"
    }
  ],
  "Manufacturing": [
    {
      title: "Smart Manufacturing",
      about: "The rise of automation and smart technology in manufacturing.",
      link: "https://www.manufacturingnews.com/smart-manufacturing",
      date: "07/01/2024"
    },
    {
      title: "Sustainable Manufacturing Practices",
      about: "Innovations in reducing the environmental impact of manufacturing.",
      link: "https://www.manufacturingnews.com/sustainable-practices",
      date: "15/12/2023"
    }
  ],
  "Energy": [
    {
      title: "Renewable Energy Advancements",
      about: "Recent developments in renewable energy sources.",
      link: "https://www.energynews.com/renewable-advancements",
      date: "20/11/2023"
    },
    {
      title: "Energy Storage Solutions",
      about: "Innovations in energy storage technologies.",
      link: "https://www.energynews.com/storage-solutions",
      date: "05/10/2023"
    }
  ],
  "Real Estate": [
    {
      title: "Smart Home Technology",
      about: "How smart technology is changing real estate.",
      link: "https://www.realestatenews.com/smart-home-tech",
      date: "30/09/2023"
    },
    {
      title: "Urban Development Trends",
      about: "Emerging trends in urban real estate development.",
      link: "https://www.realestatenews.com/urban-development",
      date: "15/08/2023"
    }
  ],
  "Education": [
    {
      title: "E-learning Innovations",
      about: "New trends in online education.",
      link: "https://www.ednews.com/e-learning-innovations",
      date: "25/07/2023"
    },
    {
      title: "EdTech Integration",
      about: "How technology is being integrated into education.",
      link: "https://www.ednews.com/edtech-integration",
      date: "10/06/2023"
    }
  ],
  "Entertainment": [
    {
      title: "Streaming Services Growth",
      about: "The rise of streaming platforms in the entertainment industry.",
      link: "https://www.entnews.com/streaming-growth",
      date: "28/05/2023"
    },
    {
      title: "Virtual Reality Experiences",
      about: "How VR is enhancing entertainment experiences.",
      link: "https://www.entnews.com/vr-experiences",
      date: "15/04/2023"
    }
  ],
  "Tourism and Hospitality": [
    {
      title: "Post-Pandemic Travel Trends",
      about: "How travel and hospitality are recovering after the pandemic.",
      link: "https://www.tourismnews.com/post-pandemic-trends",
      date: "12/03/2023"
    },
    {
      title: "Sustainable Tourism Practices",
      about: "Innovations in eco-friendly travel and tourism.",
      link: "https://www.tourismnews.com/sustainable-tourism",
      date: "25/02/2023"
    }
  ],
  "Agriculture": [
    {
      title: "AgriTech Innovations",
      about: "Technological advancements in agriculture.",
      link: "https://www.agriculturenews.com/agritech-innovations",
      date: "18/01/2023"
    },
    {
      title: "Sustainable Farming Practices",
      about: "New methods for sustainable farming.",
      link: "https://www.agriculturenews.com/sustainable-farming",
      date: "05/12/2022"
    }
  ],
  "Transportation and Logistics": [
    {
      title: "Autonomous Vehicles",
      about: "The latest developments in self-driving technology.",
      link: "https://www.transportnews.com/autonomous-vehicles",
      date: "22/11/2022"
    },
    {
      title: "Supply Chain Optimization",
      about: "Innovations in optimizing supply chain logistics.",
      link: "https://www.transportnews.com/supply-chain-optimization",
      date: "10/10/2022"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const trendButtonsContainer = document.getElementById("trendButtons");
  const trendCategoriesContainer = document.getElementById("trendCategories");

  function createTrendButton(category) {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", () => {
      displayTrendUpdates(category);
    });
    trendButtonsContainer.appendChild(button);
  }

  function displayTrendUpdates(category) {
    // Clear previously displayed updates
    trendCategoriesContainer.innerHTML = "";

    // Add active class to selected button
    const buttons = trendButtonsContainer.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    const activeButton = Array.from(buttons).find(
      (btn) => btn.textContent === category
    );
    if (activeButton) activeButton.classList.add("active");

    // Create and display trend update cards for the selected category
    const updates = trendUpdatesData[category];
    updates.forEach((update) => {
      const updateDiv = document.createElement("div");
      updateDiv.className = "trend-category";

      // Add update details
      const updateDivDetail = document.createElement("div");
      updateDivDetail.className = "trend-item";

      // Add title
      const updateTitle = document.createElement("h4");
      updateTitle.textContent = update.title;
      updateDivDetail.appendChild(updateTitle);

      // Add about text
      const aboutParagraph = document.createElement("p");
      aboutParagraph.innerHTML = `<strong>About:</strong> ${update.about}`;
      updateDivDetail.appendChild(aboutParagraph);

      // Add date
      const dateParagraph = document.createElement("p");
      dateParagraph.innerHTML = `<strong>Date:</strong> ${update.date}`;
      updateDivDetail.appendChild(dateParagraph);

      // Add link
      const linkParagraph = document.createElement("p");
      const link = document.createElement("a");
      link.href = update.link;
      link.textContent = "Read More";
      link.target = "_blank";
      linkParagraph.appendChild(link);
      updateDivDetail.appendChild(linkParagraph);

      updateDiv.appendChild(updateDivDetail);
      trendCategoriesContainer.appendChild(updateDiv);
    });

    // Show the categories container
    trendCategoriesContainer.style.display = "block";
  }

  // Create buttons for each category
  for (const category of Object.keys(trendUpdatesData)) {
    createTrendButton(category);
  }
});

