var diceRoll = (Math.floor(Math.random() * 7));
//console.log( diceRoll);

switch (diceRoll) {
    case 1:
        console.log('CASE 1: your roll is ' + diceRoll)
        break;
    case 2:
        console.log('CASE 2: your roll is ' + diceRoll)
        break;
    case 3:
        console.log('CASE 3: your roll is ' + diceRoll)
        break;
    case 4:
        console.log('CASE 4: your roll is ' + diceRoll)
        break;
    case 5:
        console.log('CASE 5: your roll is ' + diceRoll)
        break;
    case 6:
        console.log('CASE 6: your roll is ' + diceRoll)
        break;
    default:
        console.log('your roll is '+ diceRoll+ ' and here is no Zero on a dice')
        break;
}
        