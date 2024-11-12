import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',  
//  templateUrl: './app.component.html',  // Corrected path
 
  //styleUrl: './app/app.component.scss'
})
export class AppComponent {
  title = 'book-finder';
}
