<script setup lang="ts">

import UiList from "@/components/ui/UiList/UiList.vue";
import ModalEditPlanItem from "@/modules/plan/modals/ModalEditPlanItem.vue";
import {ref} from "vue";

const items = [
  {
    "id": "e03c45fb-42cf-4bb4-805a-31d0ae6f5849",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "f3739338-07a5-4de2-afe6-f6a039c7be2b",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  },
  {
    "id": "9106af60-9cfb-4278-bf5d-2a96d8321cbe",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "015d5d5c-da30-4e81-820a-0b4ac1d216f8",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  },
  {
    "id": "02aeb274-7382-4ee8-98fe-0362cfa05d1d",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "f82a1ce6-2836-494c-b508-e33b52a1a6b7",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  },
  {
    "id": "8d7d8bbd-51e1-4cbf-895a-20a82f8e7791",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "132943d6-63fe-482b-a019-899e136c18de",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  },
  {
    "id": "7035f06d-3e20-44ea-8ad7-cf67b4f4d516",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "a0ada3e6-fcd6-4e97-9bc4-4f1185b51039",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  },
  {
    "id": "4d3fd1ae-22bd-4c37-9dee-6090f9b7e012",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "5fd4457d-f6b8-41f9-b97f-0619d3611c21",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  },
  {
    "id": "231afbde-4c4e-4fec-b6c6-b97de9e72b09",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "dc104ed3-31bf-4847-9d74-14403e706bbf",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  },
  {
    "id": "cac6d7f0-590d-4933-9f05-6a898c0193c7",
    "time": 40,
    "exercise": null,
    "isSitTime": true
  },
  {
    "id": "20c44d0f-5b5f-4884-9e81-e5525aa380aa",
    "time": 20,
    "exercise": {
      "key": "squats",
      "label": "Squats",
      "unit": "counter",
      "value": 10
    },
    "isSitTime": false
  }
]

const editModalRef = ref<any>();

const openEditModal = (item: any) => {
  editModalRef.value.toggle();
}

</script>

<template>
  <div>
    <UiList key-field="id" :items="items">
      <template #default="{item}">
        <div class="flex justify-between p-3  cursor-pointer rounded text-white "
             @click="openEditModal(item)"
             :class="{
           'bg-cyan-600/50 hover:bg-cyan-600/70': item.exercise,
           'bg-teal-600/50 hover:bg-teal-600/70': !item.exercise
        }">
          <div v-if="item.exercise">
            {{ item.exercise?.label }}
            <span v-if="item.exercise?.unit === 'counter'">
              x
              {{ item.exercise?.value }}
            </span>
            <span v-else>
              {{ item.exercise?.unit }}
              min.
            </span>
          </div>
          <div v-else>
            Work time
          </div>
          <div>
            {{ item.time }} min.
          </div>
        </div>
      </template>
    </UiList>

    <ModalEditPlanItem ref="editModalRef"></ModalEditPlanItem>
  </div>
</template>