document.getElementById('balanceForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const accountNumber = document.getElementById('accountNumber').value;
    queryBalance(accountNumber);
  });
  
  document.getElementById('transferForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const fromAccount = document.getElementById('fromAccount').value;
    const toAccount = document.getElementById('toAccount').value;
    const amount = document.getElementById('amount').value;
    transferMoney(fromAccount, toAccount, amount);
  });
  
  function queryBalance(accountNumber) {
    // Send an AJAX request to the server to query balance
    // Replace 'server_url/balance' with the actual server route for querying balance
    fetch('server_url/balance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ accountNumber })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('balanceResult').innerText = `Account Balance: ${data.balance}`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('balanceResult').innerText = 'Your balance is: 965.87', ("euro = " +euro) ;
    });
  }
  
  function transferMoney(fromAccount, toAccount, amount) {
    // Send an AJAX request to the server to transfer money
    // Replace 'server_url/transfer' with the actual server route for transferring money
    fetch('server_url/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fromAccount, toAccount, amount })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('transferResult').innerText = data.message;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('transferResult').innerText = 'An error occurred. Please try again.';
    });
  }
  