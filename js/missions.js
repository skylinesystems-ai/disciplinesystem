// ========================================
// MISSIONS SYSTEM
// ========================================

const missions = [

    {
        title: "Treino Completo",
        xp: 120,
        difficulty: "medium"
    },

    {
        title: "Correr 5KM",
        xp: 300,
        difficulty: "hard"
    },

    {
        title: "Ler 20 páginas",
        xp: 50,
        difficulty: "easy"
    }

];

// ========================================
// COMPLETE MISSION
// ========================================

function completeMission(xp) {

    addXP(xp);

    userData.streak++;

    saveUserData();

    showMissionComplete();
}

// ========================================
// COMPLETE EFFECT
// ========================================

function showMissionComplete() {

    const popup =
        document.createElement("div");

    popup.classList.add("mission-popup");

    popup.innerHTML = `
    <div class="mission-popup-content">
      <h2>MISSÃO COMPLETA</h2>
      <p>Você ganhou XP.</p>
    </div>
  `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);

}