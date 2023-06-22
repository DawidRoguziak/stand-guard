<script setup lang="ts">
import type UiSelectProps from "@/components/form-elements/UiSelect/UiSelectProps";
import {ref} from "vue";
import {ErrorMessage, Field} from "vee-validate";

const {placeholder, name, options} = defineProps<UiSelectProps>();
const internalValue = ref<any>()
</script>

<template>
  <div class="ui-field-input" :aria-label="placeholder">
    <label v-if="placeholder" class="ui-field-input__label" :for="name">{{ placeholder }}</label>
    <Field :name="name" v-slot="{field}">
      <el-select :id="name" :model-value="field.value" :placeholder="placeholder"
                 v-bind="field">
        <slot>
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </slot>
      </el-select>
      <ErrorMessage :name="name"/>
    </Field>
  </div>
</template>
