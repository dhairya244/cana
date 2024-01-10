function register() {
    const username = document.getElementById('regUser').value;
    const password = document.getElementById('regP').value;
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.text())
    .then(data => alert(data));
  }
  
  function login() {
    const username = document.getElementById('loginUser').value;
    const password = document.getElementById('loginP').value;
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.text())
    .then(data => alert(data));
  }
  
  function makePurchase() {
    const item = document.getElementById('purchaseItem').value;
    const username = prompt('Enter your username:');
    fetch('/purchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, item }),
    })
    .then(response => response.text())
    .then(data => alert(data));
  }
  
