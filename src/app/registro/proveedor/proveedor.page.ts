import { Component, OnInit, ViewChild, OnDestroy  } from '@angular/core';
import { NuevosProveedores } from '../../model/nuevos-proveedores';
import { NuevosProveedoresService } from 'src/app/services/nuevos-proveedores.service';
import { IonSlides } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


interface Departamento {
  departament: string;
}

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit, OnDestroy  {
  
  private wowSubscription: Subscription;

  @ViewChild('slider') slider: IonSlides;

    public slideOpts = {
        'allowTouchMove': false,
        'autoplay': false
    };

    next() {
        this.slider.slideNext();
    }
    back() {
        this.slider.slidePrev();
    }
  registro: NuevosProveedores = new NuevosProveedores();
  submitted = false;

  


  constructor( private nuevoProveedorService: NuevosProveedoresService, public alertController: AlertController, private router: Router, private wowService: NgwWowService) { 
    
  
      this.wowService.init(); 
  }
  activarWow(){
    this.wowService.init();
  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
  }
  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }

  saveTutorial(): void {
    this.nuevoProveedorService.create(this.registro).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newRegistro(): void {
    this.submitted = false;
    location.reload();
    console.log("funciona");
    
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar envio de solicitud!',
      message: 'Empezaremos un gran convenio, la cooperación nos llevará mucho más lejos',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirmar',
          handler: () => {
            this.saveTutorial();
            this.next();
            this.activarWow();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  regiones = [
    'Amazonas',
    'Antioquia',
    'Arauca',
    'Atlántico',
    'Bolívar',
    'Boyacá',
    'Caldas',
    'Caquetá',
    'Casanare',
    'Cauca',
    'Cesar',
    'Chocó',
    'Córdoba',
    'Cundinamarca',
    'Guainía',
    'Guaviare',
    'Huila',
    'La Guajira',
    'Magdalena',
    'Meta',
    'Nariño',
    'Norte de Santander',
    'Putumayo',
    'Quindío',
    'Risaralda',
    'San Andrés y Providencia',
    'Santander',
    'Sucre',
    'Tolima',
    'Valle del Cauca',
    'Vaupés',
    'Vichada',
  ]

  ciudades = []

  ciudadesSeleccion = {
    'Amazonas':['Leticia','El Encanto','La Chorrera','La Pedrera','La Victoria','Miriti - Paraná','Puerto Alegría','Puerto Arica','Puerto Nariño','Puerto Santander','Tarapacá'],
    'Antioquia':['Medellín','Abejorral','Abriaquí','Alejandría','Amagá','Amalfi','Andes','Angelópolis','Angostura','Anorí','Anza','Apartadó','Arboletes','Argelia','Armenia','Barbosa','Bello','Belmira','Betania','Betulia','Briceño','Buriticá','Cáceres','Caicedo','Caldas','Campamento','Cañasgordas','Caracolí','Caramanta','Carepa','Carolina','Caucasia','Chigorodó','Cisneros','Ciudad Bolívar','Cocorná','Concepción','Concordia','Copacabana','Dabeiba','Don Matías','Ebéjico','El Bagre','El Carmen de Viboral','El Peñol','El Retiro','El Santuario','Entrerrios','Envigado','Frontino','Giraldo','Girardota','Gómez Plata','Granada','Guadalupe','Guarne','Guatapé','Heliconia','Hispania','Itagui','Ituango','Jardín','Jericó','La Ceja','La Estrella','La Pintada','La Unión','Liborina','Maceo','Marinilla','Montebello','Murindó','Mutatá','Nariño','Nechí','Necoclí','Olaya','Peque','Pueblorrico','Puerto Berrío','Puerto Nare','Puerto Triunfo','Remedios','Rionegro','Sabanalarga','Sabaneta','Salgar','San Andrés de Cuerquía','San Carlos','San Francisco','San Jerónimo','San José de La Montaña','San Juan de Urabá','San Luis','San Pedro','San Pedro de Uraba','San Rafael','San Roque','San Vicente','Santa Bárbara','Santa Rosa de Osos','Santafé de Antioquia','Santo Domingo','Segovia','Sonson','Sopetrán','Támesis','Tarazá','Tarso','Titiribí','Toledo','Turbo','Uramita','Urrao','Valdivia','Valparaíso','Vegachí','Venecia','Vigía del Fuerte','Yalí','Yarumal','Yolombó','Yondó','Zaragoza'],
    'Arauca':['Arauca','Arauquita','Cravo Norte','Fortul','Puerto Rondón','Saravena','Tame'],
    'Atlántico':['Barranquilla','Baranoa','Campo de La Cruz','Candelaria','Galapa','Juan de Acosta','Luruaco','Malambo','Manatí','Palmar de Varela','Piojó','Polonuevo','Ponedera','Puerto Colombia','Repelón','Sabanagrande','Sabanalarga','Santa Lucía','Santo Tomás','Soledad','Suan','Tubará','Usiacurí'],
    'Bolívar':['Cartagena de Indias','Achí','Altos del Rosario','Arenal','Arjona','Arroyohondo','Barranco de Loba','Calamar','Cantagallo','Cicuco','Clemencia','Córdoba','El Carmen de Bolívar','El Guamo','El Peñón','Hatillo de Loba','Magangué','Mahates','Margarita','María La Baja','Montecristo','Morales','Norosí','Pinillos','Regidor','Río Viejo','San Cristóbal','San Estanislao','San Fernando','San Jacinto','San Jacinto del Cauca','San Juan Nepomuceno','San Martín de Loba','San Pablo','Santa Catalina','Santa Cruz de Mompox','Santa Rosa','Santa Rosa del Sur','Simití','Soplaviento','Talaigua Nuevo','Tiquisio','Turbaco','Turbaná','Villanueva','Zambrano'],
    'Boyacá':['Tunja','Almeida','Aquitania','Arcabuco','Belén','Berbeo','Betéitiva','Boavita','Boyacá','Briceño','Buenavista','Busbanzá','Caldas','Campohermoso','Cerinza','Chinavita','Chiquinquirá','Chíquiza','Chiscas','Chita','Chitaraque','Chivatá','Chivor','Ciénega','Cómbita','Coper','Corrales','Covarachía','Cubará','Cucaita','Cuítiva','Duitama','El Cocuy','El Espino','Firavitoba','Floresta','Gachantivá','Gameza','Garagoa','Guacamayas','Guateque','Guayatá','Güicán','Iza','Jenesano','Jericó','La Capilla','La Uvita','La Victoria','Labranzagrande','Macanal','Maripí','Miraflores','Mongua','Monguí','Moniquirá','Motavita','Muzo','Nobsa','Nuevo Colón','Oicatá','Otanche','Pachavita','Páez','Paipa','Pajarito','Panqueba','Pauna','Paya','Paz de Río','Pesca','Pisba','Puerto Boyacá','Quípama','Ramiriquí','Ráquira','Rondón','Saboyá','Sáchica','Samacá','San Eduardo','San José de Pare','San Luis de Gaceno','San Mateo','San Miguel de Sema','San Pablo de Borbur','Santa María','Santa Rosa de Viterbo','Santa Sofía','Santana','Sativanorte','Sativasur','Siachoque','Soatá','Socha','Socotá','Sogamoso','Somondoco','Sora','Soracá','Sotaquirá','Susacón','Sutamarchán','Sutatenza','Tasco','Tenza','Tibaná','Tibasosa','Tinjacá','Tipacoque','Toca','Togüí','Tópaga','Tota','Tununguá','Turmequé','Tuta','Tutazá','Umbita','Ventaquemada','Villa de Leyva','Viracachá','Zetaquira'],
    'Caldas':['Manizales','Aguadas','Anserma','Aranzazu','Belalcázar','Chinchiná','Filadelfia','La Dorada','La Merced','Manzanares','Marmato','Marquetalia','Marulanda','Neira','Norcasia','Pácora','Palestina','Pensilvania','Riosucio','Risaralda','Salamina','Samaná','San José','Supía','Victoria','Villamaría','Viterbo'],
    'Caquetá':['Florencia','Albania','Belén de Los Andaquies','Cartagena del Chairá','Curillo','El Doncello','El Paujil','La Montañita','Milán','Morelia','Puerto Rico','San José del Fragua','San Vicente del Caguán','Solano','Solita','Valparaíso'],
    'Casanare':['Yopal','Aguazul','Chámeza','Hato Corozal','La Salina','Maní','Monterrey','Nunchía','Orocué','Paz de Ariporo','Pore','Recetor','Sabanalarga','Sácama','San Luis de Palenque','Támara','Tauramena','Trinidad','Villanueva'],
    'Cauca':['Popayán','Almaguer','Argelia','Balboa','Bolívar','Buenos Aires','Cajibío','Caldono','Caloto','Corinto','El Tambo','Florencia','Guachené','Guapí','Inzá','Jambaló','La Sierra','La Vega','López de Micay','Mercaderes','Miranda','Morales','Padilla','Páez','Patía','Piamonte','Piendamó','Puerto Tejada','Puracé','Rosas','San Sebastián','Santander de Quilichao','Santa Rosa','Silvia','Sotará','Suárez','Sucre','Timbío','Timbiquí','Toribío','Totoró','Villa Rica'],
    'Cesar':['Valledupar','Aguachica','Agustín Codazzi','Astrea','Becerril','Bosconia','Chimichagua','Chiriguaná','Curumaní','El Copey','El Paso','Gamarra','González','La Gloria','La Jagua de Ibirico','La Paz','Manaure Balcón del Cesar','Pailitas','Pelaya','Pueblo Bello','Río de Oro','San Alberto','San Diego','San Martín','Tamalameque'],
    'Chocó':['Quibdó','Acandí','Alto Baudó','Atrato','Bagadó','Bahía Solano','Bajo Baudó','Bojayá','Cértegui','Condoto','El Cantón de San Pablo','El Carmen de Atrato','El Carmen del Darién','El Litoral de San Juan','Istmina','Juradó','Lloró','Medio Atrato','Medio Baudó','Medio San Juan','Nóvita','Nuquí','Río Iró','Río Quito','Riosucio','San José del Palmar','Sipí','Tadó','Unguía','Unión Panamericana'],
    'Córdoba':['Montería','Ayapel','Buenavista','Canalete','Cereté','Chimá','Chinú','Ciénaga de Oro','Cotorra','La Apartada','Los Córdobas','Momil','Montelíbano','Moñitos','Planeta Rica','Pueblo Nuevo','Puerto Escondido','Puerto Libertador','Purísima','Sahagún','San Andrés de Sotavento','San Antero','San Bernardo del Viento','San Carlos','San José de Uré','San Pelayo','Santa Cruz de Lorica','Tierralta','Tuchín','Valencia'],
    'Cundinamarca':['Bogotá','Agua de Dios','Albán','Anapoima','Anolaima','Apulo','Arbeláez','Beltrán','Bituima','Bojacá','Cabrera','Cachipay','Cajicá','Caparrapí','Cáqueza','Carmen de Carupa','Chaguaní','Chía','Chipaque','Choachí','Chocontá','Cogua','Cota','Cucunubá','El Colegio','El Peñón','El Rosal','Facatativá','Fómeque','Fosca','Funza','Fúquene','Fusagasugá','Gachalá','Gachancipá','Gachetá','Gama','Girardot','Granada','Guachetá','Guaduas','Guasca','Guataquí','Guatavita','Guayabal de Síquima','Guayabetal','Gutiérrez','Jerusalén','Junín','La Calera','La Mesa','La Palma','La Peña','La Vega','Lenguazaque','Machetá','Madrid','Manta','Medina','Mosquera','Nariño','Nemocón','Nilo','Nimaima','Nocaima','Pacho','Paime','Pandi','Paratebueno','Pasca','Puerto Salgar','Pulí','Quebradanegra','Quetame','Quipile','Ricaurte','San Antonio del Tequendama','San Bernardo','San Cayetano','San Francisco','San Juan de Rioseco','Sasaima','Sesquilé','Sibaté','Silvania','Simijaca','Soacha','Sopó','Subachoque','Suesca','Supatá','Susa','Sutatausa','Tabio','Tausa','Tena','Tenjo','Tibacuy','Tibirita','Tocaima','Tocancipá','Topaipí','Ubalá','Ubaque','Ubaté','Une','Útica','Venecia','Vergara','Vianí','Villagómez','Villapinzón','Villeta','Viotá','Yacopí','Zipacón','Zipaquirá'],
    'Guainía':['Inírida','Barranco Minas','Mapiripana','San Felipe','Puerto Colombia','La Guadalupe','Cacahual','Pana Pana','Morichal'],
    'Guaviare':['San José del Guaviare','Calamar','El Retorno','Miraflores'],
    'Huila':['Neiva','Acevedo','Agrado','Aipe','Algeciras','Altamira','Baraya','Campoalegre','Colombia','Elías','Garzón','Gigante','Guadalupe','Hobo','Íquira','Isnos','La Argentina','La Plata','Nátaga','Oporapa','Paicol','Palermo','Palestina','Pital','Pitalito','Rivera','Saladoblanco','San Agustín','Santa María','Suaza','Tarqui','Tello','Teruel','Tesalia','Timaná','Villavieja','Yaguará'],
    'La Guajira':['Riohacha','Albania','Barrancas','Dibulla','Distracción','El Molino','Fonseca','Hatonuevo','La Jagua del Pilar','Maicao','Manaure','San Juan del Cesar','Uribia','Urumita','Villanueva'],
    'Magdalena':['Santa Marta','Algarrobo','Aracataca','Ariguaní','Cerro San Antonio','Chivolo','Ciénaga','Concordia','El Banco','El Piñon','El Retén','Fundación','Guamal','Nueva Granada','Pedraza','Pijiño del Carmen','Pivijay','Plato','Puebloviejo','Remolino','Sabanas de San Angel','Salamina','San Sebastián de Buenavista','San Zenón','San Zenón','Santa Ana','Santa Bárbara de Pinto','Sitionuevo','Tenerife','Zapayán','Zona Bananera'],
    'Meta':['Villavicencio','Acacías','Barranca de Upía','Cabuyaro','Castilla La Nueva','Cubarral','Cumaral','El Calvario','El Castillo','El Dorado','Fuente de Oro','Granada','Guamal','La Macarena','Lejanías','Mapiripán','Mesetas','Puerto Concordia','Puerto Gaitán','Puerto Lleras','Puerto López','Puerto Rico','Restrepo','San Carlos de Guaroa','San Juan de Arama','San Juanito','San Martín','Uribe','Vista Hermosa'],
    'Nariño':['Pasto','Albán','Aldana','Ancuya','Arboleda','Barbacoas','Belén','Buesaco','Chachagüí','Colón','Consacá','Contadero','Córdoba','Cuaspud','Cumbal','Cumbitara','El Charco','El Peñol','El Rosario','El Tablón de Gómez','El Tambo','Francisco Pizarro','Funes','Guachucal','Guaitarilla','Gualmatán','Iles','Imués','Ipiales','La Cruz','La Florida','La Llanada','La Tola','La Unión','Leiva','Linares','Los Andes','Magüí Payán','Mallama','Mosquera','Nariño','Olaya Herrera','Ospina','Policarpa','Potosí','Providencia','Puerres','Pupiales','Ricaurte','Roberto Payán','Samaniego','San Bernardo','San Lorenzo','San Pablo','San Pedro de Cartago','Sandoná','Santa Bárbara','Santacruz','Sapuyes','Taminango','Tangua','Tumaco','Túquerres','Yacuanquer'],
    'Norte de Santander':['Cúcuta','Ábrego','Arboledas','Bochalema','Bucarasica','Cáchira','Cácota','Chinácota','Chitagá','Convención','Cucutilla','Durania','El Carmen','El Tarra','El Zulia','Gramalote','Hacarí','Herrán','La Esperanza','La Playa de Belén','Labateca','Los Patios','Lourdes','Mutiscua','Ocaña','Pamplona','Pamplonita','Puerto Santander','Ragonvalia','Salazar de Las Palmas','San Calixto','San Cayetano','Santiago','Santo Domingo de Silos','Sardinata','Teorama','Tibú','Toledo','Villa Caro','Villa del Rosario'],
    'Putumayo':['Mocoa','Colón','Orito','Puerto Asís','Puerto Caicedo','Puerto Guzmán','Puerto Leguízamo','San Francisco','San Miguel','Santiago','Sibundoy','Valle del Guamuez','Villagarzón'],
    'Quindío':['Armenia','Buenavista','Calarca','Circasia','Córdoba','Filandia','Génova','La Tebaida','Montenegro','Pijao','Quimbaya','Salento'],
    'Risaralda':['Pereira','Apía','Balboa','Belén de Umbría','Dosquebradas','Guática','La Celia','La Virginia','Marsella','Mistrató','Pueblo Rico','Quinchía','Santa Rosa de Cabal','Santuario'],
    'San Andrés y Providencia':['San Andrés','Providencia','Santa Catalina','Cayos'],
    'Santander':['Bucaramanga','Aguada','Albania','Aratoca','Barbosa','Barichara','Barrancabermeja','Betulia','Bolívar','Cabrera','California','Capitanejo','Carcasí','Cepitá','Cerrito','Charalá','Charta','Chima','Chipatá','Cimitarra','Concepción','Confines','Contratación','Coromoro','Curití','El Carmen de Chucurí','El Guacamayo','El Peñón','El Playón','Encino','Enciso','Florián','Floridablanca','Galán','Gámbita','Girón','Guaca','Guadalupe','Guapotá','Guavatá','Güepsa','Hato','Jesús María','Jordán','La Belleza','La Paz','Landázuri','Lebrija','Los Santos','Macaravita','Málaga','Matanza','Mogotes','Molagavita','Ocamonte','Oiba','Onzaga','Palmar','Palmas del Socorro','Páramo','Piedecuesta','Pinchote','Puente Nacional','Puerto Parra','Puerto Wilches','Rionegro','Sabana de Torres','San Andrés','San Benito','San Gil','San Joaquín','San José de Miranda','San Miguel','San Vicente de Chucurí','Santa Bárbara','Santa Helena del Opón','Simacota','Socorro','Suaita','Sucre','Suratá','Tona','Valle de San José','Vélez','Vetas','Villanueva','Zapatoca'],
    'Sucre':['Sincelejo','Buenavista','Caimito','Chalán','Colosó','Corozal','Coveñas','El Roble','Galeras','Guaranda','La Unión','Los Palmitos','Majagual','Morroa','Ovejas','Palmito','Sampués','San Benito Abad','San Juan de Betulia','San Marcos','San Onofre','San Pedro','Santiago de Tolú','Sincé','Sucre','Tolúviejo'],
    'Tolima':['Ibagué','Alpujarra','Alvarado','Ambalema','Anzoátegui','Armero','Ataco','Cajamarca','Carmen de Apicalá','Casabianca','Chaparral','Coello','Coyaima','Cunday','Dolores','Espinal','Falan','Flandes','Fresno','Guamo','Herveo','Honda','Icononzo','Lérida','Líbano','Mariquita','Melgar','Murillo','Natagaima','Ortega','Palocabildo','Piedras','Planadas','Prado','Purificación','Rioblanco','Roncesvalles','Rovira','Saldaña','San Antonio','San Luis','Santa Isabel','Suárez','Valle de San Juan','Venadillo','Villahermosa','Villarrica'],
    'Valle del Cauca':['Cali','Alcalá','Andalucía','Ansermanuevo','Argelia','Bolívar','Buenaventura','Buga','Bugalagrande','Caicedonia','Calima - El Darién','Candelaria','Cartago','Dagua','El Águila','El Cairo','El Cerrito','El Dovio','Florida','Ginebra','Guacarí','Jamundí','La Cumbre','La Unión','La Victoria','Obando','Palmira','Pradera','Restrepo','Riofrío','Roldanillo','San Pedro','Sevilla','Toro','Trujillo','Tuluá','Ulloa','Versalles','Vijes','Yotoco','Yumbo','Zarzal'],
    'Vaupés':['Mitú','Caruru','Pacoa','Taraira','Papunaua','Yavaraté'],
    'Vichada':['Puerto Carreño','Cumaribo','La Primavera','Santa Rosalía'],

  } 


  cambioRegion(dato){
    //Aqui va tu logica de consulta a la BD

    this.ciudades = this.ciudadesSeleccion[dato]
  }

  departamentos: Departamento[] = [
    { departament: 'Amazonas'},
    { departament: 'Antioquia'},
    { departament: 'Arauca'},
    { departament: 'Atlántico'},
    { departament: 'Bolívar'},
    { departament: 'Boyacá'},
    { departament: 'Caldas'},
    { departament: 'Caquetá'},
    { departament: 'Casanare'},
    { departament: 'Cauca'},
    { departament: 'Cesar'},
    { departament: 'Chocó'},
    { departament: 'Córdoba'},
    { departament: 'Cundinamarca'},
    { departament: 'Guainía'},
    { departament: 'Guaviare'},
    { departament: 'Huila'},
    { departament: 'La Guajira'},
    { departament: 'Magdalena'},
    { departament: 'Meta'},
    { departament: 'Nariño'},
    { departament: 'Norte de Santander'},
    { departament: 'Putumayo'},
    { departament: 'Quindío'},
    { departament: 'Risaralda'},
    { departament: 'San Andrés y Providencia'},
    { departament: 'Santander'},
    { departament: 'Sucre'},
    { departament: 'Tolima'},
    { departament: 'Valle del Cauca'},
    { departament: 'Vaupés'},
    { departament: 'Vichada'}

  ];

}
