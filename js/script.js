// Memory getting Element By Id
const memory8Gb = document.getElementById("8gb-memory");
const memory16Gb = document.getElementById("16gb-memory");

const extraMemoryCost = document.getElementById("extra-memory-cost");

// Storage getting Element By Id

const ssd256Gb = document.getElementById("256gb-ssd");
const ssd512Gb = document.getElementById("512gb-ssd");
const ssd1Tb = document.getElementById("1tb-ssd");

const extraStorageCost = document.getElementById("extra-storage-cost");


// Choose your Delivery option getting element by id

const freeCharge = document.getElementById("free-charge");
const deliveryCharge = document.getElementById("delivery-charge");

const deliveryChargeDisplay = document.getElementById("delivery-charge-display");

// Memory Onclick
memory8Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
});
memory16Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
});

// Storage Onclick
ssd256Gb.addEventListener('click', function () {
    extraStorageCost.innerText = '0';
});
ssd512Gb.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
});
ssd1Tb.addEventListener('click', function () {
    extraStorageCost.innerText = '180';
});

// Choose your delivery option onclick
freeCharge.addEventListener('click', function () {
    deliveryChargeDisplay.innerText = '0';
});
deliveryCharge.addEventListener('click', function () {
    deliveryChargeDisplay.innerText = '20';
});
