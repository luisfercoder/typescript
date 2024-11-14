"use strict";
(() => {
    const fullName = (fisrtName, ...restArgs) => {
        return `${fisrtName} ${restArgs.join(" ")} `;
    };
    const superman = fullName("Clark", "Joshep", "Kent");
    console.log(superman);
})();
