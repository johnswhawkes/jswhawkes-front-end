document.addEventListener('DOMContentLoaded', () => {
    console.log('John S W Hawkes Resume Website Loaded');

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Sidebar toggle functionality
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
            sidebar.classList.remove('active');
        }
    });

    // Visit counter functionality
    const functionApi = 'https://jswhawkes-counter-func.azurewebsites.net/api/code';

    const updateCounter = (elementId, value) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerText = value;
        } else {
            console.error(`Element with ID "${elementId}" not found.`);
        }
    };

    const getVisitCount = async () => {
        try {
            const response = await fetch(functionApi);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response:", data);

            // Update the daily and total counts
            updateCounter("daily-counter", data.dailyCount || 0);
            updateCounter("total-counter", data.totalCount || 0);
        } catch (error) {
            console.error("Error fetching visit count:", error);

            // Optional: Display fallback values on error
            updateCounter("daily-counter", "Error");
            updateCounter("total-counter", "Error");
        }
    };

    getVisitCount();
});
