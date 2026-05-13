// ========================================
// ACHIEVEMENTS SYSTEM
// ========================================

const achievements = [

    {
        id:1,
        title:"Primeiro Level Up",
        requirement:10
    },

    {
        id:2,
        title:"Streak Monster",
        requirement:30
    }

];

// ========================================
// CHECK ACHIEVEMENTS
// ========================================

function checkAchievements() {

    achievements.forEach(achievement => {

        if(
            userData.level >= achievement.requirement &&
            !userData.achievements.includes(
                achievement.id
            )
        ){

            unlockAchievement(achievement);

        }

    });

}

// ========================================
// UNLOCK
// ========================================

function unlockAchievement(achievement){

    userData.achievements.push(
        achievement.id
    );

    saveUserData();

    showAchievementPopup(
        achievement.title
    );

}

// ========================================
// POPUP
// ========================================

function showAchievementPopup(title){

    const popup =
        document.createElement("div");

    popup.classList.add(
        "achievement-popup"
    );

    popup.innerHTML = `
    <div class="achievement-popup-content">
      <span>ACHIEVEMENT</span>
      <h2>${title}</h2>
    </div>
  `;

    document.body.appendChild(popup);

    setTimeout(()=>{
        popup.remove();
    },4000);

}