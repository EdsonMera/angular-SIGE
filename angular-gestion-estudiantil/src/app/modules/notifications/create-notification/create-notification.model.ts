export class Notificacion{

    constructor(public autor:string, public enviado:string, public fecha:string, public categoria:string, public notificacion:string){}

    toString(): string {
        return this.autor + " " + this.enviado + " " + this.fecha + " " + this.categoria + " " + this.notificacion; 
    }
}