const scoreBoard = {
    _round: 0,
    _home: parseInt(localStorage.getItem("home")) || 0,
    _away: parseInt(localStorage.getItem("away")) || 0,
    range: [0, 99],
    set home(val) {
        this._home = val;
        document.querySelector('#team1').textContent = this._home;
    },
    set away(val) {
        this._away = val;
        document.querySelector('#team2').textContent = this._away;
    },
    checkRangeAndUpdate(value, operator, step) {
        // destructure max and min
        const [min, max] = this.range;
        // set getter to underscore value for accessing object
        const getter = `_${value}`;
        if (operator === '+' && (this[getter] + step) - 1 < max) {
            // if operator is add and the incrementation wont exceede max increment by step
            this[value] = this[getter] + step;
        }
        if (operator === '-' && (this[getter] - step) + 1 > min) {
            // if operator is sub and the decrementation wont go below min deincrement by step
            this[value] = this[getter] - step;
        }

        let storeNumber = this[getter];
        localStorage.setItem(value, parseInt(storeNumber) );
        
    },
    homeplus: ['home', '+', 1],
    homeminus: ['home', '-', 1],
    awayplus: ['away', '+', 1],
    awayminus: ['away', '-', 1],
    roundplus: ['round', '+', 1],
    roundminus: ['round', '-', 1]
};

function init() {
    let home = localStorage.getItem("home");
    let away = localStorage.getItem("away");
    if(!home){
        localStorage.setItem("home","0");
        home = 0;
    }
    if(!away){
        localStorage.setItem("away","0");
        away = 0;
    }
    document.getElementById('team1').innerHTML = home;
    document.getElementById('team2').innerHTML = away;
    const container = document.querySelector('.scorecontainer');
    container.addEventListener('click', function (e) {
        // run function with params that match the buttons id
        scoreBoard.checkRangeAndUpdate.apply(scoreBoard, scoreBoard[e.target.id]);
    });
}

init();

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 1500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
