import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {LeftSidebarComponent} from './components/left-sidebar/left-sidebar.component';
import {RightSidebarComponent} from './components/right-sidebar/right-sidebar.component';
import {CoreComponent} from './components/core/core.component';
import { StoriesHeaderComponent } from './components/core/stories-header/stories-header.component';
import { FeedsComponent } from './components/core/feeds/feeds.component';
import { SearchHeaderComponent } from './components/right-sidebar/search-header/search-header.component';
import { AccountSuggestionsComponent } from './components/right-sidebar/account-suggestions/account-suggestions.component';
import { LatestPostActivityComponent } from './components/right-sidebar/latest-post-activity/latest-post-activity.component';
import { RightSideBarFooterComponent } from './components/right-sidebar/right-side-bar-footer/right-side-bar-footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    CoreComponent,
    StoriesHeaderComponent,
    FeedsComponent,
    SearchHeaderComponent,
    AccountSuggestionsComponent,
    LatestPostActivityComponent,
    RightSideBarFooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {
}
