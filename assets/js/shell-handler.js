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

      try {
	var response = submitCommand(userInput);
	responseMessage.innerText = response.text;
      } catch (e){
	responseMessage.innerText = 'Error fetching response';
	responseMessage.style.color = 'red';
      }
      responseMessage.style.display = 'block';
      loading.style.display = 'none';
      console.log(response)
    }
  }
});
