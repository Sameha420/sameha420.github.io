document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://tastefulventure.com/wp-content/uploads/2022/12/Gluten-Free-Chocolate-Chip-Banana-Bread_-4.jpg")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100
            image.height = 100
        })
    }

})