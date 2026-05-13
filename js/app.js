// ========================================
// DISCIPLINE SYSTEM CORE
// ========================================

const defaultUserData = {

    username: "Mario",

    class: "Shadow Runner",

    level: 12,

    xp: 780,

    nextLevelXp: 1000,

    streak: 14,

    discipline: 92,

    focus: 87,

    resistance: 77,

    energy: 87,

    achievements: [],

    completedMissions: []

};

let userData =
    JSON.parse(
        localStorage.getItem("discipline-user")
    ) || defaultUserData;

// ========================================
// SAVE
// ========================================

function saveUserData(){

    localStorage.setItem(
        "discipline-user",
        JSON.stringify(userData)
    );

}

// ========================================
// RESET USER
// ========================================

function resetUser(){

    localStorage.removeItem(
        "discipline-user"
    );

    location.reload();

}

// ========================================
// ENERGY SYSTEM
// ========================================

function decreaseEnergy(amount){

    userData.energy -= amount;

    if(userData.energy < 0){
        userData.energy = 0;
    }

    saveUserData();

}

// ========================================
// DAILY REWARD
// ========================================

function dailyReward(){

    userData.xp += 50;

    saveUserData();

}

// ========================================
// INITIALIZE
// ========================================

saveUserData();

// ========================================
// LOADING SCREEN
// ========================================

window.addEventListener(
    "load",
    () => {

        const loading =
            document.querySelector(
                ".loading-screen"
            );

        if(loading){

            setTimeout(()=>{

                loading.style.opacity = "0";

                loading.style.pointerEvents =
                    "none";

                setTimeout(()=>{

                    loading.remove();

                },600);

            },1800);

        }

    }
);