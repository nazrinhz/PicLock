const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

const unsplashApiUrl1= "https://api.unsplash.com/search/photos?query=";
const unsplashApiUrl2= "&client_id=TaLA-OPuq61iCklOpWrwpiKeUSypXWOXhpcuo-p9iLo";
const unsplashApiRandom="https://api.unsplash.com/random";

var stringArray = new Array();
// Get the data from local storage
var data = localStorage.getItem('datajsoned');

// Parse the JSON string back into an array
var imagesArray = JSON.parse(datajsoned);

//edit from here
imagesArray.forEach(myChoices);
var imgArray;
function myChoices(search){
  fetch(unsplashApiUrl+search+unsplashApiUrl2)
    .then(response => response.json())
    .then(data => {
      results.innerHTML = "";
      data.results.forEach(photo => {
        imgArray.push(photo);
        const img = document.createElement("img");
        img.src = photo.urls.small;
        results.appendChild(img);
        img.addEventListener("click", (event) => {
            // Your code to handle the click event on the image
            stringArray.push(photo.alt_description);
            // console.log(stringArray);
            img.style.opacity=0.5;
          });
          
      });
    });
  }

  const unsplashApi = "https://api.unsplash.com/photos/random";
      const accessKey = "TaLA-OPuq61iCklOpWrwpiKeUSypXWOXhpcuo-p9iLo"; // Replace with your Unsplash API access key
      const imageContainer = document.getElementById("image-container");
      const imageArray = [];

  async function getRandomImage() {
    const response = await fetch(`${unsplashApi}?client_id=${accessKey}`);
    const data = await response.json();
    const imageUrl = data.urls.regular;

    // const image = new Image();
    // image.src = imageUrl;
    // image.alt = data.alt_description;
    // image.style.width = "300px";
    // image.style.height = "300px";
    // image.style.margin = "10px";

    imageArray.push(image);
    imageContainer.appendChild(image);
  }

  for (let i = 0; i < 15; i++) {
    getRandomImage();
  }

  for (let i = 0; i < array.size(); i++) {
    imageArray.push(array[i]);
  }  


