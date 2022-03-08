export abstract class Melon {

    weight: number;
    melonSort: string;
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = this.getIndex();
    }

    getIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

export class Watermelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): void {
        console.log('Element: Water');
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);    
    }
}

export class Earthmelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): void {
        console.log('Element: Earth');
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);    
    }
}

export class Firemelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): void {
        console.log('Element: Fire');
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);    
    }
}

export class Airmelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): void {
        console.log('Element: Air');
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);    
    }
}

let airmelon: Watermelon = new Airmelon(77, 'Unknown'); 
airmelon.toString();