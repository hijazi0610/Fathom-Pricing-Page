const morePrice = document.querySelector('.more-price');
const buttonText = document.querySelector('.more-plan');
const monthly = document.querySelector('.price-overall-monthly');

function showMore() {
    // morePrice.hidden = false;
    morePrice.hidden = !morePrice.hidden;

    if(morePrice.hidden) {
        buttonText.innerHTML = 'Show more plans';
    } else {
        buttonText.innerHTML = 'Show less plans'
    }   
}

function showYearly() {
    // Get all the price elements
    const priceElements = document.querySelectorAll(".price-list h2");
    const button = document.querySelector('.free-month');
    
    // Loop through each price element
    priceElements.forEach(priceElement => {
        // Get the current price value
        let priceText = priceElement.textContent;
        
        if (priceText.includes("/m")) {
            // Switch to yearly price
            priceText = priceText.replace("/m", "/y");
            priceText = priceText.replace(/(\d+)/, "$1" + "0");

            button.innerHTML = 'Get 2 months free (switch to monthly)'

        } else {
            // Switch back to monthly price
            priceText = priceText.replace("/y", "/m");
            priceText = priceText.replace(/(\d+)0/, "$1");

            button.textContent = 'Get 2 months free (switch to yearly)'
        }
        
        // Update the price element with the new price
        priceElement.innerHTML = priceText;
    });
}