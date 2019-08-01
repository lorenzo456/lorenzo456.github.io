url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
token = "1140564748.4005e9b.f72d0bce909044aab43eaca760c4a8ae";
apiUrl = url + token;
jsonText = "";

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        jsonText = this.responseText;
        var json = jsonText;
        obj = JSON.parse(json);
        var count = obj.data.length;
        tempText = "";
        var i;
        for (i = 0; i < count; i++) { 
        tempText += " lat: " + obj.data[i].location.latitude + " long: " + obj.data[i].location.longitude;
        tempText += " IMG: <a href= \" " + obj.data[i].images.standard_resolution.url + "\"> this<a>" + " DESC: " +"This is image " + i +"<br>";
        AddImg(obj.data[i].location.latitude,obj.data[i].location.longitude,obj.data[i].images.standard_resolution.url, "This is image " + i);
        }
       
        //document.getElementById("test").innerHTML = tempText;
      }
    };
    xhttp.open("GET", apiUrl, true);
    xhttp.send();
  }
  var realMap;

  function initMap() {
    var rot = {lat: 51.957074646794, lng: 4.5587763571458};
    realMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: rot
    });
    loadDoc();
  }

  function AddImg(imgLat, imgLon, imgUrl, imgdesc) {
    var rot = {lat: imgLat, lng: imgLon};
    map = realMap;
    var contentString = '<div id="' + imgdesc +'">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<img src=" ' + imgUrl +'" alt="Test" width="250" height="300">' +
        '<p>My App is almost working</p>'+
        '</div>';
  
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
  
    var marker = new google.maps.Marker({
      position: rot,
      map: map,
      title: imgdesc
    });
  
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
