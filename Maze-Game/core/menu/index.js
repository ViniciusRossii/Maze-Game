function btn() {
    window.location.href = "urls/maze-lvl-1.html"
}

$("#containerLoader").on("animationend", () => {
    $("#backgroundLoader").fadeOut("slow")
})