export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    fechaP: string;
    linkp: string;
    materiaP: string;
    integrantesP: string;
    linkCP: string;

   constructor(nombreP: string, descripcionP: string, fechaP: string, linkp: string,  materiaP: string, integrantesP: string, linkCP: string  ){
    this.nombreP = nombreP;
    this.descripcionP = descripcionP;
    this.fechaP = fechaP;
    this.linkp = linkp;
    this.materiaP = materiaP;
    this.integrantesP = integrantesP;
    this.linkCP = linkCP;
   }
}
