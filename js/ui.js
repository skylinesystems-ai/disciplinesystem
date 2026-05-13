// ========================================
// UI EFFECTS
// ========================================

document.addEventListener(
    "mousemove",
    (e) => {

        const glow =
            document.querySelector(
                ".background-glow"
            );

        if(glow){

            glow.style.left =
                `${e.clientX}px`;

            glow.style.top =
                `${e.clientY}px`;

        }

    }
);

// ========================================
// CARD HOVER FX
// ========================================

const cards =
    document.querySelectorAll(
        ".mission-card, .stat-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0px)";

        }
    );

});