<script lang="ts" setup>
import {Form as VeeForm} from 'vee-validate';
import {object, string} from "yup";
import {useI18n} from "vue-i18n";
import {useLangStore} from "@/langs/LangStore";
import {useGlobalLoaderStore} from "@/components/utility/GlobalLoader/GlobalLoaderStore";
import {useRouter} from "vue-router";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";
import {storeToRefs} from "pinia";

const schema = object({
  name: string().required().min(3).max(20),
});

const {t} = useI18n();
const {setLang, getLang} = useLangStore();
const {push} = useRouter();
const {showLoader, hideLoader} = useGlobalLoaderStore();

const {createProfileAndSetAsActiveProfile} = useActiveProfile();
const {profile} = storeToRefs(useActiveProfile());
const onSubmit = async (values: any) => {
  showLoader();
  await createProfileAndSetAsActiveProfile({
    lang: values.lang,
    name: values.name,
    username: values.username,
    theme: values.theme,
    plan: null
  });
  hideLoader();
  push({name: 'guard-home'});
}
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
                :options="[{label: 'EN', value: 'en'},{label: 'Pl', value: 'pl'}]"
                name="lang"/>

      <UiSelect :placeholder="t('selectTheme')"
                :options="[{label: t('light'), value: 'light'},{label: t('dark'), value: 'dark'}]"
                name="theme"/>

      <UiButton is-block native-type="submit">
        {{ t('create') }}
      </UiButton>
    </VeeForm>
  </UiBlock>
</template>