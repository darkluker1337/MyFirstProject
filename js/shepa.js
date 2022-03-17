
function showTop(){
    let hidden = document.getElementById('cross-hiden');
    let ver = document.getElementById('vert');
    if(ver.style.visibility =='visible'){
         ver.style.visibility='hidden';
        // hidden.style.visibility='visible';
        hidden.style.display='block';
     }
     else{ 
         ver.style.visibility='visible';
         //hidden.style.visibility='hidden';
         hidden.style.display='none';
    } 
    
}


function showBot(){
    let hidden = document.getElementById('cross-hiden-bot');
    let ver = document.getElementById('vert-bot');
    if(ver.style.visibility =='visible'){
         ver.style.visibility='hidden';
        // hidden.style.visibility='visible';
        hidden.style.display='block';
     }
     else{ 
         ver.style.visibility='visible';
         //hidden.style.visibility='hidden';
         hidden.style.display='none';
    } 
    
}
function showBottom(){
    let hidden = document.getElementById('cross-hiden-bottom');
    let ver = document.getElementById('vert-bottom');
    if(ver.style.visibility =='visible'){
         ver.style.visibility='hidden';
        // hidden.style.visibility='visible';
        hidden.style.display='block';
     }
     else{ 
         ver.style.visibility='visible';
         //hidden.style.visibility='hidden';
         hidden.style.display='none';
    } 
    
}