import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-new-post',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatCardModule,MatButtonModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  newPost: String = "";
  enteredValue: String = '';

  onAddPost() {
    this.newPost = this.enteredValue
  }
}
