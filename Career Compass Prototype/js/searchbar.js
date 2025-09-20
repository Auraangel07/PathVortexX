const availableItems = [
    'Career Path Assessment', 'Progress Tracker', 'Personalized Roadmaps',
    'Resource Hub', 'Economic Insights', 'Trend Updates', 'Decision Support',
    'Home', 'About Us', 'Contact Us', 'Dashboard', 'Sign Out'
  ];

  function searchWebsite() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    if (input) {
      const filteredItems = availableItems.filter(item => item.toLowerCase().includes(input));
      filteredItems.forEach(item => {
        const resultItem = document.createElement('p');
        resultItem.textContent = item;
        resultItem.onclick = () => {
          window.location.href = '#';  // Add logic to navigate to the corresponding page
        };
        resultsDiv.appendChild(resultItem);
      });
    }
  }