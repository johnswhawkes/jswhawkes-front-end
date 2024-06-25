// JavaScript for sidebar toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('John S W Hawkes Resume Website Loaded');

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Hide sidebar on click outside (optional)
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
            sidebar.classList.remove('active');
        }
    });
});
