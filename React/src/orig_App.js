import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { ButtonGroup } from 'devextreme-react/button-group';

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

class App extends React.Component {
    selectedFontStyleNames = [ 'italic' ];

    render() {
        return (
            <ButtonGroup
                items={fontStyles}
                keyExpr="style"
                selectionMode="multiple"
                defaultSelectedItemKeys={this.selectedFontStyleNames}
                onSelectionChanged={this.logSelectionChanged}
            />
        );
    }

    logSelectionChanged(e) {
        const selectedItemKeys = e.component.option("selectedItemKeys");
        let message;
        if(selectedItemKeys.length > 0) {
            message = "The following styles are selected: " + selectedItemKeys.join(", ");
        } else {
            message = "There are no selected styles"
        }
        console.log(message);
    }
}

export default App;