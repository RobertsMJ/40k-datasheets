<script setup lang="ts">
import { reactive } from 'vue'
import DatasheetAttributeInput from '../components/DatasheetAttributeInput.vue'
import DatasheetCreateWeaponsTable from '../components/DatasheetCreateWeaponsTable.vue'
import { Datasheet, Weapon } from '@/types/datasheets'
import { useSaveDatasheet } from '@/composables/useSaveDatasheet'

const getInitialFormState = () =>
  new Datasheet({
    ranged_weapons: [new Weapon()],
    melee_weapons: [new Weapon()]
  })

const form = reactive(getInitialFormState())

const { saveDatasheet: onSave } = useSaveDatasheet(() => form)

const onClear = () => {
  Object.assign(form, getInitialFormState())
}
</script>
<template>
  <form>
    <label for="name" class="form__label">Name</label>
    <input class="input" type="text" name="name" v-model="form.name" />

    <fieldset class="form__attributes-fieldset">
      <DatasheetAttributeInput
        label="M"
        decorator='"'
        v-model="form.attributes.movement"
      />
      <DatasheetAttributeInput label="T" v-model="form.attributes.toughness" />
      <DatasheetAttributeInput
        label="SV"
        decorator="+"
        v-model="form.attributes.save"
      />
      <DatasheetAttributeInput label="W" v-model="form.attributes.wounds" />
      <DatasheetAttributeInput
        label="LD"
        decorator="+"
        v-model="form.attributes.leadership"
      />
      <DatasheetAttributeInput
        label="OC"
        v-model="form.attributes.objective_control"
      />
    </fieldset>
    <fieldset class="form__attributes-fieldset">
      <DatasheetCreateWeaponsTable
        v-model="form.ranged_weapons"
        name="Ranged Weapons"
        skill="BS"
      />
      <DatasheetCreateWeaponsTable
        v-model="form.melee_weapons"
        name="Melee Weapons"
        skill="WS"
      />
    </fieldset>

    <button type="button" @click="onSave">save</button>
    <button type="reset" @click="onClear">reset</button>
  </form>
</template>
<style scoped lang="scss">
.form__attributes-fieldset {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
}
.form__label {
  display: flex;
}
</style>
