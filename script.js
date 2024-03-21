// News Part Functions //
const buttonNewFeedBox = document.querySelector(".add-new-feed-box");
buttonNewFeedBox.addEventListener("click",() => {
const containerFeed = document.querySelector(".all-feeds");
const sectionFeed = document.querySelector(".feed");
const newFeed = sectionFeed.cloneNode(true);
containerFeed.appendChild(newFeed);
}) 


const likeIcon = document.querySelector(".like-icon")
     
      likeIcon.addEventListener("click", function (event) {
                
        likeIcon.classList.toggle("active")
      });



// News Part Functions //