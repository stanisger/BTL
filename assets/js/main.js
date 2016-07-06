 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  
  $('ul.tabs').tabs();

  $(".button-collapse").sideNav();


    $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
  

  // $('.dropdown-button').dropdown({
  //     inDuration: 300,
  //     outDuration: 225,
  //     constrain_width: false, // Does not change width of dropdown to that of the activator
  //     hover: false, // Activate on hover
  //     gutter: 0, // Spacing from edge
  //     belowOrigin: false, // Displays dropdown below the button
  //     alignment: 'left' // Displays dropdown with edge aligned to the left of button
  //   }
  // );

  $(".drop").click(function (){
    $(".drop").not(this).parent('li').children(".dropdown-menu").removeClass('show');
    $(this).parent('li').children(".dropdown-menu").toggleClass('show');
});

  $(".dropHover").hover(function (){
    $(".drop").not(this).parent('li').children(".dropdown-menu").removeClass('show');
    // $(this).parent('li').children(".dropdown-menu").toggleClass('show');
});




//$('.button-collapse').sideNav('hide');
  $(".drop").click(function () {
        $( this ).children(".deg").toggleClass("rotate180");
        //$( this ).toggleClass( "highlight" );        
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

  //open/close lateral filter
  $('.cd-filter-trigger').on('click', function(){
    triggerFilter(true);
  });
  $('.cd-filter .cd-close').on('click', function(){
    triggerFilter(false);
  });

  function triggerFilter($bool) {
    var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
    elementsToTrigger.each(function(){
      $(this).toggleClass('filter-is-visible', $bool);
    });
  }

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
  
  //close filter dropdown inside lateral .cd-filter 
  $('.cd-filter-block h4').on('click', function(){
    $(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
  })

  //fix lateral filter and gallery on scrolling
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
  });

  function fixGallery() {
    var offsetTop = $('.cd-main-content').offset().top,
      scrollTop = $(window).scrollTop();
    ( scrollTop >= offsetTop ) ? $('.cd-main-content').addClass('is-fixed') : $('.cd-main-content').removeClass('is-fixed');
  }

  /************************************
    MitItUp filter settings
    More details: 
    https://mixitup.kunkalabs.com/
    or:
    http://codepen.io/patrickkunka/
  *************************************/

  buttonFilter.init();
  $('.cd-gallery ul').mixItUp({
      controls: {
        enable: false
      },
      callbacks: {
        onMixStart: function(){
          $('.cd-fail-message').fadeOut(200);
        },
          onMixFail: function(){
            $('.cd-fail-message').fadeIn(200);
        }
      }
  });

  //search filtering
  //credits http://codepen.io/edprats/pen/pzAdg
  var inputText;
  var $matching = $();

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
  })();

  $(".cd-filter-content input[type='search']").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
        // Check to see if input field is empty
        if ((inputText.length) > 0) {            
            $('.mix').each(function() {
              var $this = $(this);
            
              // add item to be filtered out if input text matches items inside the title   
              if($this.attr('class').toLowerCase().match(inputText)) {
                  $matching = $matching.add(this);
              } else {
                  // removes any previously matched item
                  $matching = $matching.not(this);
              }
            });
            $('.cd-gallery ul').mixItUp('filter', $matching);
        } else {
            // resets the filter to show all item if input is empty
            $('.cd-gallery ul').mixItUp('filter', 'all');
        }
      }, 200 );
  });
});

/*****************************************************
  MixItUp - Define a single object literal 
  to contain all filter custom functionality
*****************************************************/
var buttonFilter = {
    // Declare any variables we will need as properties of the object
    $filters: null,
    groups: [],
    outputArray: [],
    outputString: '',
  
    // The "init" method will run on document ready and cache any jQuery objects we will need.
    init: function(){
      var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
      self.$filters = $('.cd-main-content');
      self.$container = $('.cd-gallery ul');
    
      self.$filters.find('.cd-filters').each(function(){
          var $this = $(this);
        
        self.groups.push({
            $inputs: $this.find('.filter'),
            active: '',
            tracker: false
        });
      });
      
      self.bindHandlers();
    },
  
    // The "bindHandlers" method will listen for whenever a button is clicked. 
    bindHandlers: function(){
      var self = this;

      self.$filters.on('click', 'a', function(e){
          self.parseFilters();
      });
      self.$filters.on('change', function(){
        self.parseFilters();           
      });
    },
  
    parseFilters: function(){
      var self = this;
   
      // loop through each filter group and grap the active filter from each one.
      for(var i = 0, group; group = self.groups[i]; i++){
        group.active = [];
        group.$inputs.each(function(){
          var $this = $(this);
          if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
            if($this.is(':checked') ) {
              group.active.push($this.attr('data-filter'));
            }
          } else if($this.is('select')){
            group.active.push($this.val());
          } else if( $this.find('.selected').length > 0 ) {
            group.active.push($this.attr('data-filter'));
          }
        });
      }
      self.concatenate();
    },
  
    concatenate: function(){
      var self = this;
    
      self.outputString = ''; // Reset output string
    
      for(var i = 0, group; group = self.groups[i]; i++){
          self.outputString += group.active;
      }
    
      // If the output string is empty, show all rather than none:    
      !self.outputString.length && (self.outputString = 'all'); 
  
      // Send the output string to MixItUp via the 'filter' method:    
    if(self.$container.mixItUp('isLoaded')){
        self.$container.mixItUp('filter', self.outputString);
    }
    }
};