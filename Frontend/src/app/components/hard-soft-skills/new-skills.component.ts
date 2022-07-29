import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombreSkill: string = '';
  imgSkill: string = '';
  porcentaje: any = '';

  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {

  }
  onCreate(): void {
    const ski = new Skills(this.nombreSkill, this.imgSkill, this.porcentaje);
    this.skillsService.save(ski).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}
