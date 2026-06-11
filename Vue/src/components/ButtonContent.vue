<script setup lang="ts">
import DxButtonGroup from 'devextreme-vue/button-group';
import type { DxButtonGroupTypes } from 'devextreme-vue/button-group';
import { ref } from 'vue';

interface FontStyle {
  icon: string;
  style: string;
}

const fontStyles: FontStyle[] = [{
  icon: 'bold',
  style: 'bold'
}, {
  icon: 'italic',
  style: 'italic'
}, {
  icon: 'underline',
  style: 'underline'
}, {
  icon: 'strike',
  style: 'strike'
}];

const selectedFontStyleNames = ref<string[]>(['italic']);

function logSelectionChanged(e: DxButtonGroupTypes.SelectionChangedEvent): void {
  const selectedItemKeys = e.component.option('selectedItemKeys') || [];
  const message = selectedItemKeys.length > 0
    ? `The following styles are selected: ${ selectedItemKeys.join(', ')}`
    : 'There are no selected styles';
  console.log(message);
}
</script>

<template>
  <div id="container">
    <DxButtonGroup
      :items="fontStyles"
      key-expr="style"
      selection-mode="multiple"
      v-model:selected-item-keys="selectedFontStyleNames"
      @selection-changed="logSelectionChanged"
    />
  </div>
</template>

<style scoped>
#container {
  width: 400px;
}
</style>
