<script setup lang="ts">
import type {UiSelectProps} from "@/components/ui/form-elements/UiSelect/UiSelectProps";
import {ref} from "vue";
import {ErrorMessage, Field} from "vee-validate";

const {placeholder, name, options, teleported = true} = defineProps<UiSelectProps>();
const internalValue = ref<any>()
</script>

<template>
  <div class="ui-field-input ui-select" :aria-label="placeholder">
    <label v-if="placeholder" class="ui-field-input__label" :for="name">{{ placeholder }}</label>
    <Field :name="name" v-slot="{field}">
      <el-select :id="name" :model-value="field.value" :placeholder="placeholder"
                 :teleported="teleported"
                 v-bind="field">
        <slot :options="options">
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
