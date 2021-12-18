//dark mode
const darkMode = () => {
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(17, 17, 17) 0%,rgb(13, 14, 13) 51%,rgb(27, 27, 27) 100%)")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $("h2").css("color", "white")
  $("h3").css("color", "white")
  $("h4").css("color", "white")
  $("h6").css("color", "black")
  $("#losPagos div  ").css("background-color", "grey")
  $("#CentroMoron").css("background-color", "grey")
  $(".cArteles div").css("background-color", "black")
  $(".fOtitos").css("background-color", "black")
  $("#menu").css("background-color", "black")
  $("#menu ul li ").css("background-color", "black")
  $("#menu ul li a").css("color", "white")
  $("footer").css("background-color", "black")
  $("#elFooter").css("background-color", "black")
  $("#iConos i").css("color", "white")
  $("#losTratamientos").css("background-color", "black")
  $("#losTratamientos").css("background-color", "black")
  $("#iMportante").css("color", "black")

  localStorage.setItem("oScuro", "dark")
}

const ligthMode = () => {
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(244, 245, 245) 0%,rgb(243, 245, 243) 51%,rgb(245, 241, 244) 100%)")
  $("h1").css("color", "black")
  $("p").css("color", "black")
  $("h2").css("color", "black")
  $("h3").css("color", "black")
  $("h4").css("color", "black")
  $("#muchoEstilo").css("background-color", "white")
  $(".cArteles div").css("background-color", "white")
  $("#nombrepagina").css("color", "black")
  $("#subtitulo").css("color", "black")
  $(".fOtitos").css("background-color", "white")
  $("#menu").css("background-color", "white")
  $("#menu ul li ").css("background-color", "white")
  $("#menu ul li a").css("color", "black")
  $("footer").css("background-color", "grey")
  $("#elFooter").css("background-color", "grey")
  $("#iConos i").css("color", "black")
  $("#losTratamientos").css("background-color", "white")
  $("#losTratamientos").css("background-color", "white")
  localStorage.setItem("oScuro", "ligth")
}

$("#oScuro").on("click", () => {
  if (localStorage.getItem("oScuro") === "dark") {
      ligthMode()
  } else {
      darkMode()
  }
})