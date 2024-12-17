// Fungsi untuk menangani klik pada tombol "Daftar"
function handleRegisterClick() {
    alert('Belum tersedia');
}

// Fungsi untuk menangani form login
function handleLogin(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Validasi sederhana
    if (username === '' || password === '') {
        alert('Username dan Password harus diisi!');
    } else {
        alert('Login Success');
    }
}

// Menambahkan event listener untuk tombol "Daftar"
const registerButtons = document.querySelectorAll('button[onclick="alert(\'belum tersedia\')"]');
registerButtons.forEach(button => {
    button.addEventListener('click', handleRegisterClick);
});

// Menambahkan event listener untuk form login
const loginForm = document.querySelector('.login-container form');
loginForm.addEventListener('submit', handleLogin);
