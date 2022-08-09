 window.addEventListener('scroll', (e) => {
    var head = document.getElementById("head")
    var link = document.getElementsByClassName("link");
        if(window.scrollY > 60){
            head.style.backgroundColor = "white";
            head.style.opacity = "0.8";
            for (const links of link) {
                links.style.color = 'black';
              }
        }else{
            head.style.backgroundColor = "black";
            for (const links of link) {
                links.style.color = 'white';
              }
        }
    });