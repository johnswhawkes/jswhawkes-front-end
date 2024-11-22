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

    // Function to update visit count
// Example using JavaScript fetch API
async function getVisitorCount() {
    try {
        const response = await fetch('https://jswhawkes-counter-func.azurewebsites.net/api/code', {
            method: 'GET',
        });
        const data = await response.text();
        document.getElementById("visitorCount").innerText = data; // Display visitor count in an element
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
}

// Call the function to get and display the visitor count
getVisitorCount();

    // Call the visit counter function when the page loads
    updateVisitCount();
});

