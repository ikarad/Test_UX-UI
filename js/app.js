// app.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is running');
    // Add your JavaScript code here
});

function setActiveIcon() {
    // Remove active class from all items
    document.querySelectorAll('.bottom-bar-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the current item based on hash
    if (window.location.hash === '#home' || window.location.hash === '') {
        document.getElementById('home-icon').classList.add('active');
    } else if (window.location.hash === '#qrcode') {
        document.getElementById('qrcode-icon').classList.add('active');
    } else if (window.location.hash === '#noti') {
        document.getElementById('noti-icon').classList.add('active');
    } else if (window.location.hash === '#health') {
        document.getElementById('health-icon').classList.add('active');
    }
}

// Set active icon when page loads
window.onload = setActiveIcon;

// Optionally, set active icon when the hash changes
window.onhashchange = setActiveIcon;