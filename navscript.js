window.addEventListener("scroll", (e) => {
  var head = document.getElementById("head");
  var link = document.getElementsByClassName("link");
  var burger_div = document.getElementsByClassName("checkbox__div");
  var burger_nav = document.getElementById("burger-nav");
  var burger_a = document.getElementsByClassName("a_burger")
  if (window.scrollY > 60) {
    head.style.backgroundColor = "white";
    head.style.opacity = "0.8";
    burger_nav.style.backgroundColor = "white";
    for(const a_class of burger_a){
      a_class.style.color = "black";
    }
    for(const burger of burger_div){
      burger.style.backgroundColor = "black";
    }
    for (const links of link) {
      links.style.color = "black";
    }
  } else {
    burger_nav.style.backgroundColor = "black";
    for(const a_class of burger_a){
      a_class.style.color = "white";
    }
    for(const burger of burger_div){
      burger.style.backgroundColor = "white";
    }
    head.style.backgroundColor = "black";
    for (const links of link) {
      links.style.color = "white";
    }
  }
});
