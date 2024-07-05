// JavaScript logic for countdown timer and interaction

// Function to start the countdown
function startCountdown(duration, displayElement) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = Math.floor(timer / (60 * 60 * 24));
        hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        displayElement.querySelector('#days').textContent = days;
        displayElement.querySelector('#hours').textContent = hours;
        displayElement.querySelector('#minutes').textContent = minutes;
        displayElement.querySelector('#seconds').textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Initialize the countdown with 5 days (in seconds)
window.onload = function () {
    const fiveDaysInSeconds = 5 * 24 * 60 * 60; // 5 days
    const countdownElement = document.getElementById('countdown');
    startCountdown(fiveDaysInSeconds, countdownElement);
};

// Function to handle Binance Smart Chain button click
document.getElementById('bnbButton').addEventListener('click', function () {
    document.getElementById('bnbRate').style.display = 'block';
    document.getElementById('bnbBuyBox').style.display = 'block';
    document.getElementById('solRate').style.display = 'none';
    document.getElementById('solBuyBox').style.display = 'none';
    document.getElementById('bnbOwnerAddress').style.display = 'block';
    document.getElementById('solOwnerAddress').style.display = 'none';
});

// Function to handle Solana Network button click
document.getElementById('solButton').addEventListener('click', function () {
    document.getElementById('solRate').style.display = 'block';
    document.getElementById('solBuyBox').style.display = 'block';
    document.getElementById('bnbRate').style.display = 'none';
    document.getElementById('bnbBuyBox').style.display = 'none';
    document.getElementById('solOwnerAddress').style.display = 'block';
    document.getElementById('bnbOwnerAddress').style.display = 'none';
});

// Function to update ECT equivalent
function updateECTEquivalent(amountInput, rate, equivalentInput, buyBox) {
    const amount = parseFloat(amountInput.value);
    if (amount >= parseFloat(amountInput.min)) {
        const equivalent = amount * rate;
        equivalentInput.value = equivalent.toFixed(2);
        buyBox.querySelector('.buy-token').style.display = 'block';
    } else {
        equivalentInput.value = '';
        buyBox.querySelector('.buy-token').style.display = 'none';
    }
}

// Function to handle BNB amount input
document.getElementById('bnbAmount').addEventListener('input', function () {
    updateECTEquivalent(
        this,
        5000000, // BNB to ECT rate
        document.getElementById('bnbEquivalentECT'),
        document.getElementById('bnbBuyBox')
    );
});

// Function to handle SOL amount input
document.getElementById('solAmount').addEventListener('input', function () {
    updateECTEquivalent(
        this,
        1250000, // SOL to ECT rate
        document.getElementById('solEquivalentECT'),
        document.getElementById('solBuyBox')
    );
});

// Function to handle buy token button click
document.querySelectorAll('.buy-token').forEach(button => {
    button.addEventListener('click', function () {
        const network = this.getAttribute('data-network');
        document.getElementById(network + 'OwnerAddress').style.display = 'block';
    });
});