// document.addEventListener("DOMContentLoaded", function () {
//     const tableContainer = document.querySelector(".table-scroll");
 
//     tableContainer.addEventListener("wheel", function (event) {
//         const maxScrollLeft = tableContainer.scrollWidth - tableContainer.clientWidth;
//         const buffer = 5; // Small buffer for large screens
 
//         // If table has horizontal overflow, handle scrolling
//         if (maxScrollLeft > 0) {
//             if (
//                 (event.deltaY < 0 && tableContainer.scrollLeft <= 0) ||  // At the leftmost point
//                 (event.deltaY > 0 && tableContainer.scrollLeft + buffer >= maxScrollLeft) // At the rightmost point
//             ) {
//                 // Allow normal scrolling
//                 return;
//             } else {
//                 // Scroll horizontally instead of vertically
//                 event.preventDefault();
//                 tableContainer.scrollLeft += event.deltaY;
//             }
//         }
//     });
// });