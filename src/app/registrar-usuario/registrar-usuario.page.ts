import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioInterface } from '../Modulos/usuario';
import { UsuarioService } from '../Servicios/usuario.service';
import { AlertController } from '@ionic/angular';
import { Storage} from '@ionic/storage'
import { GLOBAL } from '../global';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
  providers:[UsuarioService]
})
export class RegistrarUsuarioPage implements OnInit {
  
   public usuario:UsuarioInterface;
   public Resultado:any;
   public perfilUsuario:any;
   

  constructor(private router: Router,
    private usuarioService:UsuarioService,
    private storage:Storage,
    public alertController: AlertController)
     {
    this.storage.get(GLOBAL.perfilStorage)
    .then(perfil=>{
      this.perfilUsuario=perfil || '';
    })
    
    this.usuario={
      id:'',
      nombre:'',
      apellido:'',
      contrasenia:'',
      aplicacion:'',
      celular:'',
      correo:'',
      imei:'',
      codigo:'',
      token:''
    }
  }

  ngOnInit() {
  }

  async registrarUsuario()
  {
    
    let jsonData=this.usuario;
     this.usuarioService.registrarUsuario( '',jsonData ).subscribe(
        rs => {
          this.Resultado=rs;
          if(this.Resultado.suceso==1){
            jsonData.id=this.Resultado.id_usuario;
            this.guardarMemoriaLocal(jsonData);
            this.Bienvenido();
            this.router.navigate(['/bienvenido']);
           
          }else
          {
            this.limpiarUsuario();
          }
          console.log(rs)
          },
          er => console.log(er),
          () => console.log('ok')
        );
  }

  guardarMemoriaLocal(dato)
  {
    this.storage.set(GLOBAL.perfilStorage,dato);
  }

  limpiarUsuario()
  {
    this.usuario={
      id:'',
      nombre:'',
      apellido:'',
      contrasenia:'',
      aplicacion:'',
      celular:'',
      correo:'',
      imei:'',
      codigo:'',
      token:''
    };
  }
  async Bienvenido() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      subHeader: 'Gracias por registrarte',
      message: 'Comienza a vivir esta nueva experiencia con nosotros',
      buttons: ['OK']
    });
    await alert.present();
  }

}
