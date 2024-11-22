// JavaScript for sidebar toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('John S W Hawkes Resume Website Loaded');

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Sidebar toggle functionality
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Hide sidebar on click outside (optional)
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
            sidebar.classList.remove('active');
        }
    });

    // Visit counter functionality
    const functionApi = 'https://jswhawkes-counter-func.azurewebsites.net/api/code?'; 

    const getVisitCount = async () => {
        try {
            const response = await fetch(functionApi);
            const data = await response.json();
            console.log("Webpage called function API.");
            const count = data.count || 0; // Default to 0 if count is undefined
            document.getElementById("counter").innerText = count;
        } catch (error) {
            console.error("Error fetching visit count:", error);
            document.getElementById("counter").innerText = "0"; // Default display
        }
    };

    getVisitCount();
});
