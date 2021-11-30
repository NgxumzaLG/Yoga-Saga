var templateSource = document.querySelector(".colorTemplate").innerHTML;
var colorList = document.querySelector(".colors");
var brandList = document.querySelector(".brands");
var carList = document.querySelector(".cars");
// compile the template
var colorsTemplate = Handlebars.compile(templateSource);


axios.get('http://api-tutor.herokuapp.com/v1/colors')
.then(function(result) {
    colorList.innerHTML = colorsTemplate({display:result.data});
});

axios.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(result) {
    brandList.innerHTML = colorsTemplate({display:result.data});
});

axios.get('http://api-tutor.herokuapp.com/v1/cars')
.then(function(result) {
    // console.log(result.data);
    carList.innerHTML = colorsTemplate({displays:result.data});
    
});