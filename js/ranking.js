// ========================================
// RANKING SYSTEM
// ========================================

const rankingPlayers = [

    {
        name:"Shadow Monarch",
        level:72,
        xp:92000
    },

    {
        name:"Iron Discipline",
        level:68,
        xp:87000
    },

    {
        name:"Night Runner",
        level:64,
        xp:80000
    }

];

// ========================================
// RENDER RANKING
// ========================================

function renderRanking(){

    const rankingContainer =
        document.querySelector(".ranking-list");

    if(!rankingContainer) return;

    rankingContainer.innerHTML = "";

    rankingPlayers.forEach((player,index)=>{

        const card =
            document.createElement("article");

        card.classList.add("ranking-card");

        card.innerHTML = `
      <div class="rank-position">
        #${index + 1}
      </div>

      <div class="player-info">
        <h2>${player.name}</h2>
        <p>LEVEL ${player.level}</p>
      </div>

      <div class="xp-total">
        ${player.xp} XP
      </div>
    `;

        rankingContainer.appendChild(card);

    });

}

renderRanking();