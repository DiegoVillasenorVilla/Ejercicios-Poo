// Diametros:
//Mercurio: 3100, Venus:7700, Tierra:7920, Marte:4200, Jupiter:88640
//Saturno:74500, Urano:32000, Neptuno:31000, Pluton:1500
//Distancia del sol:
//Mercurio: 36, Venus:67, Tierra:93, Marte:141, Jupiter:483
//Saturno:886, Urano:1782, Neptuno:2793, Pluton:3670
class Distancias{
 constructor(x,y){
    this.x=x;
    this.y=y;
 };
 CalcularDistancia(planet1, planet2){
     var distancia=planet2.y-planet1.x;
     return new Distancias(distancia)
 };

};