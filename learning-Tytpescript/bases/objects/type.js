"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    let superman = {
        name: "superman",
        age: 35,
        powers: ["Super fuerza"],
        getName() {
            return this.name;
        }
    };
})();
