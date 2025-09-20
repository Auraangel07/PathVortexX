//PROGRESS TRACKER
const syllabusData = {
  class10: {
    boards: ["CBSE", "ICSE"],
    exams: {
      CBSE: [
        "NTSE",
        "KVPY",
        "NSTSE",
        "IOQM",
        "NSO",
        "IMO",
        "ASSET",
        "RMO",
        "IEO",
        "ICO",
      ],
      ICSE: ["NTSE", "NSTSE", "NSO", "IMO", "ASSET", "IEO", "ICO"],
    },
    syllabus: {
      NTSE: [
        "Mathematics",
        "Science",
        "Social Science",
        "English",
        "Mental Ability",
      ],
      NSO: ["Physics", "Chemistry", "Biology"],
      IMO: ["Mathematics", "Logical Reasoning"],
    },
  },
  class12: {
    boards: ["CBSE", "ICSE"],
    streams: {
      Science_with_PCM: {
        exams: {
          CBSE: [
            "JEE Main",
            "JEE Advanced",
            "BITSAT",
            "VITEEE",
            "CUET (UG)",
            "IPMAT",
            "SET",
          ],
          ICSE: ["JEE Main", "BITSAT", "CUET (UG)", "IPMAT", "SET"],
        },
        syllabus: {
          "JEE Main": ["Mathematics", "Physics", "Chemistry"],
          "JEE Advanced": [
            "Advanced Mathematics",
            "Advanced Physics",
            "Advanced Chemistry",
          ],
          BITSAT: [
            "Mathematics",
            "Physics",
            "Chemistry",
            "English Proficiency",
          ],
        },
      },
      Science_with_PCB: {
        exams: {
          CBSE: ["NEET", "CUET (UG)", "IPMAT", "SET"],
          ICSE: ["NEET", "CUET (UG)", "IPMAT", "SET"],
        },
        syllabus: {
          NEET: ["Biology", "Physics", "Chemistry"],
          "CUET (UG)": [
            "General Knowledge",
            "English",
            "Quantitative Aptitude",
          ],
        },
      },
      Science_with_PCMB: {
        exams: {
          CBSE: ["JEE Main", "NEET", "CUET (UG)", "IPMAT", "SET"],
          ICSE: ["JEE Main", "NEET", "CUET (UG)", "IPMAT", "SET"],
        },
        syllabus: {
          "JEE Main": ["Mathematics", "Physics", "Chemistry"],
          NEET: ["Biology", "Physics", "Chemistry"],
        },
      },
      commerce: {
        exams: {
          CBSE: ["CUET (UG)", "IPMAT", "SET"],
          ICSE: ["CUET (UG)", "IPMAT", "SET"],
        },
        syllabus: {
          "CUET (UG)": [
            "General Knowledge",
            "English",
            "Quantitative Aptitude",
          ],
          IPMAT: ["Quantitative Ability", "Verbal Ability"],
          SET: ["General Knowledge", "Logical Reasoning", "English"],
        },
      },
      humanities: {
        exams: {
          CBSE: ["CUET (UG)", "IPMAT", "SET"],
          ICSE: ["CUET (UG)", "IPMAT", "SET"],
        },
        syllabus: {
          "CUET (UG)": [
            "General Knowledge",
            "English",
            "Quantitative Aptitude",
          ],
          IPMAT: ["Quantitative Ability", "Verbal Ability"],
          SET: ["General Knowledge", "Logical Reasoning", "English"],
        },
      },
    },
  },
};


//CLASS 10 WORKING
document.addEventListener("DOMContentLoaded", function () {
  const classSelector = document.getElementById("classSelector");
  const additionalOptions = document.getElementById("additionalOptions");
  const examSelectorContainer = document.getElementById("examSelectorContainer");
  const syllabusSection = document.getElementById("syllabusSection");
  const progressBar = document.getElementById("progressBar");
  const completionPercentage = document.getElementById("completionPercentage");

  function createExamSelectors(exams) {
    examSelectorContainer.innerHTML = "";
    exams.forEach((exam) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "exam-checkbox";
      checkbox.value = exam;
      checkbox.addEventListener("change", handleExamSelection);

      const span = document.createElement("span");
      span.textContent = exam;

      label.appendChild(checkbox);
      label.appendChild(span);
      examSelectorContainer.appendChild(label);
    });
  }

  function createSyllabusSections(selectedExams, selectedBoard, streamType = "") {
    syllabusSection.innerHTML = "";

    selectedExams.forEach((exam) => {
      const examSyllabus =
        syllabusData.class12.streams[streamType]?.syllabus[exam] ||
        syllabusData.class10.syllabus[exam];
      if (examSyllabus) {
        const examSyllabusContainer = document.createElement("div");
        examSyllabusContainer.className = "syllabus-container";

        const examTitle = document.createElement("h4");
        examTitle.textContent = `${exam} Syllabus for ${selectedBoard}`;
        examSyllabusContainer.appendChild(examTitle);

        const checkboxList = document.createElement("div");
        checkboxList.className = "checkbox-list";

        examSyllabus.forEach((subject) => {
          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.className = "progress-checkbox";
          checkbox.addEventListener("change", toggleLineThrough);

          const span = document.createElement("span");
          span.textContent = subject;

          label.appendChild(checkbox);
          label.appendChild(span);
          checkboxList.appendChild(label);
        });

        examSyllabusContainer.appendChild(checkboxList);
        syllabusSection.appendChild(examSyllabusContainer);
      }
    });

    updateProgressBar();
  }

  function updateProgressBar() {
    const checkboxes = document.querySelectorAll(".progress-checkbox");
    const totalCheckboxes = checkboxes.length;
    const checkedCheckboxes = document.querySelectorAll(".progress-checkbox:checked").length;
    const progressPercentage = totalCheckboxes > 0 ? (checkedCheckboxes / totalCheckboxes) * 100 : 0;

    progressBar.style.width = progressPercentage + "%";
    completionPercentage.textContent = `Completion: ${Math.round(progressPercentage)}%`;
  }

  function toggleLineThrough(event) {
    const taskLabel = event.target.nextElementSibling;
    if (event.target.checked) {
      taskLabel.classList.add("line-through");
    } else {
      taskLabel.classList.remove("line-through");
    }
    updateProgressBar();
  }

  function handleExamSelection() {
    const selectedExams = Array.from(document.querySelectorAll(".exam-checkbox:checked")).map((checkbox) => checkbox.value);
    const selectedClass = classSelector.value;
    const selectedBoard = additionalOptions.querySelector("select").value;

    if (selectedClass === "class10") {
      createSyllabusSections(selectedExams, selectedBoard);
    } else if (selectedClass === "class12") {
      const streamSelector = additionalOptions.querySelector('select[name="stream"]');
      const streamType = streamSelector?.value || "";
      createSyllabusSections(selectedExams, selectedBoard, streamType);
    }
  }

  classSelector.addEventListener("change", function () {
    additionalOptions.innerHTML = "";
    examSelectorContainer.innerHTML = "";
    const selectedClass = classSelector.value;

    if (selectedClass === "class10") {
      const boardSelector = document.createElement("select");
      boardSelector.innerHTML =
        "<option selected disabled>Select Board</option>" +
        syllabusData.class10.boards.map((board) => `<option value="${board}">${board}</option>`).join("");
      additionalOptions.appendChild(boardSelector);

      boardSelector.addEventListener("change", function () {
        const selectedBoard = boardSelector.value;
        const exams = syllabusData.class10.exams[selectedBoard];
        createExamSelectors(exams);
      });
    }

    if (selectedClass === "class12") {
      const boardSelector = document.createElement("select");
      boardSelector.innerHTML =
        "<option selected disabled>Select Board</option>" +
        syllabusData.class12.boards.map((board) => `<option value="${board}">${board}</option>`).join("");
      additionalOptions.appendChild(boardSelector);

      const streamSelector = document.createElement("select");
      streamSelector.name = "stream";
      streamSelector.innerHTML =
        '<option selected disabled>Select Stream</option><option value="Science_with_PCM">Science with PCM</option><option value="Science_with_PCB">Science with PCB</option><option value="Science_with_PCMB">Science with PCMB</option><option value="commerce">Commerce</option><option value="humanities">Humanities</option>';
      additionalOptions.appendChild(streamSelector);

      boardSelector.addEventListener("change", function () {
        const selectedBoard = boardSelector.value;
        const selectedStream = streamSelector.value;
        const exams =
          syllabusData.class12.streams[selectedStream]?.exams[selectedBoard] || [];
        createExamSelectors(exams);
      });

      streamSelector.addEventListener("change", function () {
        const selectedStream = streamSelector.value;
        const selectedBoard = boardSelector.value;
          const exams =
            syllabusData.class12.streams[selectedStream]?.exams[selectedBoard] || [];
          createExamSelectors(exams);

      });
    }
  });
});
