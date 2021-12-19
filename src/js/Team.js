import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Daemon from './Daemon';
import Magician from './Magician';
import Undead from './Undead';
import Vampire from './Vampire';

export default class Team {
  static getStartUserTeam() {
    return [new Bowman(1), new Swordsman(1)];
  }

  static getUserTeam() {
    return [Bowman, Swordsman, Magician];
  }

  static getEnemyTeam() { // comp
    return [Daemon, Undead, Vampire];
  }
}
