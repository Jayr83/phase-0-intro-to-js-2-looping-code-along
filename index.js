function writeCards(array, event){
    const cards = [];

    for(let count = 0; count < array.length; count++){
        cards.push(`Thank you, ${array[count]}, for the wonderful ${event} gift!`);
    }

    return cards;
};

function countDown(count){
    while(count >= 0){
        console.log(count)
        count--;
    }
};