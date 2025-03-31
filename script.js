



document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        console.log("Enter key pressed");
        document.body.style.backgroundColor = (Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    }
});
