

import noneAvatar from '../images/anonim.png';

const teamsContent = document.getElementsByClassName('teamsContent')[0];


const SOCIAL_NETWORKS = Object.freeze( {
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    LINKED_IN: "LINKED_IN",
    GOOGLE_PLUS: "GOOGLE_PLUS",
    REDDIT: "REDDIT",
});

fetch('./data/employees.json')
.then(response => response.json())
.then(teams => {
   teams.forEach((team) => {
       teamsContent.appendChild(createTeamCard(team));
   })
}).catch(console.error);

function createTeamCard(team) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('teamCard');

    const teamImage = createTeamImageElem(team);
    teamCard.appendChild(teamImage);

    const teamFullName = createFullNameElem(team);
    teamCard.appendChild(teamFullName);

    const teamRole = createTeamRoleElem(team);
    teamCard.appendChild(teamRole);

    const teamDescription = createTeamDescriptionElem(team);
    teamCard.appendChild(teamDescription);

    const teamSocialNetworks = createSocialNetworksListElem(team);
    teamCard.appendChild(teamSocialNetworks);

    return teamCard;
}

function createTeamImageElem(team) {
    const teamImageContainer = document.createElement('div');
    teamImageContainer.classList.add('teamImageContainer');

    const teamImage = new Image();
    teamImage.src = team.avatar;
    teamImage.alt = 'avatar';

    teamImage.onerror = () => {
        teamImage.src = noneAvatar;
        teamImage.style.border = '1px solid black';

    };

    teamImageContainer.appendChild(teamImage);

    return teamImageContainer;
}

function createFullNameElem(team) {
    const fullName = document.createElement('h4');
    fullName.classList.add('fullName');
    fullName.innerText = team.name;

    return fullName;
}

function createTeamRoleElem(team) {
    const teamRole = document.createElement('h5');
    teamRole.classList.add('teamRole');
    teamRole.innerText = team.position;

    return teamRole;
}

function createTeamDescriptionElem(team) {
    const teamDescription = document.createElement('p');
    teamDescription.classList.add('teamDescription');
    teamDescription.innerText = team.description;

    return teamDescription;
}

function createSocialNetworksListElem(team) {
    const socialNetworkListContainer = document.createElement('div');
    socialNetworkListContainer.classList.add('socialNetworkList');

    team.contacts.forEach(socialLink => {

        if (SOCIAL_NETWORKS[socialLink.type]) {

            const link = document.createElement('a');
            link.href = socialLink.href;

            const icon = document.createElement('i');

            link.appendChild(icon);

            socialNetworkListContainer.appendChild(link);

            switch (socialLink.type) {
                case SOCIAL_NETWORKS.FACEBOOK:
                    icon.setAttribute("class", "fab fa-facebook-f");
                    break;
                case SOCIAL_NETWORKS.TWITTER:
                    icon.setAttribute("class", "fab fa-twitter");
                    break;
                case SOCIAL_NETWORKS.LINKED_IN:
                    icon.setAttribute("class", "fab fa-linkedin-in");
                    break;
                case SOCIAL_NETWORKS.GOOGLE_PLUS:
                    icon.setAttribute("class", "fab fa-google-plus-g");
                    break;
                case SOCIAL_NETWORKS.REDDIT:
                    icon.setAttribute("class", "fas fa-basketball-ball");
                    break;
            }
        }

    });

    return socialNetworkListContainer;
}

