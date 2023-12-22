export interface IUnitAttributes {
  movement: string
  toughness: string
  save: string
  wounds: string
  leadership: string
  objective_control: string
}
export interface IWeaponAttributes {
  range: string
  attacks: string
  ballistic_skill?: string
  weapon_skill?: string
  strength: string
  armour_penetration: string
  damage: string
}
export interface IWeapon {
  name: string
  profiles?: IWeapon[]
  abilities?: string[]
  attributes: IWeaponAttributes
}
export interface IWargearOption {
  text: string
  options?: string[]
}
export interface IAbility {
  type?: string
  name: string
  id?: string
  text?: string
}
export interface IUnitComposition {
  models: string[]
  loadout: string
}
export interface IDatasheet {
  name: string
  attributes: IUnitAttributes
  ranged_weapons: IWeapon[]
  melee_weapons: IWeapon[]
  wargear_options: IWargearOption[]
  abilities: IAbility[]
  unit_composition: IUnitComposition
  keywords: string[]
  faction: string
}
