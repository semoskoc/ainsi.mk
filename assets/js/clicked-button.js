// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".download-button-group a");
    
//     buttons.forEach(button => {
//         const link = button.getAttribute("href");
//         const storedState = sessionStorage.getItem(link);
        
//         if (storedState === "clicked") {
//             button.querySelector(".download-button-inner").classList.add("clicked-button");
//         }
        
//         button.addEventListener("click", function (event) {
//             button.querySelector(".download-button-inner").classList.add("clicked-button");
//             sessionStorage.setItem(link, "clicked");
//             window.open(link, "_blank"); // Open link in new tab
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".download-button-group a");
    
    buttons.forEach(button => {
        const link = button.getAttribute("href");
        const storedState = sessionStorage.getItem(link);
        
        if (storedState === "clicked") {
            button.querySelector(".download-button-inner").classList.add("clicked-button");
        }
        
        button.addEventListener("click", function (event) {
            button.querySelector(".download-button-inner").classList.add("clicked-button");
            sessionStorage.setItem(link, "clicked");
            window.open(link, "_blank"); // Open link in new tab
        });
    });

    // Clear session storage on page refresh
    window.addEventListener("beforeunload", function () {
        sessionStorage.clear();
    });
});

