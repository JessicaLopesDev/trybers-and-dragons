import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _contador = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._contador += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._contador;
  }
}

export default Elf;
