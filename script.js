/* JavaScript: js/script.js */
function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Masukkan suhu Celsius terlebih dahulu");
        return;
    }
    let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    document.getElementById("explanation").innerHTML = `
        <strong>Penjelasan Konversi:</strong><br>
        - Formula: (°C × 9/5) + 32 = °F<br>
        - Langkah-langkah:<br>
          1. Kalikan ${celsius}°C dengan 9/5 → (${celsius} × 9/5) = ${(celsius * 9/5).toFixed(2)}<br>
          2. Tambahkan 32 → ${(celsius * 9/5).toFixed(2)} + 32 = ${fahrenheit.toFixed(2)}°F
    `;
}

function resetForm() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("explanation").innerText = "";
}

function reverseConversion() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Masukkan suhu Fahrenheit terlebih dahulu");
        return;
    }
    let celsius = (parseFloat(fahrenheit) - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("result").innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    document.getElementById("explanation").innerHTML = `
        <strong>Penjelasan Konversi:</strong><br>
        - Formula: (°F - 32) × 5/9 = °C<br>
        - Langkah-langkah:<br>
          1. Kurangkan ${fahrenheit}°F dengan 32 → (${fahrenheit} - 32) = ${(fahrenheit - 32).toFixed(2)}<br>
          2. Kalikan dengan 5/9 → ${(fahrenheit - 32).toFixed(2)} × 5/9 = ${celsius.toFixed(2)}°C
    `;
}