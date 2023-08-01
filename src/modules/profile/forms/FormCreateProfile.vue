<script lang="ts" setup>
import {Form as VeeForm} from 'vee-validate';
import {object, string} from "yup";
import {useI18n} from "vue-i18n";
import {useLangStore} from "@/langs/LangStore";
import {useGlobalLoaderStore} from "@/components/utility/GlobalLoader/GlobalLoaderStore";
import {useRouter} from "vue-router";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";
import {useProfileCounter} from "@/modules/profile/stores/ProfileCounter/ProfileCounter";

const schema = object({
  name: string().required().min(3).max(20),
});

const {t} = useI18n();
const {setLang, getLang} = useLangStore();
const {push} = useRouter();
const {showLoader, hideLoader} = useGlobalLoaderStore();

const {createProfileAndSetAsActiveProfile} = useActiveProfile();
const onSubmit = (values: any) => {
  showLoader();
  createProfileAndSetAsActiveProfile({
    lang: values.lang.value,
    name: values.name,
    username: values.username,
    theme: values.theme.value,
    plan: null
  })
      .then(async () => {
        await useProfileCounter().countProfiles();
        push({name: 'guard-home'});
      })
      .catch(() => {
      })
      .finally(() => {
        hideLoader();
      });
}

const langOptions = [{key: 'en', label: 'EN', value: 'en'},{key: 'pl',label: 'Pl', value: 'pl'}];
const themeOptions = [{key: 'light', label: t('light'), value: 'light'},{key: 'dark', label: t('dark'), value: 'dark'}];
</script>

<template>
  <UiBlock>
    <VeeForm class="ui-form"
             @submit="onSubmit"
             :validation-schema="schema"
             :initial-values="{lang: getLang}">
      <UiTextInput :placeholder="t('profileName')" name="name"/>
      <UiTextInput :placeholder="t('yourName')" name="username"/>
      <UiSelect :placeholder="t('selectLanguage')"
                :options="langOptions"
                name="lang"/>

      <UiSelect :placeholder="t('selectTheme')"
                :options="themeOptions"
                name="theme"/>

      <UiButton is-block native-type="submit">
        {{ t('create') }}
      </UiButton>
    </VeeForm>
  </UiBlock>
</template>