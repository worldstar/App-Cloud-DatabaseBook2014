//地圖相關物件 (Map related objects)
var map;       //map object
var bounds;    //地圖顯示邊界	
var myLatlng;  //本地圖中心點座標物件
var markers;   //顯示多個地標的物件陣列
var infowindow;//資訊視窗

//在本程式主要相關所需變數 (The variables used for searching purpose.)
//設定要顯示幾個最近加油站 (To set how many nearest stations we want to record.)
var numberOfNearestStations;
//在下面的陣列，我們紀錄最近的加油站資料(We store the [longitute, Latitude, Address, distance] in the following array.)
var NearestStations;		

//路徑規劃 (Route planning)
var directionDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
    numberOfNearestStations = document.getElementById("mylist").value;
    var currentCoordinates = getCurrentLocation();	   
  	
    myLatlng = new google.maps.LatLng(currentCoordinates[0], currentCoordinates[1]);
    var myOptions = {
	zoom: 12,
	center: myLatlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP		  
    };	  
 
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	  
    var image = 'carRed.png';
    var marker = new google.maps.Marker({
	  position: myLatlng, 
	  map: map, 
	  icon: image,
	  title:"I'm here. "+currentCoordinates[0]+" "+ currentCoordinates[1]
    });

    directionsDisplay = new google.maps.DirectionsRenderer();//此物件需要在一開始就初始化      
    directionsDisplay.setMap(map); 
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));	

    initArray();
    startToFind();	 
    showResultsOnMap(map);
    hideRouteDiv();
}

  
  function initArray(){		   
	  NearestStations = new Array(numberOfNearestStations);
	  for(var i = 0 ; i < numberOfNearestStations ; i ++ )
	  {
	     NearestStations[i] = new Array(4);
		 NearestStations[i][3] = Number.MAX_VALUE;//Max value of the number	      	
	  }		
  }  

   //開始尋找 Start to find the nearest stations.
   function startToFind(){	      
	   for(var i = 0 ; i < CPCStationInformation.length ; i ++ )
	   {
	      	var distance = Math.abs(myLatlng.lat() - CPCStationInformation[i][1]) 
	           + Math.abs(myLatlng.lng() - CPCStationInformation[i][0]);
			
			if(i < numberOfNearestStations){//Write into the NearestStations array directly.
				NearestStations[i][0] = CPCStationInformation[i][0];
				NearestStations[i][1] = CPCStationInformation[i][1];
				NearestStations[i][2] = CPCStationInformation[i][2];
				NearestStations[i][3] = distance;	
			}
			else{
				var largestIndex = getLargestIndex();

	   			if(distance < NearestStations[largestIndex][3]){//寫入資料
					NearestStations[largestIndex][0] = CPCStationInformation[i][0];
					NearestStations[largestIndex][1] = CPCStationInformation[i][1];
					NearestStations[largestIndex][2] = CPCStationInformation[i][2];
					NearestStations[largestIndex][3] = distance;
	   			}				
			}		
	   }//end for		
   } 

   function getLargestIndex(){
	var tempDist = 0;
	var largestIndex = 0;
	for(var j = 0 ; j < numberOfNearestStations ; j ++ ){
	  if(tempDist  <= NearestStations[j][3]){
		//To keep the value and index.
		tempDist = NearestStations[j][3];
		largestIndex = j;					
	  }					
	}	
	return largestIndex;
   } 
       
   function showResultsOnMap(map){
      bounds = new google.maps.LatLngBounds();
      markers = new Array(numberOfNearestStations);

      infowindow = new google.maps.InfoWindow({
        'size': new google.maps.Size(292, 120)
      });

      for(var i = 0 ; i < numberOfNearestStations ; i ++ )
      {
	//Transform the array data into the LatLng object.
	var point = new google.maps.LatLng(NearestStations[i][1], NearestStations[i][0]);
	var image = 'CPCIcon.ico';
        var address = NearestStations[i][2]
	var contentMessage = "The top "+(i+1)+" station"+ address;

	markers[i] = new google.maps.Marker({
    		position: point,
        	map: map,
		icon: image,
        	title: contentMessage
  	});

	bounds.extend(point);//To extend the map bounds.
	map.fitBounds(bounds);//Important: Bind the bounds to the map object!

	var openInfoWindow = function(marker1, index, content) {
           return function() {	
		
		var markerLatLng = marker1.getPosition();
		var number = "Top "+(index+1);
		content = content +"<BR>" + number;
		content = content +" " +'<a href ="#" onClick="showRoute('+markerLatLng.lat()+','+markerLatLng.lng()+')">路徑規劃</a>';
		infowindow.setContent(content);//
		infowindow.open(map, marker1);
	  }
  	};

	google.maps.event.addListener(markers[i], 'click', openInfoWindow(markers[i], i, address));	

      }		
   }     

   function showRoute(lat, lng){		   
      var start = myLatlng;
      var end = new google.maps.LatLng(lat, lng);

      var request = {
        origin:myLatlng, 
        destination:end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };

      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
      });
	  showRouteDiv();
   } 
   
   function showRouteDiv(){
	  var mapdiv = document.getElementById("directionsPanel");
	  mapdiv.style.visibility = 'visible';
	  var useragent = navigator.userAgent;
	  
		
	  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
		mapdiv.style.width = '96%';
		mapdiv.style.left = '2%';	
	  } else {
		mapdiv.style.width = '50%';
		mapdiv.style.left = '20%';
	  }	   
   }
   
   function hideRouteDiv(){
	   document.getElementById("directionsPanel").style.visibility = 'hidden'
   }   