window.onload = function(){
    acsii();
    product();
    }
    
function acsii(){
    let parent = document.getElementById('acsii')
    
        parent.onmouseenter = parent.onmouseleave = function(event){
            let problemIcon = document.getElementById('problem');
            
            if(event.type == "mouseenter" ){
                hid_elem.style.opacity = 1
                problemIcon.style.visibility = 'hidden';
                hid_elem.style.visibility = 'visible';
                
            }
             if(event.type == "mouseleave"){
                 hid_elem.style.opacity = 0;
                 problemIcon.style.visibility = 'visible';
                 hid_elem.style.visibility = 'hidden';
                 
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
                
            }
             if(event.type == "mouseleave"){
                 hid_elem.style.opacity = 0;
                 hid_elem.style.visibility = 'hidden';
                 
             }
            
        }
}