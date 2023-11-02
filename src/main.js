function scrollWindow(){
    let isScrolled = false;

    function handleScroll() {
      const scrollY = window.scrollY;
    
      if (scrollY > 200) {
        if (!isScrolled) {
        let header = document.querySelector("header");
          header.style.backgroundColor = "var(--navColor)";
          header.style.transition= "1s ease-in-out";
          header.style.boxShadow= "0 1rem 1rem rgba(0, 0, 0, .15)";
          isScrolled = true; 
        
        }
      } else {
        if (isScrolled) {
            let header = document.querySelector("header");
            header.style.backgroundColor = "transparent";
            header.style.boxShadow= "none"
            isScrolled = false;
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll);
}

function darkMode(){
    const darkMode = document.querySelector(".moon");
    const moon= document.querySelector(".sun")
    const body= document.body;
    const root= document.documentElement;
    let claro = true;
    darkMode.addEventListener("click", function(){
        if(claro){
            body.classList.toggle("dark-mode")
            darkMode.style.display= "none";
            moon.style.display= "inline-block";
            claro = false;
        }
    })
    moon.addEventListener('click', function(){
        if(!claro){
            body.classList.toggle("dark-mode")
            moon.style.display= "none";
            darkMode.style.display= "inline-block";
            claro = true;
        }
    })
}

function main(){
    darkMode();
    scrollWindow();
}

window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loader-wrapper').style.display = 'none';
        main();
    }, 1000);
});