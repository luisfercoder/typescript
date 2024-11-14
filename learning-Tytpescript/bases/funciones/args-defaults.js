"use strict";
(() => {
    const fullName = (fisrtName, lastName, upper = false) => {
        if (upper) {
            return `${fisrtName} ${lastName || "No hay lastName"}`.toUpperCase();
        }
        return `${fisrtName} ${lastName || "No hay lastName"}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
