// Ini javascript

document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tinggi = parseFloat(document.getElementById('input-tinggi-badan').value) / 100;
    const beratBadan = parseFloat(document.getElementById('input-berat-badan').value);
    const usia = parseInt(document.getElementById('input-usia').value);
    const hasilElement = document.getElementById('hasil');
    const penjelasan = document.getElementById('penjelasan');
    const penjelasan2 = document.getElementById('penjelasan2');
    const hasilbmi = document.getElementById('hasilbmi');
    const resiko = document.getElementById('resiko');
    const solusi = document.getElementById('solusi');

    const BMI = beratBadan / (tinggi * tinggi);
    hasilElement.innerHTML = BMI.toFixed(2);

    if (BMI < 18.5) {
        hasilbmi.innerHTML = "< 18.5";
        penjelasan.innerHTML = "Kekurangan berat badan";
        penjelasan2.innerHTML = "Anda berada dalam kategori kekurangan berat badan";
        resiko.innerHTML = `
        <br>Malnutrisi
        <br>Osteoporosis
        <br>Anemia
        <br>Sistem kekebalan tubuh yang lemah
    `;
        solusi.innerHTML = "Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        hasilbmi.innerHTML = "18.5 - 24.9";
        penjelasan.innerHTML = "Berat badan yang normal";
        penjelasan2.innerHTML = "Anda berada dalam kategori berat badan normal";
        resiko.innerHTML = `
        <br>Anda memiliki berat badan ideal
        <br>Good job!!
    `;
        solusi.innerHTML = "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        hasilbmi.innerHTML = "25.0 - 29.9";
        penjelasan.innerHTML = "Overweight atau berat badan berlebih";
        penjelasan2.innerHTML = "Anda berada dalam kategori overweight";
        resiko.innerHTML = `
        <br>Diabetes
        <br>Hipertensi
        <br>Sakit Jantung
        <br>Osteoarthritis
    `;
        solusi.innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        hasilbmi.innerHTML = "> 29.9";
        penjelasan.innerHTML = "Obesitas";
        penjelasan2.innerHTML = "Anda berada dalam kategori obesitas";
        resiko.innerHTML = `
        <br>Diabetes
        <br>Hipertensi
        <br>Sakit Jantung
        <br>Osteoarthritis
    `;
        solusi.innerHTML = "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
    }
    // JavaScript untuk mengatur tampilan setelah submit
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil semua elemen yang perlu dikontrol tampilannya
    const leftContent = document.querySelector('.main-content.left');
    const rightContent = document.querySelector('.main-content.right');

    // Tampilkan right content setelah submit
    rightContent.style.display = 'block';

    leftContent.style.paddingTop = '0';
    leftContent.style.paddingLeft = '0';
    leftContent.style.paddingRight = '0';
});

});
