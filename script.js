$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation style 

    var typed=new Typed(".typing",{
        strings:["Frontend Devloper","Designer","Programmer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    var typed=new Typed(".typing1",{
        strings:["Frontend Devloper","Designer","Programmer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

})
function fom_btn(){
    var e=document.fom1.email.value;
    var f=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(e.match(f))
    alert("massege");
}