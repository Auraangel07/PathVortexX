//RESOURCE HUB
const resourceData = {
    School: {
      //class 1
      "Class 1": {
        //subject 1
        Maths: [
          { name: "Chapter 1", url: "link_to_chapter_1" },
          { name: "Chapter 2", url: "link_to_chapter_2" },
        ],
        //subject 2
        Science: [
          { name: "Chapter 1", url: "link_to_chapter_1" },
          { name: "Chapter 2", url: "link_to_chapter_2" },
        ],
        //other subjects----------
      },
      //class 2
      "Class 2": {
        Maths: [
          { name: "Chapter 1", url: "link_to_chapter_1" },
          { name: "Chapter 2", url: "link_to_chapter_2" },
        ],
        Science: [
          { name: "Chapter 1", url: "link_to_chapter_1" },
          { name: "Chapter 2", url: "link_to_chapter_2" },
        ],
      },
      //other class till 12---------
    },
    College: {
      UG: {
        //course 1
        BTech: {
          CSE: [
            { name: "DSA", url: "link_to_dsa" },
            { name: "OS", url: "link_to_os" },
            { name: "COA", url: "link_to_coa" },
          ],
          ME: [
            { name: "Thermodynamics", url: "link_to_thermodynamics" },
            { name: "Fluid Mechanics", url: "link_to_fluid_mechanics" },
          ],
          CE: [
            { name: "Structural Analysis", url: "link_to_structural_analysis" },
            { name: "Geotechnics", url: "link_to_geotechnics" },
          ],
          ECE: [
            { name: "Signals", url: "link_to_signals" },
            { name: "Networks", url: "link_to_networks" },
          ],
        },
        //course 2
        BCA: [
          { name: "Computer Basics", url: "link_to_computer_basics" },
          { name: "Programming", url: "link_to_programming" },
        ],
        //other courses------------
      },
      PG: {
        MTech: {
          CSE: [
            { name: "Advanced Algorithms", url: "link_to_advanced_algorithms" },
            { name: "Distributed Systems", url: "link_to_distributed_systems" },
          ],
          ME: [
            {
              name: "Advanced Manufacturing",
              url: "link_to_advanced_manufacturing",
            },
            { name: "Robotics", url: "link_to_robotics" },
          ],
          CE: [
            { name: "Advanced Geotechnics", url: "link_to_advanced_geotechnics" },
            { name: "Urban Planning", url: "link_to_urban_planning" },
          ],
          ECE: [
            {
              name: "Advanced Communication Systems",
              url: "link_to_advanced_communication_systems",
            },
            { name: "Nanoelectronics", url: "link_to_nanoelectronics" },
          ],
        },
        MCA: [
          { name: "Advanced Databases", url: "link_to_advanced_databases" },
          { name: "Web Technologies", url: "link_to_web_technologies" },
        ],
      },
    },
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const resourceButtonsContainer = document.getElementById("resourceButtons");
    const resourceCategoriesContainer =
      document.getElementById("resourceCategories");
    const resourceSubCategoryContainer = document.getElementById(
      "resourceSubCategoryContainer"
    );
    const resourceItemsContainer = document.getElementById(
      "resourceItemsContainer"
    );
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.className = "back-button d-none";
    backButton.addEventListener("click", () => {
      navigateBack();
    });
  
    let history = []; // Stack to keep track of navigation history
  
    function createButton(text, onClick, className = "category") {
      const button = document.createElement("button");
      button.textContent = text;
      button.className = className;
      button.addEventListener("click", onClick);
      return button;
    }
  
    function displayResourceCategories(data, container) {
      // Clear previous content
      container.innerHTML = "";
      resourceItemsContainer.innerHTML = "";
      resourceCategoriesContainer.classList.add("d-none");
      resourceSubCategoryContainer.classList.remove("d-none");
      resourceItemsContainer.classList.add("d-none");
      backButton.classList.remove("d-none");
  
      // Hide previous levels
      resourceSubCategoryContainer.classList.remove("d-none");
  
      for (const [subCategory, items] of Object.entries(data)) {
        const subCategoryButton = createButton(
          subCategory,
          () => {
            if (typeof items === "object" && !Array.isArray(items)) {
              history.push(data); // Save the current level to history
              displayResourceCategories(items, container); // Display the next level
            } else {
              displayResourceItems(items); // Display items if no further subcategories
            }
          },
          "subcategory"
        );
  
        container.appendChild(subCategoryButton);
      }
    }
  
    function displayResourceItems(items) {
      resourceItemsContainer.innerHTML = "";
      resourceSubCategoryContainer.classList.add("d-none");
      resourceItemsContainer.classList.remove("d-none");
      backButton.classList.remove("d-none"); // Ensure back button is visible
  
      items.forEach((item) => {
        const itemButton = createButton(
          item.name,
          () => {
            window.open(item.url, "_blank");
          },
          "resource-item"
        );
  
        resourceItemsContainer.appendChild(itemButton);
      });
    }
  
    function navigateBack() {
      if (history.length > 0) {
        const previousData = history.pop();
        resourceSubCategoryContainer.innerHTML = "";
        resourceItemsContainer.innerHTML = "";
        resourceCategoriesContainer.classList.add("d-none");
        resourceSubCategoryContainer.classList.remove("d-none");
        resourceItemsContainer.classList.add("d-none");
        backButton.classList.remove("d-none");
        displayResourceCategories(previousData, resourceSubCategoryContainer);
      } else {
        resourceCategoriesContainer.classList.remove("d-none");
        resourceSubCategoryContainer.classList.add("d-none");
        resourceItemsContainer.classList.add("d-none");
        backButton.classList.add("d-none");
      }
    }
  
    for (const category of Object.keys(resourceData)) {
      const categoryButton = createButton(category, () => {
        resourceCategoriesContainer.classList.add("d-none");
        resourceSubCategoryContainer.classList.remove("d-none");
        resourceItemsContainer.classList.add("d-none");
        backButton.classList.add("d-none");
  
        displayResourceCategories(
          resourceData[category],
          resourceSubCategoryContainer
        );
      });
  
      resourceButtonsContainer.appendChild(categoryButton);
    }
  
    document.getElementById("resourceHub").appendChild(backButton);
  });