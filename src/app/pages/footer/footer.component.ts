import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public proyecto: any = {anio: '2025', nombreProyecto: 'Observatorio de Software'};
  public tecnologia: any = {leyenda: 'WebApp desarrollada con ', tec1: 'Angular ', tec2: 'SpringBoot'};
  public autor: string = 'Esneider Majin Palechor - Sebastian Osorio';
}
