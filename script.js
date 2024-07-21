document.addEventListener('DOMContentLoaded', () => {
    const leaveForm = document.getElementById('leaveForm');
    const applicationStatus = document.getElementById('applicationStatus');
    const applicationsDiv = document.getElementById('applications');

    let applications = JSON.parse(localStorage.getItem('applications')) || [];

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

    const updateApplication = (index, status) => {
        applications[index].status = status;
        localStorage.setItem('applications', JSON.stringify(applications));
        renderApplications();
    };

    window.updateApplication = updateApplication;

    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        const reason = document.getElementById('leaveReason').value;

        const newApplication = {
            name,
            reason,
            status: 'Pending'
        };

        applications.push(newApplication);
        localStorage.setItem('applications', JSON.stringify(applications));
        applicationStatus.innerHTML = '<p>Your application has been submitted.</p>';
        leaveForm.reset();
        renderApplications();
    });

    renderApplications();
});
