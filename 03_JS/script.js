/**************************************/
// Bouton menu
function buttonClick() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
/**************************************/
// Search barre
function search() {
  // Récupère la valeur saisie dans la barre de recherche
  const searchValue = document.getElementById("searchInput").value;
  console.log("Search Value:", searchValue);
}
/**************************************/
// Modifier pohoto de profil

function loadImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = document.querySelector(".profile_picture");
      document.querySelector("#nav_picture").src = event.target.result;
      image.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

/**************************************/
// News Articles Functions //
const buttonNewFeedBox = document.querySelector(".add-new-feed-box");
buttonNewFeedBox.addEventListener("click", () => {
  const containerFeed = document.querySelector(".all-feeds");
  const sectionFeed = document.querySelector(".feed");
  const newFeed = sectionFeed.cloneNode(true);
  containerFeed.appendChild(newFeed);
});

const likeIcon = document.querySelector(".like-icon");

likeIcon.addEventListener("click", function (event) {
  likeIcon.classList.toggle("active");
});

// News Articles Functions //
