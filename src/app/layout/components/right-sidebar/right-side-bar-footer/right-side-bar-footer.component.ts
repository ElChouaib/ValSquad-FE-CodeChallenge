import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-right-side-bar-footer',
  templateUrl: './right-side-bar-footer.component.html',
  styleUrls: ['./right-side-bar-footer.component.scss']
})
export class RightSideBarFooterComponent implements OnInit {
  footerMenuItems: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initFooterMenuItems();
  }

  private initFooterMenuItems() {
    this.footerMenuItems = ["About", "Help", "Terms", "Popular", "Language"];
  }
}
