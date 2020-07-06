function btn() {
    window.location.href = "urls/maze-lvl-1.html"
}

$("#container-loader").on("animationend", () => {
    setTimeout(() => {
        $("#background-loader").fadeOut("slow")
    }, 1200)
})