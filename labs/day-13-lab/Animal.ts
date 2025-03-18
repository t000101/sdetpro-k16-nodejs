export default class Animal {

    protected name: string;
    protected maxSpeed: number;
    protected speed: number;

    constructor(name: string, maxSpeed = 1000) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = this.getRandomSpeed();
    }

    private getRandomSpeed() {
        return Math.floor(Math.random() * this.maxSpeed) + 1;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed: number) {
        this.speed = speed;
    }

    getName() {
        return this.name;
    }
}