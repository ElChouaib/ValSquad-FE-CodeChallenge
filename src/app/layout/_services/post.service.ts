import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {PostModel} from "../_models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  searchCriteria$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://valsquad-test.herokuapp.com/api/posts`);
  }

  getSearchCriteria() {
    return this.searchCriteria$;
  }
}
