// static/js/user-count.js

async function updateUserCount() {
  const response = await fetch('/api/active-users');
  const data = await response.json();
  document.getElementById('count').innerText = data.activeUsers;
}

fetch('/api/active-users', { method: 'POST' });

setInterval(updateUserCount, 5000);  // Update every 5 seconds
