// Modifier pohoto de profil

function loadImage(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = document.querySelector('.profile_picture')
        document.querySelector("#nav_picture").src = event.target.result
        image.src = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }