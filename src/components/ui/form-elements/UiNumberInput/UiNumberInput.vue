<script setup lang="ts">
import {Field, ErrorMessage} from 'vee-validate'

import {ref} from "vue";
import type {UiNumberInputProps} from "@/components/ui/form-elements/UiNumberInput/UiNumberInputProps";


const internalValue = ref<number>()

const {
  showPassword = false,
  max = 100,
  min = 0,
  controlsPosition = 'right'
} = defineProps<UiNumberInputProps>();

</script>

<template>
  <div class="ui-field-input ui-number" :aria-label="placeholder">
    <label v-if="placeholder" class="ui-field-input__label" :for="name">{{ placeholder }}</label>
    <Field :name="name" v-slot="{field}">
      <el-input-number v-model="internalValue"
                       v-bind="field"
                       :id="name"
                       :placeholder="placeholder"
                       :controls-position="controlsPosition"
                       :min="min"
                       :max="max"
                       :show-password="showPassword"
                       class="w-full"
      />
      <ErrorMessage :name="name"/>
    </Field>
  </div>
</template>