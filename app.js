const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click' , function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function dropHandler(event) {
    event.preventDefault();
    
    // Get the dropped files
    const files = event.dataTransfer.files;

    // Handle the files
    handleFiles(files);
}

function dragOverHandler(event) {
    event.preventDefault();
}

function handleFiles(files) {
    // Handle the dropped files
}









// Retrieve the selected image from local storage if it exists
let selectedImage = localStorage.getItem('selectedImage');


document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Convert the image file to a data URL
        const reader = new FileReader();
        reader.onload = function(e) {
            selectedImage = e.target.result;
            // Save the image data URL to local storage
            localStorage.setItem('selectedImage', selectedImage);
            // Display the selected image
            displayImage(selectedImage);
        };
        reader.readAsDataURL(file);
    }
});

function saveImage() {
    if (selectedImage) {
        // Perform further actions with the selected image if needed
        console.log("Selected image:", selectedImage);
    } else {
        console.error("No image selected.");
    }
}

function displayImage(imageData) {
    // Display the image in the image container
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${imageData}" alt="Selected Image">`;
}
// If an image exists in local storage, display it
if (selectedImage) {
    displayImage(selectedImage);
}
