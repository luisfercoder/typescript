"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzasHeros;
    (function (FuerzasHeros) {
        FuerzasHeros[FuerzasHeros["acuaman"] = 0] = "acuaman";
        FuerzasHeros[FuerzasHeros["batman"] = 1] = "batman";
        FuerzasHeros[FuerzasHeros["flash"] = 5] = "flash";
        FuerzasHeros[FuerzasHeros["superman"] = 100] = "superman";
    })(FuerzasHeros || (FuerzasHeros = {}));
    const fuerzaFlash = FuerzasHeros.flash;
    const fuerzaSuperman = FuerzasHeros.superman;
    const fuerzaBatman = FuerzasHeros.batman;
    const fuerzaAcuaman = FuerzasHeros.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
