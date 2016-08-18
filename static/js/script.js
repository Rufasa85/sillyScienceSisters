$(document).ready(function() {
    console.log('Hello!');
    $('.flask').mouseenter(function(){
        $(this).effect('shake',{distance:10, times:2});
    })
})
