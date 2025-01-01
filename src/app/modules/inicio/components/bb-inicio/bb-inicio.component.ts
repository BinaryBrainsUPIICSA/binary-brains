import {Component, HostListener, OnInit} from '@angular/core';
import { REPOSITORIOS } from 'src/app/data/repositorios';

@Component({
  selector: 'app-bb-inicio',
  templateUrl: './bb-inicio.component.html',
  styleUrls: ['./bb-inicio.component.scss']
})
export class BbInicioComponent implements OnInit {
  customCursor: HTMLElement | null = null;

  repositorios = REPOSITORIOS

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.customCursor) {
      this.customCursor.style.transform = `translate(${event.clientX - 400}px, ${event.clientY - 400}px)`;
    }
  }

  ngOnInit() {
    this.customCursor = document.querySelector('.custom-cursor');
  }

  repositorio(url: string) {
    window.open(url);
  }
}
