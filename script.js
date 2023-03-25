var x = document.getElementById("map");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    // let location = {
    //     lat : lat,
    //     long : long,
    // }
    // x.innerHTML = JSON.stringify(location);
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    // let loc = "https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed"
    let frame = document.getElementById("frame");
    if(localStorage.getItem("latitude") && localStorage.getItem("longitude")){
      let latitude  = localStorage.getItem("latitude");
      let longitude  = localStorage.getItem("longitude");

      console.log(latitude,longitude,"From LocalStorage");
    
      let loc = "https://maps.google.com/maps?q="+latitude+", "+longitude+"&z=15&output=embed";
      frame.setAttribute("src",loc);
    }else{
      localStorage.setItem("latitude",JSON.stringify(lat));
      localStorage.setItem("longitude",JSON.stringify(long));
      let latitude  = localStorage.getItem("latitude");
      let longitude  = localStorage.getItem("longitude");

      console.log(latitude,longitude,"From Internet");
    
      let loc = "https://maps.google.com/maps?q="+latitude+", "+longitude+"&z=15&output=embed";
      frame.setAttribute("src",loc);
    }


    

    

  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }


  function deleteLocation(){
    // localStorage.clear();
    localStorage.removeItem('latitude')
    localStorage.removeItem('longitude')
  }