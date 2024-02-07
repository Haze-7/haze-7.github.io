function toggleMenu() { 
  // targeting these 2 elements
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon"); /*select and use element on webpage */
  
  //when we click it, add or remove open class in element/ toggles(styling)
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}