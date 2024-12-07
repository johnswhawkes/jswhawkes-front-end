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

    const getVisitCount = async () => {
        try {
            const response = await fetch(functionApi);
            const data = await response.json();

            console.log("API Response:", data);

            // Update the daily count
            const dailyCount = data.dailyCount || 0;
            const dailyCounterElement = document.getElementById("daily-counter");
            if (dailyCounterElement) {
                dailyCounterElement.innerText = dailyCount;
            } else {
                console.error("Daily counter element not found on the page.");
            }

            // Update the total count
            const totalCount = data.totalCount || 0;
            const totalCounterElement = document.getElementById("total-counter");
            if (totalCounterElement) {
                totalCounterElement.innerText = totalCount;
            } else {
                console.error("Total counter element not found on the page.");
            }
        } catch (error) {
            console.error("Error fetching visit count:", error);
        }
    };

    getVisitCount();
});
