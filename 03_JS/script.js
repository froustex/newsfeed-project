// Bouton menu
function buttonClick() {
  document.getElementById("myDropdown").classList.toggle("show")
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content")
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

// Search barre
function search() {
    // Récupère la valeur saisie dans la barre de recherche
    const searchValue = document.getElementById("searchInput").value;
    console.log("Search Value:", searchValue);
}
