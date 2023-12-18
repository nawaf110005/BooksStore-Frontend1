import { Book } from '../models/books.model';
import { User } from '../models/user.model';

export class Order {
    
    
    constructor(
      private _id: number | null,
      private _user: User,
      private _books: Book[],
      private _pickupAddress: string,
      private _paymentMethod: string,
      private _pickupDate: string,
    ) { }
    public get pickupDate(): string {
      return this._pickupDate;
    }
    public set pickupDate(value: string) {
      this._pickupDate = value;
    }
    public get paymentMethod(): string {
      return this._paymentMethod;
    }
    public set paymentMethod(value: string) {
      this._paymentMethod = value;
    }
   
    public get books(): Book[] {
      return this._books;
    }
    public set books(value: Book[]) {
      this._books = value;
    }
    public get pickupAddress(): string {
      return this._pickupAddress;
    }
    public set pickupAddress(value: string) {
      this._pickupAddress = value;
    }
    public get user(): User {
      return this._user;
    }
    public set user(value: User) {
      this._user = value;
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
            books: this._books,
            pickupAddress: this._pickupAddress,
            pickupDate: this._pickupDate,
            paymentMethod: this._paymentMethod,
            user: this._user,
            book: this._books,
        };
    }
  
  }