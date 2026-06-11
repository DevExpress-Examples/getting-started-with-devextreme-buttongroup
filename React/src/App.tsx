import { useCallback, useState } from 'react';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import './App.css';
import { ButtonGroup } from 'devextreme-react/button-group';
import type { ButtonGroupTypes } from 'devextreme-react/button-group';

// Define the font style interface
interface FontStyle {
  icon: string;
  style: string;
}

const fontStyles: FontStyle[] = [{
  icon: 'bold',
  style: 'bold',
}, {
  icon: 'italic',
  style: 'italic',
}, {
  icon: 'underline',
  style: 'underline',
}, {
  icon: 'strike',
  style: 'strike',
}];

function App(): JSX.Element {
  const [selectedFontStyleNames] = useState<string[]>(['italic']);

  const logSelectionChanged = useCallback((e: ButtonGroupTypes.SelectionChangedEvent) => {
    const selectedItemKeys = e.component.option('selectedItemKeys') ?? [];
    const message = selectedItemKeys.length > 0
      ? `The following styles are selected: ${selectedItemKeys.join(', ')}`
      : 'There are no selected styles';
    console.log(message);
  }, []);

  return (
    <ButtonGroup
      items={fontStyles}
      keyExpr="style"
      selectionMode="multiple"
      defaultSelectedItemKeys={selectedFontStyleNames}
      onSelectionChanged={logSelectionChanged}
    />
  );
}

export default App;
