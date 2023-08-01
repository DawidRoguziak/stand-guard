<script setup lang="ts">
import type {UiSelectProps} from "@/components/ui/form-elements/UiSelect/UiSelectProps";
import {ref} from "vue";
import {ErrorMessage, Field} from "vee-validate";

const {placeholder, name, options, teleported = true} = defineProps<UiSelectProps>();
const internalValue = ref<UiSelectProps>()

</script>

<template>
  <div class="ui-field-input ui-select" :aria-label="placeholder">
    <label v-if="placeholder" class="ui-field-input__label" :for="name">{{ placeholder }}</label>
    <Field :name="name" v-slot="{field}">
      <el-select :id="name" v-model="internalValue" :placeholder="placeholder"
                 fit-input-width
                 placement="bottom-start"
                 :teleported="teleported"
                 value-key="key"
                 v-bind="field">
          <el-option
              v-for="item in options"
              :key="item.key"
              :label="item.label"
              :value="item"
          />
      </el-select>
      <ErrorMessage :name="name"/>
    </Field>
  </div>
</template>
