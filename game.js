const playerTitle = document.querySelector('.playerTitle');
const rematchBtn = document.querySelector('.rematch');
const container = document.querySelector('.container');
const items = document.querySelectorAll('.item');
const gridArray = Array.from(items);
let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPlayer = 'playerX';

window.addEventListener('click', (e)=>{
  // players Move
  const index = gridArray.indexOf(e.target);
  if (items[index].classList.contains('playerX') || 
      items[index].classList.contains('computer'))
      {return}

  items[index].classList.add('playerX');
  console.log(index)
  const spliceNr = tracking.indexOf(index + 1);
  console.log(spliceNr)
  tracking.splice(spliceNr, 1);
  if (winCheck('playerX')) {
    playerTitle.innerHTML = 'PlayerX Win!!🍻🎆🎇';
    document.body.classList.add('over');
    return;
  }

  // Computer Move
  if(tracking.length === 0){
    playerTitle.innerHTML = "You are Tuff, It's Draw";
    document.body.classList.add('over');
    console.log('Nothing Left');
    return;
  }
  const random = Math.floor(Math.random()*tracking.length);
  console.log(tracking);
  console.log(random);
  const computerIndex = tracking[random];
  console.log(computerIndex)
  items[computerIndex-1].classList.add('computer'); 
  tracking.splice(random, 1);
  console.log(tracking);
  if (winCheck('computer')) {
    playerTitle.innerHTML='Computer Win!!🍻🎆🎇';
    document.body.classList.add('over');
    return;
  }
});
function winCheck(player){
  if(
    items[0].classList.contains(player)&
    items[3].classList.contains(player)&
    items[6].classList.contains(player)
  ){console.log(player + "win");
    return true}
  else if(
    items[1].classList.contains(player) &
    items[4].classList.contains(player) &
    items[7].classList.contains(player)
  ) { console.log(player + "win");
    return true}
  else if(
    items[2].classList.contains(player) &
    items[5].classList.contains(player) &
    items[8].classList.contains(player)
  ) { console.log(player + "win") 
    return true}
  else if(
    items[0].classList.contains(player) &
    items[1].classList.contains(player) &
    items[2].classList.contains(player)
  ) { console.log(player + "win") 
    return true}
  else if(
    items[3].classList.contains(player) &
    items[4].classList.contains(player) &
    items[5].classList.contains(player)
  ) { console.log(player + "win") 
    return true}
  else if(
    items[6].classList.contains(player) &
    items[7].classList.contains(player) &
    items[8].classList.contains(player)
  ) { console.log(player + "win") 
    return true}
  else if(
    items[0].classList.contains(player) &
    items[4].classList.contains(player) &
    items[8].classList.contains(player)
  ) { console.log(player + "win") 
    return true}
  else if(
    items[2].classList.contains(player) &
    items[4].classList.contains(player) &
    items[6].classList.contains(player)
  ) { console.log(player + "win") 
    return true}
}
rematchBtn.addEventListener('click',()=>{
  location.reload()
})