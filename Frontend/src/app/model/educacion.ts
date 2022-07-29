export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaE: string;
    linkE: string;

    constructor(nombreE: string, descripcionE: string, fechaE: string, linkE: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.fechaE = fechaE;
    this.linkE = linkE;
    }

}
