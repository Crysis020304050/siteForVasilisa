
import {loadJson} from '../utils/fetchLoader.js';
import {createTeamCard} from "./components/createTeamCards.js";

const teamsContent = document.getElementsByClassName('teamsContent')[0];


loadJson('./data/employees.json')
    .then(teams => {
        teams.forEach(team => {
            teamsContent.appendChild(createTeamCard(team));
        })
    });