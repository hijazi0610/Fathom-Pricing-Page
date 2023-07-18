document.addEventListener('DOMContentLoaded', () => {

    const priceListItems = document.querySelectorAll('.plan-list-item')

    // Add click listener to price list items
    priceListItems.forEach(plan => {
        plan.addEventListener('click', () => handlePlanSelected(plan))
    })

    // Removes selected-plan class from all items in price list
    // Adds selected-plan class selected plan
    function handlePlanSelected(plan) {
        priceListItems.forEach(item => {
            item.classList.remove('selected-plan');
        });

        plan.classList.add('selected-plan')
    }

    const toggleShowMoreBtn = document.querySelector('#toggle-show-more-btn');
    const extendedPriceList = document.querySelector('#extended-plan-list');

    toggleShowMoreBtn.addEventListener('click', () => toggleShowMorePlans());

    function toggleShowMorePlans() {
        extendedPriceList.hidden = !extendedPriceList.hidden;

        if (extendedPriceList.hidden) {
            toggleShowMoreBtn.innerHTML = 'Show more plans';
        } else {
            toggleShowMoreBtn.innerHTML = 'Show less plans';
        }
    }

    const faqList = document.querySelectorAll('.faq-list-item');

    faqList.forEach(faq => {
        faq.addEventListener('click', () => handleFaqSelected(faq))
    })

    function handleFaqSelected(faq) {
        faqList.forEach(item => {
            item.classList.remove('selected-faq');
        })

        faq.classList.add('selected-faq')
    }

});

function showYearly() {
    // Get all the price elements
    const priceElements = document.querySelectorAll(".plan-list h2");
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
