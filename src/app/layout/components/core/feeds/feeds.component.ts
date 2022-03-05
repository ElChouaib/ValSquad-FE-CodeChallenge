import {Component, OnInit} from '@angular/core';
import {PostModel} from "../../../_models/post.model";
import {PostService} from "../../../_services/post.service";

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    // init posts
    this.postService.getAllPosts().subscribe(res => {
      this.posts = res;
    })
  }

}
