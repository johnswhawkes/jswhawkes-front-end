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
    const functionApi = 'https://jswhawkes-counter-func.azurewebsites.net/api/code'; // Removed unnecessary "?"

    const getVisitCount = async () => {
        try {
            // Fetching the visit count from the API
            const response = await fetch(functionApi);
            const data = await response.json();

            console.log("API Response:", data); // Log API response for debugging

            // Update the counter in the HTML
            const count = data.count || 0; // Default to 0 if count is undefined
            const counterElement = document.getElementById("counter");

            if (counterElement) {
                counterElement.innerText = count;
                console.log("Visit count updated on the page:", count);
            } else {
                console.error("Counter element not found on the page.");
            }
        } catch (error) {
            console.error("Error fetching visit count:", error);

            // Fallback to default display
            const counterElement = document.getElementById("counter");
            if (counterElement) {
                counterElement.innerText = "0"; // Default value in case of error
            }
        }
    };

    // Call the function to update the visit count
    getVisitCount();
});
