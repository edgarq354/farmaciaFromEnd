import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FarmaciaInterface } from '../Modulos/farmacia';
import { FarmaciaService } from '../Servicios/farmacia.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage} from '@ionic/storage'
import { GLOBAL } from '../global';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-perfil-farmacia',
  templateUrl: './perfil-farmacia.page.html',
  styleUrls: ['./perfil-farmacia.page.scss'],
  providers:[FarmaciaService]
})
export class PerfilFarmaciaPage implements OnInit {
  IdImport:any;

  public  farmacia:FarmaciaInterface; 
   public Resultado:any;
   public perfilUsuario:any;
   public url:any;

  constructor(private activeRoute:ActivatedRoute,
    private farmaciaService:FarmaciaService,    
    public alertController: AlertController ) {
    this.IdImport=this.activeRoute.snapshot.paramMap.get("id");
    this.url=GLOBAL.url;

    this.farmacia={
      id:'',
      nombre:'',
      direccion_logo:'',
      direccion_banner:'',
      razon_social:'',
      nit:'',
      correo:'',
      telefono:'',
      direccion:'',
      fecha_registro:'',
      calificacion:'',
      ranking:'',
      id_tbcomentario:'',
      latitud:'',
      longitud:'',
      indicacion:'',
      abierto_cerrado:'',
      turno:''
    }
   }

  ngOnInit() {
    this.getPerfilFarmacia();
  }

  async getPerfilFarmacia()
  {
    
    let jsonData={
         id_farmacia:this.IdImport
        };
     this.farmaciaService.getFarmaciaPorId( '',jsonData ).subscribe(
        rs => {
          this.Resultado=rs;
          if(this.Resultado.suceso==1){
            
            this.farmacia=this.Resultado.farmacia;
            console.log(JSON.stringify(this.farmacia));
          }else
          {
             this.Mensaje("Lista de Farmacias",this.Resultado.mensaje);
          }
          console.log(rs)
          },
          er => console.log(er),
          () => console.log('ok')
        );
  }

 

  async Mensaje(titulo,mensaje) {
    const alert = await this.alertController.create({
      header: 'Farmacia',
      subHeader: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


}
