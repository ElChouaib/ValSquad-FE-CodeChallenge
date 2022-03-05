import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  navigationButtons: any = [];
  selectedButton: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.initNavigationButtons();
    this.selectedButton = this.navigationButtons[0].name;
  }

  private initNavigationButtons() {
    this.navigationButtons = [
      {name: "Home", icon: "fa fa-home"},
      {name: "Messages", icon: "fa fa-comment"},
      {name: "Profile", icon: "fa fa-user"},
      {name: "Saved Post", icon: "fa fa-bookmark"},
      {name: "Settings", icon: "fa fa-cog"},

    ]
  }

  updateNavigationButton(item: any) {
    this.selectedButton = item.name;
  }
}
