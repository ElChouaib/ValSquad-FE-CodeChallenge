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
  displayedPosts: PostModel[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    // init posts
    this.postService.getAllPosts().subscribe(res => {
      this.posts = res;
      this.displayedPosts = res;
    })

    this.postService.getSearchCriteria().subscribe(res => {
      this.updateDisplayedData(res);
    })
  }

  updateDisplayedData(res: string) {
    if (res && res.length) {
      this.displayedPosts = this.posts.filter(p => p.posterName?.toLocaleLowerCase().includes(res.toLocaleLowerCase()))
    } else {
      this.displayedPosts = this.posts
    }
  }

}
