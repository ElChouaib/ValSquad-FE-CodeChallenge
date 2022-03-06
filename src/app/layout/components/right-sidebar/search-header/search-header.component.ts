import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../../_services/post.service";

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder, postService: PostService) {
    this.form = fb.group({
      searchingName: new FormControl()
    })

    this.form.valueChanges.subscribe(res => {
      console.log(this.searchingName?.value);
      postService.searchCriteria$?.next(this.searchingName?.value);
    })
  }

  ngOnInit(): void {
  }

  get searchingName() {
    return this.form.get('searchingName');
  }
}
