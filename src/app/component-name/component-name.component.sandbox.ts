import { sandboxOf } from 'angular-playground';
import { ComponentNameComponent } from './component-name.component';

export default sandboxOf(ComponentNameComponent)
  .add('this is just a test', {
    template: `<app-component-name></app-component-name>`
  });
