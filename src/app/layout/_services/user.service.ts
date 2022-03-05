import {Injectable} from '@angular/core';
import {userModel} from "../_models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Users: userModel[] = [
    {lastname: "Salim", firstname: "Ahmed", avatar: "assets/imgs/user6.jpg"},
    {lastname: "Elmakhlouk", firstname: "Chouaib", avatar: "assets/imgs/user6.jpg"},
    {lastname: "Supradi", firstname: "kamal", avatar: "assets/imgs/user6.jpg"},
    {lastname: "Dean", firstname: "bilal", avatar: "assets/imgs/user6.jpg"},
    {lastname: "Verso", firstname: "Jack", avatar: "assets/imgs/user6.jpg"},
    {lastname: "nino", firstname: "Chris", avatar: "assets/imgs/user6.jpg"},

  ]

  constructor() {
  }

  get users() {
    return this.Users;
  }
}
