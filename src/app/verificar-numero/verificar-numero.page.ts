import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../Servicios/usuario.service';
import {UsuarioInterface} from '../Modulos/usuario';
 

@Component({
  selector: 'app-verificar-numero',
  templateUrl: './verificar-numero.page.html',
  styleUrls: ['./verificar-numero.page.scss'],
  providers:[UsuarioService]
})
export class VerificarNumeroPage implements OnInit {

  public titulo: string;
  public name: string;
  public mensaje : string;
  public pin: string;

  public celular:string;
  public token:string;
  public imei:string;
  public codigo:string;

  public Resultado:any;

  public usuario:UsuarioInterface;


  constructor(private router: Router,private usuarioService:UsuarioService) { 
    this.celular='';
    this.token='000000asdfasdf00';
    this.imei='00000000000000';
    this.codigo='0000';

    this.usuario={
    nombre:'',
    apellido:'',
    celular:'',
    imei:'',
    codigo:'',
    token:''
    };

  }

  ngOnInit() {
  }

  async verificarCelular()
  {
    
    let jsonData={
        "celular": this.celular,
        "token":this.token,
        "imei": this.imei,
        "codigo": this.codigo
    };
     this.usuarioService.verificar_celular( '',jsonData ).subscribe(
        rs => {
          this.Resultado=rs;
          if(this.Resultado.suceso==3){
            this.router.navigate(['/registrar-usuario']);
          }
          console.log(rs)
          },
          er => console.log(er),
          () => console.log('ok')
        );
  }

  

}
