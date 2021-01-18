var storyNum,
    btnTitle,
    viewportWidth = $(window).width(),
    viewportHeight = $(window).height(),
    imgHeight;
    
var selectedData = [];

function init() { 
  if (viewportWidth<500){
    imgHeight = viewportHeight*0.55;
  } else {
    imgHeight = viewportHeight*0.67;
  }
  getUrl();

  $('.character-box').click(function () {
    console.log("clicked!");
    var storyUrl = $(this).attr('id');
    console.log("storyUrl = " + storyUrl);
    var storyFullUrl = '../' + storyUrl + '.html';
    console.log("storyFullUrl = " + storyFullUrl);
    var win = window.open(storyFullUrl, '_self');  
    win.focus();
  });

  selectedData = dataset[storyNum];
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

  $(document).on('click', '.btnMore', function(){
    $('.info-background, .info-box').fadeIn(100);
  });
  $(document).on('click', '.btnClose', function(){
    $('.info-background, .info-box').fadeOut(100);
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
  //populate the scenario panel
  $('.scenarioBox').append('<div class="scenario" id="'+ btnTitle +'"></div>');
  $('#' + btnTitle).html('<div class="scText" id="scText-'+ btnTitle +'">' + scData[0].text + '</div><div class="mb-1 scMore text-right" id="scMore-'+ btnTitle +'"></div><div class="scOption text-center" id="scOption-'+ btnTitle +'"></div>');
  
  //populate the button
  function makeBtn() {
    if(scData[0].optNum == 0) {
      $('#scOption-' + btnTitle).append('<button type="button" class="btn btn-light btn-sm btnOpt" data-id="'+ scData[0].target0 +'">'+ scData[0].opt0 +'</button>');
    } else {
      $('#scOption-' + btnTitle).append('<div class="row"><div class="col"><button type="button" class="btn btn-light btn-sm btnOpt" data-id="'+ scData[0].target0 +'">'+ scData[0].opt0 +'</button></div><div class="col"><button type="button" class="btn btn-light btn-sm btnOpt" data-id="'+ scData[0].target1 +'">'+ scData[0].opt1 +'</button></div></div>');
    }
  }

  //fade-out current scenario and fade-in next scenario
  function changeSc() {
    $('#' + scLast).fadeOut(500, function (){ 
      $('#' + btnTitle).fadeIn(500);
    });
  }

  //populate the ending content
  if(scData[0].opt0 == "The end"){
    var endData = jQuery.grep(selectedData, function (n, i) {
      return (n.id ==  "scenario-end");
    },false);
    var endLinks = endData[0].endLinks;
    var i;
    for (i = 0; i < endLinks.length; i++) {
      $('.list-links').append('<li class="list-group-item story-links">'+ endLinks[i] +'</li>');  
    }
    $('#' + scLast).fadeOut(500, function (){ 
      $('.scenarioBox').append('<div class="theEndBox"><div class="theEnd rounded h5 text-center p-2 mb-0"><span class="text-center downArrow"><i class="fas fa-chevron-down"></i></span>&nbsp;&nbsp;&nbsp;THE END&nbsp;&nbsp;&nbsp;<span class="text-center downArrow"><i class="fas fa-chevron-down"></i></span></div></div>');
      $('#' + btnTitle).fadeIn(500);
    });
    $('.box-lesson').html(endData[0].text);
    setTimeout(function() 
      {
        $('.btnOpt').css('display','none');
        $('.theEndBox').animate({opacity: 1}, 1000);
        $('.endPanel').fadeIn(1000);
      }, 1000);
    setTimeout(function() 
      {
        $('html, body').animate({
          scrollTop: $(".scImg").offset().top
        }, 1000);
      }, 3000);
  } else {
    //if not the ending scenario, populate the button and change the scenario
    makeBtn(); 
    changeSc()
  }

  //populate the image
  if(scData[0].optImg == 1) {
    $('.scImg').fadeOut(500, function (){ 
      $(".scImg").css('background-image','url('+ scData[0].img +')');
      $('.scImg').fadeIn(500);
    });
  }

  //populate the info box
  if(scData[0].more == 1) {
    $('#scMore-' + btnTitle).append('<button type="button" class="btn btn-danger btn-sm btnMore" id="info-'+ btnTitle +'"><i class="fa fa-info-circle fa-lg" aria-hidden="true"></i> Learn more</button>');
    $('.card-text').html(scData[0].info);
  } 
}

//Function to get journey num from url
function getUrl(){
    storyNum = window.location.pathname.slice(-6,-5);
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