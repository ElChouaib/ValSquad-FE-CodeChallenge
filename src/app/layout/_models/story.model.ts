import {userModel} from "./user.model";

export class StoryModel {
  user?: userModel;
  story?: string;
  seen?: boolean;


  constructor(user: userModel, seen: boolean) {
    this.user = user;
    this.seen = seen;
  }
}
