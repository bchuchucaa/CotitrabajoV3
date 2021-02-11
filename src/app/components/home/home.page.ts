import { Component, OnInit } from '@angular/core';
import { Proveedor1Service } from '../../services/proveedor1.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuarios
  constructor(public proveedor:Proveedor1Service) { }

  getusuarios(){
    console.log("users");
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> {this.usuarios = data;},
      (error)=>{console.log(error);}
    )
  }

  ngOnInit() {
  }

}
