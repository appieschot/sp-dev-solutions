import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BaseWebComponent } from './BaseWebComponent';
import DebugView from '../DebugViewComponent/DebugViewComponent';

export class DebugViewWebComponent extends BaseWebComponent {
   
   public constructor() {
       super(); 
   }

   public connectedCallback() {

      let props = this.resolveAttributes();
      const debugView = <DebugView {...props}/>;
      ReactDOM.render(debugView, this);
   }    
}