function decodeShellResponse(response) {
  try {
    const binary = atob(response);
    const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
    const legacyResponse = JSON.parse(new TextDecoder().decode(bytes));

    if (typeof legacyResponse.CommandResponse === 'string') {
      return legacyResponse.CommandResponse;
    }
  } catch (_) {
    // The current API returns the response directly instead of using Base64.
  }

  return response;
}

async function submitCommand(command) {
  const apiKeyMeta = document.querySelector('meta[name="apiKey"]');
  const linkMeta = document.querySelector('meta[name="link"]');
  if (!apiKeyMeta || !linkMeta) {
    throw new Error('Configuration du shell indisponible');
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${linkMeta.content}/command`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKeyMeta.content
      },
      body: JSON.stringify({ requestCommand: command }),
      signal: controller.signal
    });

    let payload;
    try {
      payload = await response.json();
    } catch (_) {
      throw new Error('Réponse invalide du serveur');
    }

    if (!response.ok) {
      throw new Error(payload.error || `Erreur HTTP ${response.status}`);
    }
    if (typeof payload.response !== 'string') {
      throw new Error('Réponse du shell invalide');
    }

    return decodeShellResponse(payload.response);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Le shell ne répond pas');
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

const shellInput = document.getElementById('editable-underscore');
const responseMessage = document.getElementById('responseId');
const loadingMessage = document.getElementById('loading');

if (shellInput && responseMessage && loadingMessage) {
  shellInput.addEventListener('keydown', async event => {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();
    const command = shellInput.innerText.trim();

    if (command.includes('rm -rf /')) {
      document.body.innerHTML = '';
      return;
    }

    if (!command) {
      responseMessage.innerText = 'Entrez une commande.';
      responseMessage.dataset.state = 'error';
      responseMessage.hidden = false;
      return;
    }

    loadingMessage.hidden = false;
    responseMessage.hidden = true;
    responseMessage.innerText = '';
    shellInput.contentEditable = 'false';
    shellInput.setAttribute('aria-busy', 'true');

    try {
      responseMessage.innerText = await submitCommand(command);
      responseMessage.dataset.state = 'success';
    } catch (error) {
      responseMessage.innerText = `Erreur: ${error.message}`;
      responseMessage.dataset.state = 'error';
    } finally {
      loadingMessage.hidden = true;
      responseMessage.hidden = false;
      shellInput.contentEditable = 'true';
      shellInput.removeAttribute('aria-busy');
      shellInput.focus();
    }
  });
}
