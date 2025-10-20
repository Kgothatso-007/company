const form = document.querySelector('form');
const fields = form.querySelectorAll('input, textarea');

const validateField = function (field) {
    const error = field.type === 'radio' 
    ? field.closest('fieldset').querySelector('.error-message') 
    : field.parentElement.querySelector('.error-message');

    if (!field.validity.valid) {
        error.textContent = field.dataset.error || 'This field is required';
        return false;
    } else { 
        return true;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let isValid = true;
    
    fields.forEach(field => {
       const fieldValid = validateField(field);
        if (!fieldValid) {
            isValid = false;
        }
    });

})