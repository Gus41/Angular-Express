import { Component } from '@angular/core';
import { NewPostComponent } from './posts/new-post/new-post.component';

@Component({
  selector: 'app-root',
  imports: [NewPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
