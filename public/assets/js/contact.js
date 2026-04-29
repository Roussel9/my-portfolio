// Smooth Scroll für interne Links
document.querySelectorAll('a.nav-link, a.btn').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Karte initialisieren
function initMap() {
  const coordinates = [50.5870, 8.6777];
  const map = L.map('map').setView(coordinates, 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker(coordinates).addTo(map);
  marker.bindPopup("<b>Eichendorffring 117</b><br>35394 Gießen").openPopup();
}

document.addEventListener('DOMContentLoaded', function () {

    // Karte initialisieren
    initMap();

    // Elemente holen
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    const formAlert = document.getElementById('form-alert');

    function showAlert(message, type = 'success') {
        formAlert.textContent = message;
        formAlert.className = `alert mt-3 alert-${type}`;
        formAlert.classList.remove('d-none');
    }

    // Form Submission
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        btnText.textContent = 'Wird gesendet...';
        btnLoading.classList.remove('d-none');
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                showAlert('✅ Nachricht erfolgreich gesendet!', 'success');
                contactForm.reset();
            } else {
                console.error(result);
                showAlert('❌ Fehler beim Senden. Bitte versuche es erneut.', 'danger');
            }
        } catch (error) {
            console.error(error);
            showAlert('❌ Netzwerkfehler. Bitte erneut versuchen.', 'danger');
        }

        btnText.textContent = 'Nachricht senden';
        btnLoading.classList.add('d-none');
        submitBtn.disabled = false;
    });
});



