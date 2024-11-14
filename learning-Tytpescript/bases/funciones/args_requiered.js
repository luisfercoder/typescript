"use strict";
(() => {
    const fullName = (fisrtName, lastName) => {
        return `${fisrtName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
