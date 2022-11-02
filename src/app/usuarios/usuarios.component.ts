import { Component, OnInit } from '@angular/core';
import { RemotoService } from '../remoto.service';
import { Ihtpp } from '../Ihttp';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public data = {} as Ihtpp[];
  constructor(private informacionweb:RemotoService) { }

  ngOnInit(): void {
  
  }
  /* llamado de la funcion de la clase remota */
  public buscar(){
    this.informacionweb.getDatos().subscribe(data => { this.data=data });
  }
  
  

}
