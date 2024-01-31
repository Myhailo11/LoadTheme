
document.addEventListener("DOMContentLoaded", () => {
    const colorSchemeToggleButton = document.querySelector(".btn");
    //=====Get reed of NULL using ternary operator====
    const currentColorScheme = localStorage.getItem("colorScheme") ? localStorage.getItem("colorScheme") : "light";
    console.log(`Vale from Local Storage:`, localStorage.getItem("colorScheme"));
    console.log(`Purefie Value even if null:`, currentColorScheme);
    //===============================================
    applyColorScheme(currentColorScheme);
    
    colorSchemeToggleButton.addEventListener("click", () => {
        const newColorScheme = document.body.classList.contains("dark") ? "light" : "dark";
        applyColorScheme(newColorScheme);
        //Saving the Scheme to the local Storage
        localStorage.setItem("colorScheme", newColorScheme);
        console.log(`Vale from Local Storage:`, localStorage.getItem("colorScheme"));
    });

    function applyColorScheme(colorScheme) {
        document.body.classList.remove("dark", "light")
        document.body.classList.add(colorScheme)
    }
})


