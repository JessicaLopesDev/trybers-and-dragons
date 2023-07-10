import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._necromancerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._necromancerInstances;
  }
}

export default Necromancer;
