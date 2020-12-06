var person = 0,
    lengthSc = dataset[person].length,
    lastSc = lengthSc-1,
    viewportHeight = $(window).height(),
    panelHeight = viewportHeight - 110;  //minus navbar and progress bar

function init() { 
  $('.mugshot').click(function () {
    var num = $(this).attr('id').slice(-1);
    var url = "story-" + num + ".html";
    //to fix the issue of Safari on iOS can't open a new window in a new tab
    if($(window).width()<500){
      var win = window.open(url, '_self');  
    } else {var win = window.open(url, '_blank');}
    win.focus();
  });

  $('.btnLinkOut').click(function () {
    var url = "google.com";
    if($(window).width()<500){
      var win = window.open(url, '_self');  
    } else {var win = window.open(url, '_blank'); console.log("url = " + url);}
    win.focus();
  });
}

$(document).ready(function(){
  init();
}); 

// function sendData() {
//   $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
//     function(json) {
//       $.ajax({
//         type: 'POST',
//         url: 'https://docs.google.com/forms/d/e/1FAIpQLSegwawOsrNZ99Djqfhu-GOa30h4AB4wc236f3Qpqyb4pZo9aQ/formResponse',
//         data: { 
//           "entry.1624200825": selectedCloth,
//           "entry.1438712899": brands[selectedBrand].name,
//           "entry.163085213": materials[selectedMaterial].material,
//           "entry.418890974": countries[selectedCountry].country,
//           "entry.544836298": json.ip,
//           "entry.1664692061": document.referrer,
//         }
//       }); 
//     }
//   );   
// }