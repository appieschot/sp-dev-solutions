import * as ReactDOM from 'react-dom';
import * as React from                                                 'react';
import { DetailsListComponent } from '../DetailsListComponent/DetailsListComponent';
import { BaseWebComponent } from './BaseWebComponent';

export class DetailsListWebComponent extends BaseWebComponent {

   public constructor() {
      super(); 
   }

   public connectedCallback() {

      let props = this.resolveAttributes();
      const documentCarditem = <DetailsListComponent {...props}/>;
      ReactDOM.render(documentCarditem, this);
   }
}