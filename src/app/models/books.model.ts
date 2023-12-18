
export class Book {
  public get img(): string {
    return this._img;
  }
  public set img(value: string) {
    this._img = value;
  }
  
  
  constructor(
    public _id: number | null,
    private _title: string,
    private _category: string,
    private _author: string,
    private _price: number,
    private _img: string,
    private _releaseDate: string,
    ) { }
    public get releaseDate(): string {
      return this._releaseDate;
    }
    public set releaseDate(value: string) {
      this._releaseDate = value;
    }
    public get price(): number {
      return this._price;
    }
    public set price(value: number) {
      this._price = value;
    }
    public get author(): string {
      return this._author;
    }
    public set 
    author(value: string) {
      this._author = value;
    }
    public get category(): string {
      return this._category;
    }
    public set category(value: string) {
      this._category = value;
    }
    public get title(): string {
      return this._title;
    }
    public set title(value: string) {
      this._title = value;
    }
    public get id(): number | null {
      return this._id;
    }
    public set id(value: number | null) {
      this._id = value;
    }

  public toJSON(): object {
    return {
        id: this._id,
        title: this._title,
        category: this._title,
        author: this._author,
        price: this._price,
        releaseDate: this._releaseDate,
        img:this._img
    };
  }

}