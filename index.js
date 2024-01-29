
document.addEventListener("DOMContentLoaded", () => {
    const themToggleBtn = document.querySelector(".btn")
    const currentThem = localStorage.getItem("them")


    if (currentThem) {
        applyThem(currentThem)
    }

    themToggleBtn.addEventListener("click", () => {
        const newThem = document.body.classList.contains("dark") ? "light" : "dark"
        applyThem(newThem)
        localStorage.setItem("them", newThem)
    })

    function applyThem(them) {
        document.body.classList.remove("dark", "light")
        document.body.classList.add(them)
    }
})


