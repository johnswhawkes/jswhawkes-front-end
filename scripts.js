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
    async function updateVisitCount() {
        try {
            // Replace with your Azure Function URL
            const response = await fetch('https://jswhawkes-function.azurewebsites.net/api/code', {
                method: 'POST' // Use GET if your function is set up to handle GET requests
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.text();
            document.getElementById('visitCount').innerText = result;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Call the visit counter function when the page loads
    updateVisitCount();
});

