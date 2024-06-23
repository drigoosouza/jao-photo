export function navbar (){
  const buttonNavBar = document.querySelector(".btnNav")
  const sidebar = document.getElementById("sidebar")
  sidebar.classList.toggle("active")
  buttonNavBar.classList.toggle("active")
}