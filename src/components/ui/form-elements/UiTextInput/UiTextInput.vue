<script setup lang="ts">
import {Field, ErrorMessage} from 'vee-validate'

import {ref} from "vue";
import type {UiTextInputProps} from "@/components/ui/form-elements/UiTextInput/UiTextInputProps";

const internalValue = ref<any>('')

const {type = 'text', showPassword = false} = defineProps<UiTextInputProps>();

</script>

<template>
  <div class="ui-field-input ui-input" :aria-label="placeholder">
    <label v-if="placeholder" class="ui-field-input__label" :for="name">{{ placeholder }}</label>
    <Field :name="name" v-slot="{field}">
      <el-input v-model="internalValue" v-bind="field" :id="name" :type="type ?? 'text'" :placeholder="placeholder"
                :show-password="showPassword"/>
      <ErrorMessage :name="name"/>
    </Field>
  </div>
</template>