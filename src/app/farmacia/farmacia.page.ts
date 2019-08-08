import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmaciaInterface } from '../Modulos/farmacia';
import { FarmaciaService } from '../Servicios/farmacia.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage} from '@ionic/storage'
import { GLOBAL } from '../global';


@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.page.html',
  styleUrls: ['./farmacia.page.scss'],
  providers:[FarmaciaService]
})
export class FarmaciaPage implements OnInit {
  public  farmacia:FarmaciaInterface;
  public  farmaciaLista:FarmaciaInterface[];
   public Resultado:any;
   public perfilUsuario:any;
   public url:any;
   

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(private router: Router,
    private farmaciaService:FarmaciaService,
    private storage:Storage,
    public alertController: AlertController,
    private navControl:NavController
    ) {
this.url=GLOBAL.url;

    for (let i = 1; i < 3; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

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
      indicacion:''
    }
    this.farmaciaLista=[];

    this.listaFarmacia();
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  abrirFarmacia(index)
  {
    this.farmacia=this.farmaciaLista[index];
    this.router.navigate(['/perfil-farmacia',this.farmacia.id] );

  }


  async listaFarmacia()
  {
    
    let jsonData={
         id_usuario:"",
         texto:"",
         latitud:0,
         longitud:0
        };
     this.farmaciaService.lista_farmacia( '',jsonData ).subscribe(
        rs => {
          this.Resultado=rs;
          if(this.Resultado.suceso==1){
            
            this.farmaciaLista=this.Resultado.lista;
           
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
