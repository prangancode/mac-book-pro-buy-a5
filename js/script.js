
const memory8Gb = document.getElementById("8gb-memory");
const memory16Gb = document.getElementById("16gb-memory");

const extraMemoryCost = document.getElementById("extra-memory-cost");


memory8Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = parseFloat('0');
})

memory16Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = parseFloat('180');
})