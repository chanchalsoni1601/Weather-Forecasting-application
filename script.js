document.addEventListener("DOMContentLoaded", function () {
    // Initialize carousel
    const carousel = document.getElementById("carousel");
    let currentIndex = 0;

    function showSlide(index) {
        const slides = carousel.getElementsByTagName("img");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.childElementCount;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);

    // Filter books
    function filterBooks(genre) {
        const books = document.querySelectorAll(".book");

        books.forEach(book => {
            const bookGenre = book.getAttribute("data-genre");
            if (genre === "all" || bookGenre === genre) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    }

    // Display description of featured book
    const descriptions = [
        "Description of the featured book goes here 1.",
        "Description of the featured book goes here 2.",
        "Description of the featured book goes here 3."
    ];

    function updateDescription(index) {
        document.getElementById("book-description").innerText = descriptions[index];
    }

    // Initial setup
    showSlide(currentIndex);
    updateDescription(currentIndex);
    filterBooks("all");
});
