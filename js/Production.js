function imgshow(){
    let ImgOne = document.getElementById('JsImgOne')
    let ImgTwo = document.getElementById('JsImgTwo')
    let ImgPositionOne = ImgOne.getBoundingClientRect()
    let ImgPositionTwo = ImgTwo.getBoundingClientRect()


    if(ImgPositionOne.bottom < 730){
        ImgOne.style.transition = 'all 1s';
        ImgOne.style.opacity = '1';
        ImgOne.style.transform = 'rotate(1turn)';
    }
    if(ImgPositionTwo.bottom < 730){
        ImgTwo.style.transition = 'all 1s';
        ImgTwo.style.opacity = '1';
        ImgTwo.style.transform = 'rotate(1turn)';
        
    }
    
}
window.onload = function(){
    imgshow();
    acsii();
    product();
}


function scroll(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("btn").style.display = "block";
    }else{
        document.getElementById("btn").style.display = "none";
    }
}

function turn(){
    let ImgThree = document.getElementById('JsImgThree')
    let ImgFour  = document.getElementById('JsImgFour')
    let ImgFive  = document.getElementById('JsImgFive')  

    let ImgPositionThree = ImgThree.getBoundingClientRect()
    let ImgPositionFour = ImgFour.getBoundingClientRect()
    let ImgPositionFive = ImgFive.getBoundingClientRect()
    

    if(ImgPositionThree.bottom < 730){
        ImgThree.style.transition = 'all 1s';
        ImgThree.style.opacity = '1';
        ImgThree.style.transform = 'rotate(1turn)';
    }
    if(ImgPositionFour.bottom < 730){
        ImgFour.style.transition = 'all 1s';
        ImgFour.style.opacity = '1';
        ImgFour.style.transform = 'rotate(1turn)';
    }
    if(ImgPositionFive.bottom < 730){
        ImgFive.style.transition = 'all 1s';
        ImgFive.style.opacity = '1';
        ImgFive.style.transform = 'rotate(1turn)';
    }
}



window.onscroll = function(){
    

    turn();
    scroll();
    
    
}



    
function acsii(){
    let parent = document.getElementById('acsii')
    
        parent.onmouseenter = parent.onmouseleave = function(event){
            let hid_elem = document.getElementById('hid_elem')
            if(event.type == "mouseenter" ){
                hid_elem.style.opacity = 1
                hid_elem.style.visibility = 'visible'
                console.log('werwe')
            }
             if(event.type == "mouseleave"){
                 hid_elem.style.opacity = 0;
                 hid_elem.style.visibility = 'hidden';
                 console.log('123')
             }
            
        }
}

function product(){
    let parent = document.getElementById('pro')
    
        parent.onmouseenter = parent.onmouseleave = function(event){
            let hid_elem = document.getElementById('hid_elempro')
            if(event.type == "mouseenter" ){
                hid_elem.style.opacity = 1
                hid_elem.style.visibility = 'visible'
                console.log('werwe')
            }
             if(event.type == "mouseleave"){
                 hid_elem.style.opacity = 0;
                 hid_elem.style.visibility = 'hidden';
                 console.log('123')
             }
            
        }
}