function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/myavatar-light.png")
    img.setAttribute("alt", "Foto Perfil light")
  } else {
    img.setAttribute("src", "./assets/myavatar.png")
    img.setAttribute("alt", "Foto Perfil dark")
  }
}
