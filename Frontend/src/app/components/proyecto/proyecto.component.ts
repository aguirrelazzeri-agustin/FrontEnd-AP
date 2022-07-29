import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService} from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto: Proyecto[] = [];

  constructor(private proyectoService: SProyectoService,private tokenService: TokenService  ) { }

  ngOnInit(): void {

    
  }

}
