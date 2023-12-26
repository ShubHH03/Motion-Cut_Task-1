const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".plan-text2");
const professionalPrice = document.querySelector(".plan2-text2");
const businessPrice = document.querySelector(".plan3-text2");
const planDuration = document.querySelectorAll(".plan-duration");
const currencyDropdown = document.querySelector("#currency-dropdown");

// Exchange rate: 1 USD = 71.50 INR (Replace with the actual exchange rate)
const exchangeRate = 83.17;

plansSwitch.addEventListener("change", () => {
    updatePrices();
});

currencyDropdown.addEventListener("change", () => {
    updatePrices();
});

function updatePrices() {
    const currencySymbol = currencyDropdown.value;
    const basic = plansSwitch.checked ? "₹4999" : "₹499";
    const professional = plansSwitch.checked ? "₹9999" : "₹999";
    const business = plansSwitch.checked ? "₹14999" : "₹1499";

    basicPrice.innerText = convertToCurrency(basic, currencySymbol);
    professionalPrice.innerText = convertToCurrency(professional, currencySymbol);
    businessPrice.innerText = convertToCurrency(business, currencySymbol);

    const duration = plansSwitch.checked ? "Per Year" : "Per Month";
    planDuration.forEach(p => {
        p.innerText = duration;
    });
}

function convertToCurrency(price, currencySymbol) {
    const amount = parseInt(price.replace(/[^\d]/g, ''));
    if (currencySymbol === "₹") {
        return `₹${amount.toFixed(2)}`;
    } else if (currencySymbol === "$") {
        const usdAmount = amount / exchangeRate;
        return `$${usdAmount.toFixed(2)}`;
    }
    return price;
}
