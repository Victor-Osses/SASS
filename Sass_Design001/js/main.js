feather.replace()
const menu = document.getElementById("menu")
const boardLeft = document.getElementById("board-left");
const boardRight = document.getElementById("board-right"); 
const flexBoard = document.getElementById("flex-board")
let selectedMenuId = 1

document.getElementById("bl-1").scrollIntoView();
menu.addEventListener("click", changeContent)

function changeContent(event){
    target = event.target.id;
    if(target === "menu" || target === "" || target == selectedMenuId){
        return;
    }
    document.getElementById(selectedMenuId).classList.remove("selected");
    document.getElementById(target).classList.add("selected")

    const offset = selectedMenuId - target;
    //scrool dos boards
    boardLeft.scrollTop += 370 * offset;
    boardRight.scrollTop -= 370 * offset; 

    flexBoard.classList.remove("flex-board-open");
    flexBoard.classList.add("flex-board-close");
    setTimeout(function () {
        flexBoard.classList.remove("flex-board-close");
        flexBoard.classList.add("flex-board-open");
    }, 300);

    selectedMenuId = target
}