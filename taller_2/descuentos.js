let priceWithDiscount = (originalPrice, discount) => {
    let discountRate = discount / 100;
    return originalPrice - (originalPrice*discountRate);
};

function calculateFinalPrice(params) {
    let originalPrice = document.getElementById('originalPrice').value;
    let discount = document.getElementById('discount').value;
    let finalPrice = priceWithDiscount(originalPrice, discount);
    document.getElementById('response').innerText = `El precio con descuento son $${finalPrice}`;
}