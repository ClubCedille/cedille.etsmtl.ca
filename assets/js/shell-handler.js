function submitCommand(command) {
  const apiKey = document.querySelector('meta[name="apiKey"]').content;
  const link = document.querySelector('meta[name="link"]').content;

  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey
    },
    body: {
      'commandRequest': command
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
}

document.getElementById('editable-underscore').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const userInput = event.target.innerText.trim();
      var response = submitCommand(userInput);
      var responseMessage = document.getElementById(responseId);
      responseMessage.innerText = response;
    }
});
