function saveName() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        localStorage.setItem('username', name);
        displayWelcome(name);
    }
}

function displayWelcome(name) {
    document.getElementById('form-section').style.display = 'none';
    const banner = document.getElementById('welcome-banner');
    document.getElementById('username').textContent = name;
    banner.classList.remove('hidden');
    banner.classList.add('show');
}

window.onload = function() {
    const storedName = localStorage.getItem('username');
    if (storedName) {
        displayWelcome(storedName);
    }
}
