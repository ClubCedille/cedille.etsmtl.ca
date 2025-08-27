async function submitCommand(command) {
  const apiKey = document.querySelector('meta[name="apiKey"]').content;
  const link = document.querySelector('meta[name="link"]').content;

  return fetch(link + '/command', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey
    },
    body:{
      'commandRequest': command
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      const decodedResponse = JSON.parse(atob(data));
      return decodedResponse;
    })
    .catch(error => {
      throw new Error('There was a problem with the fetch operation: ' + error.message);
    });
}

document.getElementById('editable-underscore').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    var responseMessage = document.getElementById('responseId');
    var loading = document.getElementById('loading');
    const userInput = event.target.innerText.trim();

    if (userInput.includes('rm -rf /')) {
      document.body.innerHTML = "";
      return;
    } else {
      loading.style.display = 'block';
      responseMessage.innerText = '';

      submitCommand(userInput)
        .then(response => {
          responseMessage.innerText = response.text || response.message;
          responseMessage.style.color = 'black';
        })
        .catch(e => {
          responseMessage.innerText = 'Error fetching response: ' + e.message;
          responseMessage.style.color = 'red';
        })
        .finally(() => {
          loading.style.display = 'none';
          responseMessage.style.display = 'block';
        });
    }
  }
});
