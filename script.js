function toggleMode() {
  const html = document.documentElement //acessa o html
  const img = document.querySelector("#profile img") // acessando a img

  //1° caso usando if
  //classlist lista as classes do html
  //contains verifica a class
  //remode tira e add adiciona

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //2° caso usando o toggle do js

  html.classList.toggle("light")

  //trocando a img
  //setAtribute acessa atributos da tag html
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "yury chagas sorrindo e de oculos escuro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "yury chagas mexendo no notebook vaio")
  }
}
