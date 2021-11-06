window.onload = function(){
    /* header */
    let $btn_srch = document.querySelector(".btn_srch");
    let $search = document.querySelector(".search");

    $btn_srch.addEventListener("click",function(){
        $search.classList.toggle('on');
    });
}