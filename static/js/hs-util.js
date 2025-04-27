$(document).ready(function (){
    $(".onlyNumber").on("change keyup paste", function(){
        var str = $(this).val();
        str = str.replace(/[^0-9]/g,"");
        $(this).val(str);
    })
})

function onlyNumber(target){
    var str = $(target).val();
    str = str.replace(/[^0-9]/g,"");
    $(target).val(str);
}

function onlyNumberFunc(str){
    return str.replace(/[^0-9]/g,"");
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

function scrolltoTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}