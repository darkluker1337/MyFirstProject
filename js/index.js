window.onscroll = function() {scroll()}


function scroll(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("btn").style.display = "block";
        console.log("true")
    }else{
        document.getElementById("btn").style.display = "none";
        console.log('false')
    }
}



