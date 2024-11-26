function buttonScript(){
    var stripe = Stripe('');
    const donateButtons = [
    {selector: "#donate-button-10", priceID: "price_1OosPVFxSJt90dKDHltqa9lA"}, 
    {selector: "#donate-button-25", priceID: "price_1OouiiFxSJt90dKDqE1NiASu"},
    {selector: "#donate-button-50", priceID: "price_1OouiiFxSJt90dKDjAfLrV5m"},
    {selector: "#donate-button-100", priceID: "price_1OouiiFxSJt90dKDvPSDnYIW"},
    {selector: "#donate-button-250", priceID: "price_1OouiiFxSJt90dKDqbG0QoJv"},
    {selector: "#donate-button-other", priceID: "price_1OyMZPFxSJt90dKDtGN2j7rJ", custom: true},
    ];

    donateButtons.forEach(({selector, priceID, custom}) => {
        const button = document.querySelector(selector);
        button.addEventListener('click', function() {
        if (custom) {
        // If it's a custom amount, redirect to the custom donation page
            window.location.href = "";
        // test link
        // window.location.href = "https://buy.stripe.com/test_8wMdSG9S30vQ8dW4gp";
        } else {
        // Otherwise, initiate the Stripe Checkout process for the selected amount
            stripe.redirectToCheckout({
            lineItems: [{price: priceID, quantity: 1}],
            mode: 'payment',
            successUrl: '',
            cancelUrl: '',
            })
            .then(function (result) {
                if (result.error) {
                var displayError = document.getElementById('error-message');
                displayError.textContent = result.error.message;
            }
            });
        }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    buttonScript();

    const modal1 = document.querySelector(".modalCheckWrapper");
    const modal2 = document.querySelector(".modalDAFWrapper");
    const overlay1 = document.querySelector(".overlay1");
    const overlay2 = document.querySelector(".overlay2");
    const openModalBtn1 = document.querySelector("#btn-check");
    const openModalBtn2 = document.querySelector("#btn-DAF");
    const closeModalBtn1 = document.querySelector(".btn-close1");
    const closeModalBtn2 = document.querySelector(".btn-close2");


    const openModal1 = () => {
        modal1.classList.remove("hidden1");
        overlay1.classList.remove("hidden1");
    };

    const closeModal1 = () => {
        modal1.classList.add("hidden1");
        overlay1.classList.add("hidden1");
    };


    const openModal2 = () => {
        modal2.classList.remove("hidden2");
        overlay2.classList.remove("hidden2");
    };

    const closeModal2 = () => {
        modal2.classList.add("hidden2");
        overlay2.classList.add("hidden2");
    };

    openModalBtn1.addEventListener("click", openModal1);
    closeModalBtn1.addEventListener("click", closeModal1);
    overlay1.addEventListener("click", closeModal1);

    openModalBtn2.addEventListener("click", openModal2);
    closeModalBtn2.addEventListener("click", closeModal2);
    overlay2.addEventListener("click", closeModal2);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal1.classList.contains("hidden1")) {
          closeModal1();
        }

        if (e.key === "Escape" && !modal2.classList.contains("hidden2")) {
            closeModal2();
          }
      });

});

