// JavaScript for functionality

const courseList = [];
  
document.getElementById("createCourseForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("courseTitle").value;
  const description = document.getElementById("courseDescription").value;

  if (title && description) {
    const course = { title, description };
    courseList.push(course);
    updateCourseList();
    clearCreateForm();
  }
});

document.getElementById("editCourseForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const selectedCourse = document.getElementById("existingCourses").value;
  const newTitle = document.getElementById("editCourseTitle").value;
  const newDescription = document.getElementById("editCourseDescription").value;

  if (selectedCourse && newTitle && newDescription) {
    const course = courseList.find((course) => course.title === selectedCourse);
    if (course) {
      course.title = newTitle;
      course.description = newDescription;
      updateCourseList();
      clearEditForm();
    }
  }
});

function updateCourseList() {
  const courseListElement = document.getElementById("courseList");
  const existingCoursesDropdown = document.getElementById("existingCourses");

  courseListElement.innerHTML = "";
  existingCoursesDropdown.innerHTML = `<option value="" disabled selected>Select a course</option>`;

  courseList.forEach((course) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${course.title}: ${course.description}`;
    courseListElement.appendChild(listItem);

    const option = document.createElement("option");
    option.value = course.title;
    option.textContent = course.title;
    existingCoursesDropdown.appendChild(option);
  });
}

function clearCreateForm() {
  document.getElementById("courseTitle").value = "";
  document.getElementById("courseDescription").value = "";
}

function clearEditForm() {
  document.getElementById("editCourseTitle").value = "";
  document.getElementById("editCourseDescription").value = "";
  document.getElementById("existingCourses").value = "";
}

// Navigation between Create and Edit sections
document.getElementById("navCreateNewCourse").addEventListener("click", function() {
  document.getElementById("createNewCourse").classList.remove("d-none");
  document.getElementById("editCourse").classList.add("d-none");
});

document.getElementById("navEditCourse").addEventListener("click", function() {
  document.getElementById("createNewCourse").classList.add("d-none");
  document.getElementById("editCourse").classList.remove("d-none");
});