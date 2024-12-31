window.addEventListener("scroll",()=>{
     
    // change-links to active
    let sections=document.querySelectorAll("section");
    let links=document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    let currentsection=" ";
    sections.forEach((section)=>{
        let sectiontop=section.offsetTop;
        let sectionheight=section.offsetHeight;
        if(window.scrollY > sectiontop - 100 && window.scrollY < sectiontop + sectionheight){
            currentsection=section.getAttribute("id");
        }

    });
    links.forEach((link)=>{
        link.style.color="rgb(230, 233, 236)";
        if(link.getAttribute("href") ==`#${currentsection}`){
            link.style.color="rgb(255 193 7)";
        }
    })
    // navbar-convert-postion to-fixed
    let navbar=document.querySelector(".navbar");
    if(window.scrollY > 0){
        navbar.style.position="fixed"
        navbar.style.backgroundColor="#000";
    }else{
        navbar.style.position=" ";
    }
})
