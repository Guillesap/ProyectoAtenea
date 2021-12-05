//dark mode
const darkMode = () => {
    $("body").css("background", "-webkit-linear-gradient(45deg, rgb(17, 17, 17) 0%,rgb(13, 14, 13) 51%,rgb(27, 27, 27) 100%)")
    $("h1").css("color", "white")
    $("p").css("color", "white")
    $("h2").css("color", "black")
    $("h3").css("color", "white")
    $("#muchoEstilo").css("background-color", "black")
    $(".cArteles div").css("background-color", "black")
    $(".cArteles div").css("border-color", "white")
    $("#nombrepagina").css("color", "white")
    $("#subtitulo").css("color", "white")
    $(".fOtitos").css("background-color", "black")
    $("#menu").css("background-color", "grey")
    $("#menu ul li ").css("background-color", "grey")
    $("footer").css("background-color", "grey")
    localStorage.setItem("oScuro", "dark")
  }
  
  const ligthMode = () => {
    $("body").css("background", "-webkit-linear-gradient(45deg, rgb(244, 245, 245) 0%,rgb(243, 245, 243) 51%,rgb(245, 241, 244) 100%)")
    $("h1").css("color", "black")
    $("p").css("color", "black")
    $("h2").css("color", "black")
    $("h3").css("color", "black")
    $(".cArteles div").css("background-color", "white")
    $(".cArteles div").css("border-color", "black")
    $("#nombrepagina").css("color", "black")
    $("#subtitulo").css("color", "black")
    $("#elFooter").css("color", "white")
    $(".fOtitos").css("background-color", "white")
    $("#menu").css("background-color", "white")
    $("#menu").css("border-color", "black") 
    $("#menu ul li ").css("background-color", "white")
    $("footer").css("background-color", "white")
    $("#elFooter").css("color", "grey")
    $("#elFooter").css("border-color", "grey")
    localStorage.setItem("oScuro", "ligth")
  }
  
  
  $("#oScuro").on("click", () => {
    if (localStorage.getItem("oScuro") === "dark") {
        ligthMode()
    } else {
        darkMode()
    }
  })