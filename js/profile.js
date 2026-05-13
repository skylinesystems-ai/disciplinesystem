// ========================================
// PROFILE SYSTEM
// ========================================

function updateProfile() {

    const profileName =
        document.querySelector(".profile-card h1");

    const profileClass =
        document.querySelector(".profile-class");

    if(profileName){

        profileName.innerText =
            userData.username;

    }

    if(profileClass){

        profileClass.innerText =
            userData.class;

    }

}

updateProfile();