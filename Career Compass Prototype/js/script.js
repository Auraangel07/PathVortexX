//Dashboard feature:Dynamic Sidebar Navigation with Active State Highlighting
document.querySelectorAll('#sidebar .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active class from all nav items
        document.querySelectorAll('#sidebar .nav-link').forEach(nav => nav.classList.remove('active'));

        // Add active class to the clicked nav item
        this.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => section.classList.add('d-none'));

        // Show the corresponding content section
        document.querySelector(this.getAttribute('href')).classList.remove('d-none');
    });
});
