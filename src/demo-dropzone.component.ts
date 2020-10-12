import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-dropzone.styles';
import template from './demo-dropzone.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Dropzone } from '@spectrum/sp-dropzone';
import { Spectrum } from '@spectrum/sp-config';

import Prism from "prismjs";

@customElement('demo-dropzone')
export class DemoDropzone extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-dropzone': DemoDropzone;
  }
}
