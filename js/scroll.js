window.onscroll = function() {scrollKontrol()};
    
    function scrollKontrol() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var x = document.getElementById("header");
      if(scrolled<=0){
        x.className = "saydam";
      }else{
        x.className = "saydam-not";
      }

    }
