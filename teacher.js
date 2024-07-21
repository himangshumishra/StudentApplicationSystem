document.addEventListener('DOMContentLoaded', () => {
    const applicationsDiv = document.getElementById('applications');

    const applications = JSON.parse(localStorage.getItem('applications')) || [];

    const renderApplications = () => {
        applicationsDiv.innerHTML = '';
        applications.forEach((app, index) => {
            const appDiv = document.createElement('div');
            appDiv.className = 'application';
            appDiv.innerHTML = `
                <p><strong>Name:</strong> ${app.name}</p>
                <p><strong>Reason:</strong> ${app.reason}</p>
                <p><strong>Status:</strong> ${app.status}</p>
                <button onclick="updateApplication(${index}, 'Approved')">Approve</button>
                <button onclick="updateApplication(${index}, 'Rejected')">Reject</button>
            `;
            applicationsDiv.appendChild(appDiv);
        });
    };

    window.updateApplication = (index, status) => {
        applications[index].status = status;
        localStorage.setItem('applications', JSON.stringify(applications));
        renderApplications();
    };

    renderApplications();
});
