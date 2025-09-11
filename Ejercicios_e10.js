const partidos = [
    {
        juego: 1,
        LosToros: 0,
        SanFernando: 4
    },
    {
        juego: 2,
        LosToros: 8,
        SanFernando: 6
    },
    {
        juego: 3,
        LosToros: 5,
        SanFernando: 3
    },
    {
        juego: 4,
        LosToros: 6,
        SanFernando: 4
    },
    {
        juego: 5,
        LosToros: 4,
        SanFernando: 5
    },
    {
        juego: 6,
        LosToros: 3,
        SanFernando: 4
    },
    {
        juego: 7,
        LosToros: 8,
        SanFernando: 6
    },
];

const numPartidos = partidos.length;


for(let i = 0; i < numPartidos; i++) {
  const p = partidos.shift();
  console.log('Resultados del partido ${p.juego}: Los Toros ${p.LosToros} - San Fernando ${p.SanFernando}');
}
console.log("partidos:", partidos);

console.log('resultados del partido &{partido[1]. {p1.juego}: los Toros ${p1.LosToros} - San Fernando ${p1.SanFernando}');
const p1 = partidos.shift();

console.log('resultados del partido &{partido[2]. {p2.juego}: los Toros ${p2.LosToros} - San Fernando ${p2.SanFernando}');
const p2 = partidos.shift();

console.log('resultados del partido &{partido[3]. {p3.juego}: los Toros ${p3.LosToros} - San Fernando ${p3.SanFernando}');
const p3 = partidos.shift();

console.log('resultados del partido &{partido[4]. {p4.juego}: los Toros ${p4.LosToros} - San Fernando ${p4.SanFernando}');
const p4 = partidos.shift();

console.log('resultados del partido &{partido[5]. {p5.juego}: los Toros ${p5.LosToros} - San Fernando ${p5.SanFernando}');
const p5 = partidos.shift();

console.log('resultados del partido &{partido[6]. {p6.juego}: los Toros ${p6.LosToros} - San Fernando ${p6.SanFernando}');
const p6 = partidos.shift();

console.log('resultados del partido &{partido[7]. {p7.juego}: los Toros ${p7.LosToros} - San Fernando ${p7.SanFernando}');
const p7 = partidos.shift();