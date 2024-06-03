// app.js

// Şifreleme Fonksiyonu
function encryptMessage(message, publicKey) {
    // Web Crypto API kullanarak şifreleme işlemi
    // Örnek olarak basit bir simülasyon
    return btoa(message + publicKey); // Base64 şifreleme
}

// Deşifreleme Fonksiyonu
function decryptMessage(encryptedMessage, privateKey) {
    // Web Crypto API kullanarak deşifreleme işlemi
    // Örnek olarak basit bir simülasyon
    return atob(encryptedMessage).replace(privateKey, ''); // Base64 deşifreleme
}

// Mesaj Gönderme İşlevi
function sendMessage() {
    const message = document.getElementById('message').value;
    const publicKey = document.getElementById('publicKey').value;
    const encryptedMessage = encryptMessage(message, publicKey);

    // Mesajı blok zincirine gönder
    // Bu örnekte yerel depolama kullanıyoruz
    let blockchain = JSON.parse(localStorage.getItem('blockchain')) || [];
    blockchain.push(encryptedMessage);
    localStorage.setItem('blockchain', JSON.stringify(blockchain));
}

// Mesajları Tarama İşlevi
function scanMessages() {
    const privateKey = document.getElementById('privateKey').value;
    let blockchain = JSON.parse(localStorage.getItem('blockchain')) || [];
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';

    blockchain.forEach(encryptedMessage => {
        const decryptedMessage = decryptMessage(encryptedMessage, privateKey);
        messagesDiv.innerHTML += `<p>${decryptedMessage}</p>`;
    });
}
