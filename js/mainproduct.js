function bigfinger(){
    let fingerone = document.getElementById('BigFinger1')
    let FingerPosition = fingerone.getBoundingClientRect()
    
    let fingertwo = document.getElementById('BigFinger2')
    let FingerPositiontwo = fingertwo.getBoundingClientRect()

    let fingerthree = document.getElementById('BigFinger3')
    let FingerPositionthree = fingerthree.getBoundingClientRect()

    let fingerfour = document.getElementById('BigFinger4')
    let FingerPositionfour = fingerfour.getBoundingClientRect()

    let fingerfive = document.getElementById('BigFinger5')
    let FingerPositionfive = fingerfive.getBoundingClientRect()

    let fingersix = document.getElementById('BigFinger6')
    let FingerPositionsix = fingersix.getBoundingClientRect()

    let fingerseven = document.getElementById('BigFinger7')
    let FingerPositionseven = fingerseven.getBoundingClientRect()

    if(FingerPosition.top < 650){
        fingerone.style.transition = 'all 1s';
        fingerone.style.opacity = '1';

        fingertwo.style.transition = 'all 1.2s';
        fingertwo.style.opacity = '1';

        fingerthree.style.transition = 'all 1.4s';
        fingerthree.style.opacity = '1';

        fingerfour.style.transition = 'all 1.6s';
        fingerfour.style.opacity = '1';

        fingerfive.style.transition = 'all 1.8s';
        fingerfive.style.opacity = '1';

        fingersix.style.transition = 'all 2s';
        fingersix.style.opacity = '1';

        fingerseven.style.transition = 'all 2.2s';
        fingerseven.style.opacity = '1';
    }
}




function scroll(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("btn").style.display = "block";
        console.log("true")
    }else{
        document.getElementById("btn").style.display = "none";
        console.log('false')
    }
    
}




window.onscroll = function(){
    bigfinger();
    scroll();
}