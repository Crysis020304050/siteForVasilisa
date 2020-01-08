

import noneAvatar from '../images/userNoneAvatar.png';

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
});

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
       if (socialLink.type === SOCIAL_NETWORKS.FACEBOOK) {
           const teamFacebook = document.createElement('a');
           teamFacebook.href = socialLink.href;

           const facebookIcon = document.createElement('i');
           facebookIcon.setAttribute("class", "fab fa-facebook-f");
           teamFacebook.appendChild(facebookIcon);

           socialNetworkListContainer.appendChild(teamFacebook);
       }

        if (socialLink.type === SOCIAL_NETWORKS.TWITTER) {
            const teamTwitter = document.createElement('a');
            teamTwitter.href = socialLink.href;

            const twitterIcon = document.createElement('i');
            twitterIcon.setAttribute("class", "fab fa-twitter");
            teamTwitter.appendChild(twitterIcon);

            socialNetworkListContainer.appendChild(teamTwitter);
        }

        if (socialLink.type === SOCIAL_NETWORKS.LINKED_IN) {
            const teamLinkedIn = document.createElement('a');
            teamLinkedIn.href = socialLink.href;

            const linkedInIcon = document.createElement('i');
            linkedInIcon.setAttribute("class", "fab fa-linkedin-in");
            teamLinkedIn.appendChild(linkedInIcon);

            socialNetworkListContainer.appendChild(teamLinkedIn);
        }

        if (socialLink.type === SOCIAL_NETWORKS.GOOGLE_PLUS) {
            const teamGooglePlus = document.createElement('a');
            teamGooglePlus.href = socialLink.href;

            const googlePlusIcon = document.createElement('i');
            googlePlusIcon.setAttribute("class", "fab fa-google-plus-g");
            teamGooglePlus.appendChild(googlePlusIcon);

            socialNetworkListContainer.appendChild(teamGooglePlus);
        }

        if (socialLink.type === SOCIAL_NETWORKS.REDDIT) {
            const teamReddit = document.createElement('a');
            teamReddit.href = socialLink.href;

            const redditIcon = document.createElement('i');
            redditIcon.setAttribute("class", "fas fa-basketball-ball");
            teamReddit.appendChild(redditIcon);

            socialNetworkListContainer.appendChild(teamReddit);
        }
    });

    return socialNetworkListContainer;
}

