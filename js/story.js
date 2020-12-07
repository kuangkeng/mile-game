var person,
    btnTitle,
    viewportWidth = $(window).width(),
    viewportHeight = $(window).height(),
    scHeight = imgHeight + 60,
    imgHeight;
    
var selectedData = [];

function init() { 
  if (viewportWidth<500){
    imgHeight = viewportHeight*0.55;
  } else {
    imgHeight = viewportHeight*0.7;
  }
  getUrl();
  console.log("person = " + person);
  selectedData = dataset[person];
  $('.panel').css("height",viewportHeight + "px");
  $('.scImg').css("height",imgHeight + "px");
  $('.scImg').css('background-image','url('+ selectedData[0].img +')');
  $('#scText-scenario-0').html(selectedData[0].text);
  $('#scOption-scenario-0').append('<button type="button" class="btn btn-light btn-sm btnOpt" data-id="'+ selectedData[0].target0 +'">'+ selectedData[0].opt0 +'</button>');
  $('#scenario-0').fadeIn(500); 
  
  $(document).on('click', '.btnOpt', function(){
    $(window).scrollTop(0); 
    var btnTitle = $(this).attr('data-id');
    var scLast = $(this).parents('.scenario').attr('id');
    console.log("btnTitle = " + btnTitle + ", scLast = " + scLast);
	  makeSc(btnTitle, scLast);
	 });

  $('.btnLinkOut').click(function () {
    var url = "google.com";
    if(viewportWidth<500){
      var win = window.open(url, '_self');  
    } else {var win = window.open(url, '_blank'); console.log("url = " + url);}
    win.focus();
  });
}

$(document).ready(function(){
  init();
}); 

//Function to slide up and down the panel
function makeSc(btnTitle, scLast) {
  $(window).scrollTop(0);   
  var scData = jQuery.grep(selectedData, function (n, i) {
    return (n.id ==  btnTitle);
  },false);
  var endData = jQuery.grep(selectedData, function (n, i) {
    return (n.id ==  "scenario-end");
  },false);
  // console.log("selectedData = " + JSON.stringify(selectedData));
  // console.log("scData = " + JSON.stringify(scData));
  // console.log("scData.img = " + scData[0].img);
  //populate the scenario panel
  $('.scenarioBox').append('<div class="scenario" id="'+ btnTitle +'"></div>');
  $('#' + btnTitle).html('<div class="scText" id="scText-'+ btnTitle +'">' + scData[0].text + '</div><div class="scOption text-center" id="scOption-'+ btnTitle +'"></div>');
  
  //populate the button or ending text
  if(scData[0].optNum == 0) {
    $('#scOption-' + btnTitle).append('<button type="button" class="btn btn-light btn-sm btnOpt" data-id="'+ scData[0].target0 +'">'+ scData[0].opt0 +'</button>');
  } else {
    $('#scOption-' + btnTitle).append('<div class="row"><div class="col"><button type="button" class="btn btn-light btn-sm btnOpt" data-id="'+ scData[0].target0 +'">'+ scData[0].opt0 +'</button></div><div class="col"><button type="button" class="btn btn-light btn-sm btnOpt" data-id="'+ scData[0].target1 +'">'+ scData[0].opt1 +'</button></div></div>');
  }
  $('#' + scLast).fadeOut(500, function (){ 
    $('#' + btnTitle).fadeIn(500);
  });
  if(scData[0].optImg == 1) {
    $('.scImg').fadeOut(500, function (){ 
      // $(".scImg").attr('src', scData[0].img);
      $(".scImg").css('background-image','url('+ scData[0].img +')');
      $('.scImg').fadeIn(500);
    });
  }
  if(scData[0].opt0 == "The end"){
    $('#scOption-' + btnTitle).html('<div class="row"><div class="col"><button type="button" class="btn btn-light btn-sm btnOpt" id="btnReplay" onClick="window.location.reload()">Replay this character</button></div><div class="col"><a href="index.html" target="_blank"><button type="button" class="btn btn-light btn-sm btnOpt" id="btnOther">Play other characters</button></a></div></div>')
    setTimeout(function() 
      {$('.theEnd').fadeIn(1000);}, 1000);
  }
}

//Function to get journey num from url
function getUrl(){
    var journeyNum = window.location.pathname.slice(-6,-5);
    console.log("url = " + journeyNum);
    person = journeyNum;
}

// function facebook() {
// FB.ui({
//   method: 'share',
//   href: 'https://interactive.pri.org/2017/fair-fashion-quiz/customizedResult.php?result_share=' + encodeURIComponent(result_share), 
//   }, function(response){});
// }

// function tweet() {
//   var tweet_url = 'https://twitter.com/intent/tweet?related=pritheworld&text=';
//   tweet_url += encodeURIComponent(tweet_rating);
//   tweet_url += '&url=http://bit.ly/2ihF1Z9&via=pri&hashtags=flipyourlabel';
//   tweet_url += ' pic.twitter.com/ykChdQTScA';
//   window.open(tweet_url,'_blank');
// }

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