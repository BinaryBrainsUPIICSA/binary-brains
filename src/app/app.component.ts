import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Binary Brains';

  constructor(private titleService: Title, private metaService: Meta, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.titleService.setTitle('Binary Brains');
    this.metaService.updateTag({ name: 'logo', content: 'src/assets/images/logo.svg' }); // Ajusta la ruta al favicon

    this.route.fragment.subscribe(fragment => { // Permite el scroll a un fragmento (elemento con id) en la página
      if (fragment) {
        const element = document.getElementById(fragment);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    })
  }

}
