import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponent } from './componets/nuevo/nuevo.component';
import { HoyComponent } from './components/hoy/hoy.component';
import { AnimalComponent } from './components/animal/animal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejempClass';
}
