// ========================================
// DASHBOARD UI
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateDashboardUI();

    }
);

// ========================================
// UPDATE UI
// ========================================

function updateDashboardUI() {

    const level =
        document.querySelector(".hero-left h1");

    const xpText =
        document.querySelector(".xp-header span");

    const xpFill =
        document.querySelector(".xp-fill");

    const energy =
        document.querySelector(".energy-pill");

    if(level){

        level.innerText =
            userData.level;

    }

    if(xpText){

        xpText.innerText =
            `${userData.xp} / ${userData.nextLevelXp} XP`;

    }

    if(xpFill){

        const percentage =
            (userData.xp / userData.nextLevelXp) * 100;

        xpFill.style.width =
            `${percentage}%`;

    }

    if(energy){

        energy.innerText =
            `${userData.energy} ENERGY`;

    }

}

// ========================================
// MISSION BUTTONS
// ========================================

const missionButtons =
    document.querySelectorAll(".mission-button");

missionButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            addXP(150);

            pulseButton(button);

        }
    );

});

// ========================================
// BUTTON EFFECT
// ========================================

function pulseButton(button){

    button.style.transform =
        "scale(0.95)";

    setTimeout(() => {

        button.style.transform =
            "scale(1)";

    }, 120);

}