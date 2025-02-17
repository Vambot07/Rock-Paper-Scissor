// const rockplayer = document.querySelector('.rock');
// const paperplayer = document.querySelector('.paper');
// const scissorplayer = document.querySelector('.scissor');
const pilihanKomputer = document.querySelectorAll('li img');
const imgkomputer = document.querySelector('.img-komputer');
const info = document.querySelector('.info');
const btnReset = document.querySelector('.btn-reset');
const score = document.querySelector('.score');

let markahPlayer = kiraMarkah();
let markahKomputer = kiraMarkah();
let mP = 0;
let mK = 0;


function komputerPilih (){
    
     let komputer = Math.floor(Math.random()*3)+1;

     if(komputer == 1) return 'rock';

     if(komputer == 2) return 'paper';
     
     return 'scissor';


}


function pengiraanHasil(player, komputer){

    if(player == komputer) return 'SERI!';
    
    if(player == 'rock') return ( komputer == 'paper') ? 'KALAH!' : 'MENANG!';

    if(player == 'paper') return (komputer == 'scissor') ? 'KALAH!' : 'MENANG!';

    if(player == 'scissor') return (komputer == 'rock') ? 'KALAH!' : 'MENANG!';

}


function putaran(){
    const gambar = ['rock','paper','scissor'];
    let index = 0;
    const waktuMula = new Date().getTime();

    let intervalID = setInterval(function(){
        if(new Date().getTime() - waktuMula > 1000){
            clearInterval(intervalID);
           return;
        }
        imgkomputer.setAttribute('src',`/src/${gambar[index++]}.jpeg`);
        if(index == gambar.length) index = 0;
    },100)
}


function kiraMarkah(){
    let score = 0;
    return function pengiraanMarkah(){
       return ++score;
    }
}



pilihanKomputer.forEach(function(pilihan){
    pilihan.addEventListener('click', function(){

        btnReset.setAttribute('class', 'btn-reset tekan');
        
        


        info.innerHTML = "";
        const komputerValue = komputerPilih();
        const playerValue = pilihan.className;
        const hasil = pengiraanHasil(playerValue, komputerValue);

        putaran();

        setTimeout(function () {
        imgkomputer.setAttribute('src', `/src/${komputerValue}.jpeg`);
        info.innerHTML = hasil;  

        if(hasil === 'MENANG!') {
            mP = markahPlayer();
            console.log(mP);
            console.log(mK);
        score.innerHTML = `Player: ${mP} : Komputer: ${mK}`;
        }
        else if(hasil ==='KALAH!'){
            mK = markahKomputer();
            console.log(mP);
            console.log(mK);
            score.innerHTML = `Player: ${mP} : Komputer: ${mK}`;
        }
        else{
            console.log(mP);
            console.log(mK);
            score.innerHTML = `Player: ${mP} : Komputer: ${mK}`;
        }

        },1000);


          
    })
})


btnReset.addEventListener('click', function() {
    
    mP = 0;
    mK = 0;

    // Reset the score functions by reinitializing them
    markahPlayer  = kiraMarkah();
    markahKomputer = kiraMarkah();


    score.innerHTML = `Player: ${mP} : Komputer: ${mK}`;
    
    imgkomputer.setAttribute('src','');

    info.innerHTML = '';

    btnReset.classList.remove('tekan');
})






// rockplayer.addEventListener('click', function() {
 
//     const komputerValue = komputerPilih();
//     const playerValue = rockplayer.className;
//     const hasil = pengiraanHasil(playerValue, komputerValue);
//     info.innerHTML = hasil;

//     imgkomputer.setAttribute('src', `/src/${komputerValue}.jpeg`);

    
// })

// paperplayer.addEventListener('click', function() {
 
//     const komputerValue = komputerPilih();
//     const playerValue = paperplayer.className;
//     const hasil = pengiraanHasil(playerValue, komputerValue);
//     info.innerHTML = hasil;

//     imgkomputer.setAttribute('src', `/src/${komputerValue}.jpeg`);

    
// })

// scissorplayer.addEventListener('click', function() {
 
//     const komputerValue = komputerPilih();
//     const playerValue = scissorplayer.className;
//     const hasil = pengiraanHasil(playerValue, komputerValue);
//     info.innerHTML = hasil;

//     imgkomputer.setAttribute('src', `/src/${komputerValue}.jpeg`);

    
// })

