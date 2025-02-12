import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'; 


@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts = [
    {title:'Title', content: "Post content"},
    {title:'Title', content: "Post content"},
    {title:'Title', content: "Post content"},
    {title:'Title', content: "Post content"},
  ]
}
