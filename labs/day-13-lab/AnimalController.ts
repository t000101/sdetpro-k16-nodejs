import Animal from "./Animal";


export default class AnimalController{
    static getWinnerInRacing(animalList: Animal[]): Animal {
        let winnerSpeed = 0;
        let winnerName = '';

        for(const animal of animalList){
            if (animal.getSpeed() > winnerSpeed) 
            {
                winnerSpeed = animal.getSpeed();
                winnerName = animal.getName();
            }
                
        }
        const winner = new Animal(winnerName);
        winner.setSpeed(winnerSpeed);
        console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()}`)
        return new Animal(winnerName);
    }
}