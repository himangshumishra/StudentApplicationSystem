document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginStatus = document.getElementById('loginStatus');

    const users = {
        student: { username: 'student', password: 'student' },
        teacher: { username: 'teacher', password: 'teacher' }
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === users.student.username && password === users.student.password) {
            window.location.href = 'student.html';
        } else if (username === users.teacher.username && password === users.teacher.password) {
            window.location.href = 'teacher.html';
        } else {
            loginStatus.innerHTML = '<p>Invalid username or password.</p>';
        }
    });
});
