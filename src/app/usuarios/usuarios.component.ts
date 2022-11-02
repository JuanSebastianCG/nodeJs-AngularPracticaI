import { Component, OnInit } from '@angular/core';
import { RemotoService } from '../remoto.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private informacionweb:RemotoService) { }

  ngOnInit(): void {
  
  }
  /* llamado de la funcion de la clase remota */
  public buscar(){
    this.informacionweb.getDatos();
  }
  
  

}
