<script lang="ts" setup>
import {Form as VeeForm} from 'vee-validate';
import UiTextInput from "@/components/ui/form-elements/UiTextInput/UiTextInput.vue";
import {object, string} from "yup";
import UIBlock from "@/components/ui/UiBlock/UIBlock.vue";
import UiSelect from "@/components/ui/form-elements/UiSelect/UiSelect.vue";
import {useI18n} from "vue-i18n";
import {useLangStore} from "@/langs/LangStore";
import {useGlobalLoaderStore} from "@/components/utility/GlobalLoader/GlobalLoaderStore";
import {useRouter} from "vue-router";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {useProfileStore} from "@/modules/profile/stores/ProfileStore";

const schema = object({
  name: string().required().min(3).max(20),
})

const {t} = useI18n();
const {setLang, getLang} = useLangStore();
const {push} = useRouter();
const {showLoader, hideLoader} = useGlobalLoaderStore();

const {createProfile, selectLastCreatedProfile, profile} = useProfileStore();
const onSubmit = (values: any) => {
  showLoader();
  setLang(values.lang);
  createProfile({
    lang: values.lang,
    name: values.name,
    username: values.username,
    theme: values.theme,
    plan: null
  }).then(() => {
    selectLastCreatedProfile()
        .then(() => {
          push({name: 'guard-home'});
          hideLoader();
        })
        .catch(() => {
          hideLoader();
        })
  });
}

</script>

<template>
  <UIBlock>
    <VeeForm class="ui-form"
             @submit="onSubmit"
             :validation-schema="schema"
             :initial-values="{lang: getLang}">
      <UiTextInput :placeholder="t('profileName')" name="name"/>
      <UiTextInput :placeholder="t('yourName')" name="username"/>
      <UiSelect :placeholder="t('selectLanguage')"
                :options="[{label: 'EN', value: 'en'},{label: 'Pl', value: 'pl'}]"
                name="lang"/>

      <UiSelect :placeholder="t('selectTheme')"
                :options="[{label: t('light'), value: 'light'},{label: t('dark'), value: 'dark'}]"
                name="theme"/>

      <UiButton is-block native-type="submit">
        {{ t('create') }}
      </UiButton>
    </VeeForm>
  </UIBlock>
</template>