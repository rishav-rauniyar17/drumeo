var numberDrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var drumSound=this.innerHTML;
     soundPlay(drumSound);
     soundAnimation(drumSound);
    }
    
    );
}

document.addEventListener("keypress",function(event){
soundPlay(event.key);
soundAnimation(event.key);
});

function soundPlay(key)
{
    switch(key)
     {
         case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();  
            break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();  
                break;
                case "s":
                    var tom3=new Audio('sounds/tom-3.mp3');
                    tom3.play();  
                    break;  
                    case "d":
                        var tom4=new Audio('sounds/tom-4.mp3');
                        tom4.play();  
                        break;  
                        case "j":
                            var snare=new Audio('sounds/snare.mp3');
                            snare.play();  
                            break; 
                            case "k":
                                var crash=new Audio('sounds/crash.mp3');
                                crash.play();  
                                break;  
                                case "l":
                                    var kickbass=new Audio('sounds/kick-bass.mp3');
                            kickbass.play();  
                                    break;
                                    default: alert("Sound Not found!");
     }
}

function soundAnimation(currentkey)
{
    var activeKey=document.querySelector("."+currentkey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },200);
}