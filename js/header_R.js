var durum = true;
function headerMobile(){
    var nav = document.getElementById("nav-bar-hide");

    if (durum) {
        nav.style.top="10vw";
    }else{
        nav.style.top="-100vh";
        
    }
    durum = !durum;
  }