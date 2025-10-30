// Mendapatkan status awal input
let inputA = 0;
let inputB = 0;

// Fungsi untuk mengganti nilai input (0 ke 1 atau sebaliknya)
function toggleInput(inputName) {
    const button = document.getElementById('input' + inputName);

    if (inputName === 'A') {
        inputA = 1 - inputA; // Mengganti 0 jadi 1, atau 1 jadi 0
        button.textContent = inputA;
    } else if (inputName === 'B') {
        inputB = 1 - inputB;
        button.textContent = inputB;
    }
    
    // Memperbarui warna tombol
    button.style.backgroundColor = (button.textContent === '1') ? '#3cb371' : '#ff6347'; 
    
    // Setelah input diubah, hitung output
    hitungGerbangAND();
}

// Fungsi utama untuk menghitung Gerbang AND
function hitungGerbangAND() {
    let outputQ = 0; // Output default adalah 0
    const outputElement = document.getElementById('outputQ');

    // LOGIKA GERBANG AND: Output 1 JIKA dan HANYA JIKA kedua input (A DAN B) adalah 1
    if (inputA === 1 && inputB === 1) {
        outputQ = 1;
    } 
    // Jika tidak, output tetap 0

    // Tampilkan hasil dan atur warna
    outputElement.textContent = outputQ;
    outputElement.className = (outputQ === 1) ? 'output-satu' : 'output-nol';
}

// Inisialisasi tampilan awal
window.onload = function() {
    hitungGerbangAND();
};