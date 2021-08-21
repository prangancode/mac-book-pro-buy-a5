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

// Total Price 
const totalPrice = document.getElementById("total-price");

// Best Price
const bestPrice = document.getElementById('best-price');



// Total after applying coupon
const total = document.getElementById("total");

// Memory Onclick
memory8Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    updateTotal();
});
memory16Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    updateTotal();
});

// Storage Onclick
ssd256Gb.addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    updateTotal();
});
ssd512Gb.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    updateTotal();
});
ssd1Tb.addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    updateTotal();
});

// Choose your delivery option onclick
freeCharge.addEventListener('click', function () {
    deliveryChargeDisplay.innerText = '0';
    updateTotal();
});
deliveryCharge.addEventListener('click', function () {
    deliveryChargeDisplay.innerText = '20';
    updateTotal();
});

// Update Total 
function updateTotal() {
    const bestPriceUpdate = Number(bestPrice.innerText);
    const extraMemoryCostUpdate = Number(extraMemoryCost.innerText);
    const extraStorageCostUpdate = Number(extraStorageCost.innerText);
    const deliveryChargeDisplayUpdate = Number(deliveryChargeDisplay.innerText);
    const totalCost = bestPriceUpdate + extraMemoryCostUpdate + extraStorageCostUpdate + deliveryChargeDisplayUpdate;
    totalPrice.innerText = totalCost;
    total.innerText = totalCost;
    return totalCost;
}

