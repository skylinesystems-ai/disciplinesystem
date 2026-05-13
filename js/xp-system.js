// ========================================
// XP SYSTEM
// ========================================

function calculateNextLevel(level) {
    return Math.floor(
        1000 * Math.pow(level, 1.2)
    );
}

// ========================================
// ADD XP
// ========================================

function addXP(amount) {

    userData.xp += amount;

    if (userData.xp >= userData.nextLevelXp) {
        levelUp();
    }

    saveUserData();

    updateDashboardUI();
}

// ========================================
// LEVEL UP
// ========================================

function levelUp() {

    userData.level++;

    userData.xp =
        userData.xp - userData.nextLevelXp;

    userData.nextLevelXp =
        calculateNextLevel(userData.level);

    showLevelUpAnimation();

    saveUserData();
}

// ========================================
// LEVEL UP EFFECT
// ========================================

function showLevelUpAnimation() {

    const levelUpDiv =
        document.createElement("div");

    levelUpDiv.classList.add("level-up-popup");

    levelUpDiv.innerHTML = `
    <div class="level-up-content">
      <span>LEVEL UP</span>
      <h1>LEVEL ${userData.level}</h1>
    </div>
  `;

    document.body.appendChild(levelUpDiv);

    setTimeout(() => {
        levelUpDiv.remove();
    }, 4000);
}