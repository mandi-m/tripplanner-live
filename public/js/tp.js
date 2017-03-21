function Day(){
  this.hotel = null;
  this.restaurants = [];
  this.activities = [];
}

Day.prototype.addHotel = function(hotel){
  this.hotel = hotel;
}

Day.prototype.removeHotel = function(){
  this.hotel = null;
}

Day.prototype.addRestaurant = function(restaurant){
  this.restaurants.push(restaurant);
}

Day.prototype.addActivities = function(activity){
  this.activities.push(activity);
}


var user = [];

var day1 = new Day();
user.push(day1);

$('#hotelpick').on('click', function(e){
    const hotelName = $(this).prev().val();
    day1.addHotel(hotelName);
    $("#my-hotel").text(hotelName);
})

$('#delete-hotel').on('click', function(e){
    day1.removeHotel();
    $("#my-hotel").text(' ');
})

$('#day-add').on('click', function(e){
    var day2 = new Day();
    $('.day-buttons').append.last().prev().('<button class="btn btn-circle day-btn">2</button>');
})






// document.getElementById("hotelpick").addEventListener('click', function(event){
//   console.dir(event);

//   // day1.addHotel(e.data);
//   // console.log(day1);

// });
