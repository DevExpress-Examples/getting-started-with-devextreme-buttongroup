<template> 
    <DxButtonGroup
        :items="fontStyles"
        key-expr="style"
        selection-mode="multiple"
        v-model:selected-item-keys="selectedFontStyleNames"
        @selection-changed="logSelectionChanged"
    />
</template>

<script>
import { DxButtonGroup } from 'devextreme-vue/button-group';

const fontStyles = [{
    icon: "bold",
    style: "bold"
}, {
    icon: "italic",
    style: "italic"
}, {
    icon: "underline",
    style: "underline"
}, {
    icon: "strike",
    style: "strike"
}];

export default {
    components: {
        DxButtonGroup
    },
    data() {
        return {
            fontStyles,
            selectedFontStyleNames: [ 'italic' ]
        }
    },
    methods: {
        logSelectionChanged() {
            let message;
            if(this.selectedFontStyleNames.length > 0) {
                message = "The following styles are selected: " + this.selectedFontStyleNames.join(", ");
            } else {
                message = "There are no selected styles";
            }
            console.log(message);
        }
    }
}
</script>