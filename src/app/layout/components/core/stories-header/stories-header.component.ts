import {Component, OnInit} from '@angular/core';
import {StoryModel} from "../../../_models/story.model";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-stories-header',
  templateUrl: './stories-header.component.html',
  styleUrls: ['./stories-header.component.scss']
})
export class StoriesHeaderComponent implements OnInit {
  userStories?: StoryModel[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.initUserStories();
  }

  private initUserStories() {
    this.userStories = this.userService.users.map(
      (u, index) => {
        return new StoryModel(u, index < 2 ? true : false);
      }
    );
  }
}
