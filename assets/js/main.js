 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  
  $('ul.tabs').tabs();

  $(".button-collapse").sideNav();


  


  $(".drop").click(function (){
    $(".drop").not(this).parent('li').children(".dropdown-menu").removeClass('show');
    $(this).parent('li').children(".dropdown-menu").toggleClass('show');
});

  $(".dropHover").hover(function (){
    $(".drop").not(this).parent('li').children(".dropdown-menu").removeClass('show');
    // $(this).parent('li').children(".dropdown-menu").toggleClass('show');
});


var step = 320;
var scrolling = false;

// Wire up events for the 'scrollUp' link:
$("#scrollUp").bind("click", function(event) {
    event.preventDefault();
    // Animates the scrollTop property by the specified
    // step.
    $("#content").animate({
        scrollTop: "-=" + step + "px"
    });
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("up");
}).bind("mouseout", function(event) {
    scrolling = false;
});


$("#scrollDown").bind("click", function(event) {
    event.preventDefault();
    $("#content").animate({
        scrollTop: "+=" + step + "px"
    });
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("down");
}).bind("mouseout", function(event) {
    scrolling = false;
});

function scrollContent(direction) {
    var amount = (direction === "up" ? "-=1px" : "+=1px");
    $("#content").animate({
        scrollTop: amount
    }, 1, function() {
        if (scrolling) {
            scrollContent(direction);
        }
    });
}



    var stepLeft = 25;
    var scrollingLeft = false;

    // Wire up events for the 'scrollUp' link:
    $("#scrollLeft").bind("click", function(event) {
        event.preventDefault();
        // Animates the scrollTop property by the specified
        // step.
        $("#content3").animate({
            scrollLeft: "-=" + stepLeft + "px"
        });
    }).bind("mouseover", function(event) {
        scrollingLeft = true;
        scrollContent("left");
    }).bind("mouseout", function(event) {
        scrollingLeft = false;
    });


    $("#scrollRight").bind("click", function(event) {
        event.preventDefault();
        $("#content3").animate({
            scrollLeft: "+=" + stepLeft + "px"
        });
    }).bind("mouseover", function(event) {
        scrollingLeft = true;
        scrollContent("right");
    }).bind("mouseout", function(event) {
        scrollingLeft = false;
    });

    function scrollContent(direction) {
        var amount = (direction === "left" ? "-=6px" : "+=6px");
        $("#content3").animate({
            scrollLeft: amount
        }, 1, function() {
            if (scrollingLeft) {
                scrollContent(direction);
            }
        });
    }
  $(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 10, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
   new WOW().init();

    var showAll = function(filter){
          $('.simplefilter-'+filter).trigger('click');
          console.log('asd')
        }
        $(function() {
            //Initialize filterizr with default options
            $('.filtr-container-1').filterizr();
            $('.filtr-container-2').filterizr();

            $('ul.tabs').children('li.tab').click(function(){
              var filter = $(this).data('filter');
              setTimeout(function(){showAll(filter);},100);
            });
        });
  $('.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: ($($anchor.attr('href')).offset().top - 50)
          }, 1250);
          event.preventDefault();
  });      

  //mobile version - detect click event on filters tab
  var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
    filter_tab_placeholder_default_value = 'Select',
    filter_tab_placeholder_text = filter_tab_placeholder.text();
  
  $('.cd-tab-filter li').on('click', function(event){
    //detect which tab filter item was selected
    var selected_filter = $(event.target).data('type');
      
    //check if user has clicked the placeholder item
    if( $(event.target).is(filter_tab_placeholder) ) {
      (filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
      $('.cd-tab-filter').toggleClass('is-open');

    //check if user has clicked a filter already selected 
    } else if( filter_tab_placeholder.data('type') == selected_filter ) {
      filter_tab_placeholder.text($(event.target).text());
      $('.cd-tab-filter').removeClass('is-open'); 

    } else {
      //close the dropdown and change placeholder text/data-type value
      $('.cd-tab-filter').removeClass('is-open');
      filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
      filter_tab_placeholder_text = $(event.target).text();
      
      //add class selected to the selected filter item
      $('.cd-tab-filter .selected').removeClass('selected');
      $(event.target).addClass('selected');
    }
  });

});