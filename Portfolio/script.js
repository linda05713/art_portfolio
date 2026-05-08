// DOM QUERIES
const buttons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

// FUNCTION
function filterGallery(category) {

  galleryItems.forEach(item => {

    if (category === "all") {
      item.style.display = "block";
    }

    else if (item.classList.contains(category)) {
      item.style.display = "block";
    }

    else {
      item.style.display = "none";
    }

  });

}

// EVENT LISTENERS
buttons.forEach(button => {

  button.addEventListener("click", () => {

    const category = button.dataset.filter;
    filterGallery(category);

  });

});