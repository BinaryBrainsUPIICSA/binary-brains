import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-bb-inicio',
  templateUrl: './bb-inicio.component.html',
  styleUrls: ['./bb-inicio.component.scss']
})
export class BbInicioComponent implements OnInit {
  customCursor: HTMLElement | null = null;

  albums = [
    {
      title: '100 dias 10 proyectos',
      image: 'assets/images/rrr.gif',
      description: 'En este desafío harémos un proyecto de software todos los días para mejorar nuestras habilidades técnicas como desarrolladores BACKEND y FRONTEND, lograrémos estos objetivos practicando todos los días porque la práctica hace al maestro.',
      tecnologias: ['HTML', 'CSS', 'JS', 'Java', 'Arduino', 'MySQL', 'React', 'Python', 'Spring', 'Ts'],
      link: 'https://github.com/xVrzBx/100Days100Proyects'
    },
    {
      title: 'Proximamente ...',
      image: 'assets/images/qqq.jpg',
      description: 'En Binari Brains, estamos trabajando duro en emocionantes proyectos que llegarán muy pronto.',
      tecnologias: [],
      link: 'https://github.com/BinaryBrainsUPIICSA'
    },
    // Agrega más álbumes según sea necesario
  ];

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
