const form = document.querySelector('form');
const successMessage = document.querySelector('#form');
form.addEventListener('submitt', (e) => {
    e.preventDefault();
    document.querySelector('.alert').style.display = 'block'
} );