import { Component } from '@angular/core';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';

@Component({
  selector: 'app-root',
  imports: [NewPostComponent, HeaderComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
