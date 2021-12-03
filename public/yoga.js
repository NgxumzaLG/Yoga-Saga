
var card = document.querySelector(".card");
var theButton = document.querySelector('.btn');
var myButton = document.querySelector('.myButton');
var playerName = document.querySelector('.playerName');
var submitBtn = document.querySelector('.submitBtn');

var yogaSaga = YogaSaga();

// Compile Templates
var yogaTempSource = document.querySelector('.yogaTemplate').innerHTML;
var useYogaTemplate = Handlebars.compile(yogaTempSource);

var yogaList = [{src: './images/tree-pose.jpg', name: 'Bending Tree Pose'}, 
              {src: './images/michael-jackson-pose.jpg', name: 'Michael Jackson Pose'},
              {src: './images/disco-pose.jpg', name: 'Disco Pose'},
              {src: './images/Triangular-Pose.jpg', name: 'Triangle Forward Pose'},
              {src: './images/chair-yoga-pose.jpg', name: 'Chair Pose'},
              {src: './images/stand-Pose.jpg', name: 'Standing Pose'},
              {src: './images/Warrior-pose.jpg', name: 'Warrior Pose'},
              {src: './images/yoga-tree-pose.jpg', name: 'Yoga Tree Pose'}];
              

function poseSlideshow() {
  localStorage.clear();
  btnFunctions = [{button: 'btn-start', event: 'init()', name: 'Play'}]


  setTimeout(function() {
    card.innerHTML = `<h4><strong>GET READY TO MEMORIZE THE POSES!</strong></h4>`

  }, 0)

  setTimeout(function() {
    card.innerHTML = `<h4><strong>HERE WE GO!!</strong></h4>`

  }, 2500)

  setTimeout(function() {
    card.innerHTML  = useYogaTemplate({poseTemp: yogaList})

    var slideIndex = 0;
    showSlides();
    


    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        setTimeout(function() {
          location.reload()

        }, 2000);
        // slides.style.display = "none";
        
      } else {
        if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
      }
      
    }

  }, 5000)

}



