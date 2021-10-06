export class Products {
    private _id : number;
    private _image: string;
    private _name : string;
    private _price : number;
    private _desc: string;
    private _state : boolean;

    constructor(id: number, image: string, name: string, price: any, desc: string, state: boolean) {
       this.id = id;
       this.image = image;
       this.name = name;
       this.price = price;
       this.desc = desc;
       this.state = state;
    }

    //id get and set
    public get id(): number {
        return this._id
    }

    public set id(v: number) {
        this._id = v;
    }

    //image get and set
    public get image(): string {
        return this._image
    }

    public set image(v: string) {
        this._image = v;
    }

    //name get and set
    public get name(): string {
        return this._name
    }

    public set name(v: string) {
        this._name = v;
    }

    //price get and set
    public get price(): number {
        return this._price
    }

    public set price(v: number) {
        this._price = v;
    }

    //desc get and set
    public get desc(): string {
        return this._desc
    }

    public set desc(v: string) {
        this._desc = v;
    }

    //state get and set
    public get state(): boolean {
        return this._state
    }

    public set state(v: boolean) {
        this._state = v;
    }
}
