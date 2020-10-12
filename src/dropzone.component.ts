import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';

import dropzoneStyles from './dropzone.styles';
import template from './dropzone.template';

@customElement('sp-dropzone')
export class Dropzone extends Base {
  public static componentStyles = [ dropzoneStyles ];

  @property({ type: Boolean}) dragged=false;
  @property({ type: String}) heading='';
  @property({ type: String}) linkPath='';
  @property({ type: String}) linkLabel='';
  @property({ type: String}) description='';

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-dropzone': Dropzone;
  }
}
