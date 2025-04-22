function submitForm(formId) {
    var formData = new FormData(document.getElementById(formId));
    var requestService = "";
    var requestDetails = "";
    var successMessage = document.getElementById(formId + '-success');
    var errorMessage = document.getElementById(formId + '-error');
    var form = document.getElementById(formId);
    const apiKey = document.querySelector('meta[name="apiKey"]').content;
    const link = document.querySelector('meta[name="link"]').content;
    var loadingMember = document.getElementById("loading-member");
    var loadingPartnership = document.getElementById("loading-partnership");
    var loading = formId === 'member-form' ? loadingMember : loadingPartnership;

    if (!form.checkValidity()) {
      form.reportValidity(); 
      return; 
    }
    
    if (formId === 'member-form') {
      requestService = "New member submission";
      requestDetails = "\nFormation: " + formData.get('formation') +
                       "\nProgramme: " + formData.get('programme') +
                       "\nIntérêts: " + formData.get('interets');
    } else if (formId === 'partnership-form') {
      requestService = "Partnership submission";
      requestDetails = "\nName: " + formData.get('nom') +
                       "\nEmail: " + formData.get('courriel') +
                       "\nCompany: " + formData.get('compagnie') +
                       "\nMessage: " + formData.get('messageCompagnie');
    }
    

    var serviceDetails = {
      "Sender": {
        "FirstName": formData.get('nom'),
        "LastName": "", 
        "Email": formData.get('courriel')
      },
      "RequestService": requestService, 
      "RequestDetails": requestDetails
    };
    
    loading.style.display = 'inline-block';
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      },
      body: JSON.stringify(serviceDetails)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      successMessage.style.display = 'block'; 
      errorMessage.style.display = 'none'; 
      return response.text().then(text => text ? JSON.parse(text) : {});
    })
    .then(data => {
      console.log('Form submitted successfully:', data);
      form.reset(); 
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      errorMessage.style.display = 'block'; 
      successMessage.style.display = 'none';
    })
    .finally(() => {
      loading.style.display = 'none'; 
    });
  }