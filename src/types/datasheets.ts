export class UnitAttributes {
  movement: string
  toughness: string
  save: string
  wounds: string
  leadership: string
  objective_control: string

  constructor(args?: Partial<IUnitAttributes>) {
    this.movement = args?.movement || ''
    this.toughness = args?.toughness || ''
    this.save = args?.save || ''
    this.wounds = args?.wounds || ''
    this.leadership = args?.leadership || ''
    this.objective_control = args?.objective_control || ''
  }
}
export interface IUnitAttributes extends UnitAttributes {}

export class WeaponAttributes {
  range: string
  attacks: string
  skill: string
  strength: string
  armour_penetration: string
  damage: string

  constructor(args?: Partial<IWeaponAttributes>) {
    this.range = args?.range || ''
    this.attacks = args?.attacks || ''
    this.skill = args?.skill || ''
    this.strength = args?.strength || ''
    this.armour_penetration = args?.armour_penetration || ''
    this.damage = args?.damage || ''
  }
}
export interface IWeaponAttributes extends WeaponAttributes {}

export class Weapon {
  name: string
  abilities?: string[]
  attributes: IWeaponAttributes

  constructor(args?: Partial<IWeapon>) {
    this.name = args?.name || ''
    this.abilities = args?.abilities || []
    this.attributes = args?.attributes || new WeaponAttributes()
  }
}
export interface IWeapon extends Weapon {}

export class WargearOption {
  text: string
  options: string[]

  constructor(args?: Partial<IWargearOption>) {
    this.text = args?.text || ''
    this.options = args?.options || []
  }
}
export interface IWargearOption extends WargearOption {}

export class Ability {
  type: string
  name: string
  id: string
  text: string

  constructor(args?: Partial<IAbility>) {
    this.type = args?.type || ''
    this.name = args?.name || ''
    this.id = args?.id || ''
    this.text = args?.text || ''
  }
}
export interface IAbility extends Ability {}

export class UnitComposition {
  models: string[]
  loadout: string

  constructor(args?: Partial<IUnitComposition>) {
    this.models = args?.models || []
    this.loadout = args?.loadout || ''
  }
}
export interface IUnitComposition extends UnitComposition {}

export class Datasheet {
  name: string
  attributes: IUnitAttributes
  ranged_weapons: IWeapon[]
  melee_weapons: IWeapon[]
  wargear_options: IWargearOption[]
  abilities: IAbility[]
  unit_composition: IUnitComposition
  keywords: string[]
  faction: string

  constructor(args?: Partial<IDatasheet>) {
    this.name = args?.name || ''
    this.attributes = args?.attributes || new UnitAttributes()
    this.ranged_weapons = args?.ranged_weapons || []
    this.melee_weapons = args?.melee_weapons || []
    this.wargear_options = args?.wargear_options || []
    this.abilities = args?.abilities || []
    this.unit_composition = args?.unit_composition || new UnitComposition()
    this.keywords = args?.keywords || []
    this.faction = args?.faction || ''
  }
}
export interface IDatasheet extends Datasheet {}
