type Cars={
  carroceria:string;
  modelo:string;
  antibalas:boolean;
  pasajeros:number;
  disparar?:()=>void
}
// Objetos
const batimovil:Cars= {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villians={
  nombre:string;
  edad?:number ;
  mutante:boolean;
}
const villanos:Villians[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charls={
  poder:string;
  estatura:number;
}
const charles:Charls = {
  poder:"psiquico",
  estatura: 1.78
};

type Apoca={
  lider:boolean;
  miembros:string[];
 
}
const apocalipsis:Apoca = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:(Charls|Apoca);

mystique = charles;
mystique = apocalipsis;
