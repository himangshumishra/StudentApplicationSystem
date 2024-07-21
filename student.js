document.addEventListener('DOMContentLoaded', () => {
    const leaveForm = document.getElementById('leaveForm');
    const applicationStatus = document.getElementById('applicationStatus');
    const studentApplicationsDiv = document.getElementById('studentApplications');

    const renderStudentApplications = () => {
        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        studentApplicationsDiv.innerHTML = '';
        applications.forEach((app) => {
            const appDiv = document.createElement('div');
            appDiv.className = 'application';
            appDiv.innerHTML = `
                <p><strong>Name:</strong> ${app.name}</p>
                <p><strong>Reason:</strong> ${app.reason}</p>
                <p><strong>Status:</strong> ${app.status}</p>
            `;
            studentApplicationsDiv.appendChild(appDiv);
        });
    };

    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        const reason = document.getElementById('leaveReason').value;

        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        applications.push({ name, reason, status: 'Pending' });
        localStorage.setItem('applications', JSON.stringify(applications));

        applicationStatus.innerHTML = '<p>Your application has been submitted.</p>';
        leaveForm.reset();
        renderStudentApplications();
    });

    renderStudentApplications();
});
