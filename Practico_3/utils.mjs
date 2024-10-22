import fs from "fs";

// Clase para representar un Superheroe
class Superheroe {
  constructor(
    id,
    nombreSuperheroe,
    nombreReal,
    nombreSociedad,
    edad,
    planetaOrigen,
    debilidad,
    poder,
    habilidadEspecial,
    aliado,
    enemigo
  ) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}

// Función para leer y ordenar los superhéroes
export function leerSuperheroes(ruta) {
  const datos = fs.readFileSync(ruta, "utf8");
  const superhéroesArray = JSON.parse(datos);

  // Convertir a instancias de Superhéroe
  const superhéroes = superhéroesArray.map(
    (hero) =>
      new Superheroe(
        hero.id,
        hero.nombreSuperheroe,
        hero.nombreReal,
        hero.nombreSociedad,
        hero.edad,
        hero.planetaOrigen,
        hero.debilidad,
        hero.poder,
        hero.habilidadEspecial,
        hero.aliado,
        hero.enemigo
      )
  );

  // Ordenar por nombre de superhéroe
  superhéroes.sort((a, b) =>
    a.nombreSuperheroe.localeCompare(b.nombreSuperheroe)
  );
  return superhéroes;
}
