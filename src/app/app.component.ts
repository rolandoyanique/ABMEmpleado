import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent} from '../app/components/navbar/navbar.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AMBEmpleado';
}
