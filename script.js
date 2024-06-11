function getQueryParam(param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}

var nama = getQueryParam('to');

document.addEventListener("DOMContentLoaded", () => {
    const toParam = getQueryParam('to');

    if (toParam) {
        document.getElementById('no1').style.display = 'block';
        document.getElementById('noparam').style.display = 'none';
    } else {
        document.getElementById('no1').style.display = 'none';
        document.getElementById('noparam').style.display = 'block';
    }
});

function lanjut2() {
    var namabesar = nama.toUpperCase();
    document.getElementById('no1').style.display = 'none';
    document.getElementById('no2').style.display = 'block';
    document.getElementById('h1indivno2').innerHTML = 'SELAMAT ULANG TAHUN ' + namabesar + '!';
    playMusic();
}

function lanjut3() {
    document.getElementById('no2').style.display = 'none';
    document.getElementById('no3').style.display = 'block';
}

function lanjut4() {
    document.getElementById('no3').style.display = 'none';
    document.getElementById('no4').style.display = 'block';
}

function lanjut5() {
    document.getElementById('no4').style.display = 'none';
    document.getElementById('no5').style.display = 'block';
}

// cursor ke gambar
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".cursordisplay");

    images.forEach(img => {
        img.addEventListener("mousemove", (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            const alpha = pixel[3];
            
            if (alpha === 0) {
                img.style.cursor = 'default';
            } else {
                img.style.cursor = 'pointer';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("theaudio");
    audio.loop = true; // Mengatur properti loop ke true
});

function playMusic() {
    const audio = document.getElementById("theaudio");
    audio.play();
}
