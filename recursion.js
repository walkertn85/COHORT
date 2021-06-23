const rockPaperScissor =(numOfThrows) =>{
    const result = []; 
   
    const recurse =(currentPlay)=>{
    const choices = [ 'rock', 'paper', 'scissors'];
   
    for (let i = 0; i <choices.length; i+= 1){
        const currentChoice = [choices[i]];
        const nextPlay = currentPlay.concat(currentChoice);
        recurse(nextPlay);
    }
    }
    recurse([]);
    return result;
   }
   
   rockPaperScissor(2)