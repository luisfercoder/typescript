"use strict";
(() => {
    const fullName = (fisrtName, lastName) => {
        return `${fisrtName} ${lastName || "No hay lastName"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
