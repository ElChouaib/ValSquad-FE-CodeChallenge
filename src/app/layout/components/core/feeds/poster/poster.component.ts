import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../../../_models/post.model";

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() post?: PostModel;
  nbrOfLike: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem(this.post?._id + 'nbrLikes'))
      this.nbrOfLike = parseInt(<string>localStorage.getItem(this.post?._id + 'nbrLikes'));
  }

  updateNbrOfLike() {
    this.nbrOfLike++;
    localStorage.setItem(this.post?._id + 'nbrLikes', this.nbrOfLike.toString());
  }
}
