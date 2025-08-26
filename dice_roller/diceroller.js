function rolldice(){

    const num =document.getElementById("input").value;
    const result = document.getElementById("two");
    const diceresult = document.getElementById("three");
    const val =[];
    const image =[];

    for(let i=0;i<num;i++){

        const value = Math.floor(Math.random()*6)+1;

        val.push(value);
        image.push( `<img  src="dices/dice${value}.png"  alt ="Dice${value}">`)
    }

    result.textContent =`Die/Dice is/are: ${val.join(' , ')}`

    diceresult.innerHTML =image.join(' ');

    console.log(val);

}