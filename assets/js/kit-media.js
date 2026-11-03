// logo checkboxes
function setupLogoSelection() {
  const checkboxes = document.querySelectorAll('.logo-checkbox');
  const selectAllBtn = document.getElementById('btn-select-all');
  const deselectAllBtn = document.getElementById('btn-deselect-all');
  const downloadSelectedBtn = document.getElementById('btn-download-selected');
  const selectedBadge = document.getElementById('selected-badge');

  function updateSelectionState() {
    const selected = Array.from(checkboxes).filter((cb) => cb.checked);
    const count = selected.length;

    // select info
    if (selectedBadge) {
      selectedBadge.textContent = `${count} sélectionné(s)`;
      if (count > 0) {
        selectedBadge.classList.remove('bg-secondary');
        selectedBadge.classList.add('bg-warning', 'text-dark');
      } else {
        selectedBadge.classList.remove('bg-warning', 'text-dark');
        selectedBadge.classList.add('bg-secondary');
      }
    }

    // download button
    if (downloadSelectedBtn) {
      downloadSelectedBtn.disabled = count === 0;
      const format = count === 1 ? '.png' : '.zip';
      const iconHtml = '<i class="bi bi-archive-fill me-2"></i>';
      downloadSelectedBtn.innerHTML = `${iconHtml}Télécharger la sélection (${count}) (${format})`;
    }

    // borders
    checkboxes.forEach((cb) => {
      const card = cb.closest('.kit-logo-card');
      if (card) {
        card.classList.toggle('border-warning', cb.checked);
        card.classList.toggle('selected-card', cb.checked);
      }
    });
  }

  // selection update on checkbox click
  checkboxes.forEach((cb) => cb.addEventListener('change', updateSelectionState));

  // select btns
  selectAllBtn?.addEventListener('click', () => {
    checkboxes.forEach((cb) => { cb.checked = true; });
    updateSelectionState();
  });

  deselectAllBtn?.addEventListener('click', () => {
    checkboxes.forEach((cb) => { cb.checked = false; });
    updateSelectionState();
  });

  updateSelectionState();
}

// downloads
function triggerSingleDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
}

async function downloadFilesAsZip(items, zipFilename = 'CEDILLE-logos.zip') {
  if (items.length === 1) {
    triggerSingleDownload(items[0].url, items[0].filename);
    return;
  }

  try {
    const ZipConstructor = window.JSZip;
    if (!ZipConstructor) {
      throw new Error('JSZip library is not loaded');
    }

    const zip = new ZipConstructor();
    const folder = zip.folder('CEDILLE-logos');

    const fetchPromises = items.map(async (item) => {
      const fileName = item.filename;
      try {
        const res = await fetch(item.url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        folder.file(fileName, blob);
      } catch (err) {
        console.warn(`Impossible de télécharger ${item.url} via fetch:`, err);
        triggerSingleDownload(item.url, fileName);
      }
    });

    await Promise.all(fetchPromises);

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    triggerSingleDownload(zipUrl, zipFilename)
    
    setTimeout(() => URL.revokeObjectURL(zipUrl), 2000);
  } catch (error) {
    console.error('Erreur lors de la génération du zip:', error);
  } finally {
  }
}

function setupDownloadButtons() {
  const downloadSelectedBtn = document.getElementById('btn-download-selected');
  const checkboxes = document.querySelectorAll('.logo-checkbox');

  downloadSelectedBtn.addEventListener('click', () => {
    const selected = Array.from(checkboxes).filter((cb) => cb.checked).map((cb) => ({
        url: cb.dataset.url,
        filename: cb.dataset.filename,
      }));
    downloadFilesAsZip(selected, 'CEDILLE-selection.zip', downloadSelectedBtn);
  });
}

// color palette
function setupColorPalette() {
  const blocks = document.querySelectorAll('.kit-color-block');

  blocks.forEach((block) => {
    block.addEventListener('click', () => {
      navigator.clipboard.writeText(block.dataset.hex);
      block.classList.add('copied');
      setTimeout(() => block.classList.remove('copied'), 1800);
    });
  });
}

// init
function initKitMedia() {
  setupLogoSelection();
  setupDownloadButtons();
  setupColorPalette();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initKitMedia);
} else {
  initKitMedia();
}
