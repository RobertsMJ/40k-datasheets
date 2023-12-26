export interface IDatasheetUnitAttributes {
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
  skill: string
  strength: string
  armour_penetration: string
  damage: string
}
export interface IDatasheetWeapon {
  name: string
  abilities?: string[]
  attributes: IWeaponAttributes
}
export interface IDatasheetWargearOption {
  text: string
  options?: string[]
}
export interface IDatasheetAbility {
  type?: string
  name: string
  id?: string
  text?: string
}
export interface IDatasheetUnitComposition {
  models: string[]
  loadout: string
}
export interface IDatasheet {
  name: string
  attributes: IDatasheetUnitAttributes
  ranged_weapons: IDatasheetWeapon[]
  melee_weapons: IDatasheetWeapon[]
  wargear_options: IDatasheetWargearOption[]
  abilities: IDatasheetAbility[]
  unit_composition: IDatasheetUnitComposition
  keywords: string[]
  faction: string
}
