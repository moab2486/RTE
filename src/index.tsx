import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBold, faItalic, faUnderline, faStrikethrough, faLink, faImage,
          faAlignLeft, faAlignRight, faAlignJustify, faAlignCenter, faListUl, 
          faListOl, faIndent, faCircleXmark, faCirclePlus } 
        from '@fortawesome/free-solid-svg-icons';

library.add(faBold, faItalic, faUnderline, faStrikethrough, faLink, faImage, faAlignLeft, faCirclePlus,
            faAlignRight, faAlignJustify, faAlignCenter, faListUl, faListOl, faIndent, faCircleXmark);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();