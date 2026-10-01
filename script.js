// ⚠️ Вставьте ваш точный адрес сервера с Render.com
const BACKEND_URL = 'https://zero-room-api.onrender.com';

const form = document.getElementById('loginForm');
const statusDiv = document.getElementById('status');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    statusDiv.className = 'status';
    statusDiv.textContent = 'Подключение...';
    submitBtn.disabled = true;

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${BACKEND_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            statusDiv.className = 'status success';
            statusDiv.textContent = data.message || 'Успешный вход!';
        } else {
            statusDiv.className = 'status error';
            statusDiv.textContent = data.message || 'Ошибка входа';
        }
    } catch (err) {
        statusDiv.className = 'status error';
        statusDiv.textContent = 'Ошибка соединения с сервером';
    } finally {
        submitBtn.disabled = false;
    }
});