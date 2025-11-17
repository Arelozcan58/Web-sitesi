// Bu kod, tüm sayfa yüklendiğinde çalışmaya başlar
document.addEventListener('DOMContentLoaded', () => {

    // 1. Hamburger Menü İşlevi
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Menüye 'active' sınıfını ekle/kaldır (Açıp kapatır)
        navLinks.classList.toggle('active');
        
        // Hamburger ikonuna 'active' sınıfını ekle/kaldır (X animasyonu için)
        hamburger.classList.toggle('active');
    });

    // 2. Karanlık Mod (Demo) İşlevi
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Bu satırın çalışması için html'deki id="darkModeToggle" doğru olmalı
    darkModeToggle.addEventListener('click', () => {
        // body elementine 'dark-mode' sınıfını ekle/kaldır
        document.body.classList.toggle('dark-mode');
        
        // Butonun ikonunu ve yazısını değiştir (Bonus)
        const icon = darkModeToggle.querySelector('.material-icons');
        if (document.body.classList.contains('dark-mode')) {
            icon.textContent = 'light_mode'; // Işık ikonu
        } else {
            icon.textContent = 'dark_mode'; // Karanlık ikonu
        }
    });

});
