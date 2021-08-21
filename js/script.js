// Memory get Element By Id
const memory8Gb = document.getElementById("8gb-memory");
const memory16Gb = document.getElementById("16gb-memory");

const extraMemoryCost = document.getElementById("extra-memory-cost");

// Storage get get Element By Id

const ssd256Gb = document.getElementById("256gb-ssd");
const ssd512Gb = document.getElementById("512gb-ssd");
const ssd1Tb = document.getElementById("1Tb-ssd");

const extraStorageCost = document.getElementById("extra-storage-cost");


// Memory Onclick
memory8Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = parseFloat('0');
});
memory16Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = parseFloat('180');
});

// Storage Onclick
ssd256Gb.addEventListener('click', function () {
    extraStorageCost.innerText = parseFloat('0');
});
ssd512Gb.addEventListener('click', function () {
    extraStorageCost.innerText = parseFloat('100');
});
ssd1Tb.addEventListener('click', function () {
    extraStorageCost.innerText = parseFloat('180');
});