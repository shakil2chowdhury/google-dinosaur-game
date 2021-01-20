let block = document.getElementById("block");
function jump() {
    if (player.classList != "animate"){
    document.getElementById("player").classList.add("animate");
    }
    setTimeout(function(){
        document.getElementById("player").classList.remove("animate");},500);
    }

let checkPlayer = setInterval(function(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<25 && blockLeft>0 && playerTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";
        if(confirm('You Lose.')){
            window.location.reload();  
        }
    }
    },10);
