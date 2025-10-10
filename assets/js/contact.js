// Smooth Scroll für interne Links
document.querySelectorAll('a.nav-link, a.btn').forEach(link => {
    link.addEventListener('click', e => {
        if(link.getAttribute('href').startsWith('#')){
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
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

// Formular Handling
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    const formAlert = document.getElementById('form-alert');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Loading State
        btnText.textContent = 'Wird gesendet...';
        btnLoading.classList.remove('d-none');
        submitBtn.disabled = true;
        
        // FormData erstellen
        const formData = new FormData(contactForm);
        
        // Einfacher Fetch Request
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                showAlert(data.message, 'success');
                contactForm.reset(); // Formular zurücksetzen
            } else {
                showAlert(data.message, 'danger');
            }
        })
        .catch(error => {
            console.log('Fehler:', error);
            showAlert('❌ Netzwerkfehler. Bitte sende mir direkt eine Email an: rousseldongmo9@gmail.com', 'danger');
        })
        .finally(() => {
            // Button zurücksetzen
            btnText.textContent = 'Nachricht senden';
            btnLoading.classList.add('d-none');
            submitBtn.disabled = false;
        });
    });
    
    function showAlert(message, type) {
        formAlert.textContent = message;
        formAlert.className = `alert alert-${type} mt-3`;
        formAlert.classList.remove('d-none');
        
        setTimeout(() => {
            formAlert.classList.add('d-none');
        }, 5000);
    }
});