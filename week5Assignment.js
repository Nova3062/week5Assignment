class Character { // establishing a class to allow creation of objects
    constructor(name, skill) { // function used to create and initialize objects of the class
        this.name = name;
        this.skill = skill;
    }

    introduce() { //method to annouce information about the players in the class
        return `${this.name} uses ${this.skill}.`; //
    }
}

class Team {
    constructor(name){
        this.name = name;
        this.players = [];
    }
    addPlayer(players){
        if (players instanceof Character) {
            this.players.push(players);
        } else {
            throw new Error(`Add player only. Argument not a player; ${players}`)
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('hasta luego!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
        `);
    }

    
    deleteTeam(){
        let team = prompt('index of team to be deleted')
            this.teams.splice(new Team(name));
    }
    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter Name for new team');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('enter the index of the team you wish to view: ');
        if (index > -1 && index < this.teams.length) {
           this.selectedTeam = this.teams[index];
           let description = 'Team Name: ' + this.selectedTeam.name + '\n';
           
           alert(description);

        
        }
    }
}

let menu = new Menu();
menu.start();

