import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  fechaP: string = '';
  linkP: string = '';
  materiaP: string = '' ;
  integrantesP: string = '';
  linkCP: string = '';


  constructor(private sProyecto: SProyectoService, private router: Router ) { }

  ngOnInit(): void {
  }
  onCreate(): void {    
    const pro = new Proyecto(this.nombreP, this.descripcionP, this.fechaP, this.linkP, this.materiaP, this.integrantesP, this.linkCP);
    this.sProyecto.save(pro).subscribe(
      data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
