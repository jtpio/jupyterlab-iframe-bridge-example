import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-iframe-bridge-example extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-iframe-bridge-example:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, themeManager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-iframe-bridge-example is activated!');

    window.addEventListener('message', (event) => {
      if (event.data.type === 'jupyterlab-iframe-bridge-example') {
        console.log('Received message from iframe:', event.data);

        if (themeManager.theme === 'JupyterLab Dark') {
          themeManager.setTheme('JupyterLab Light');
        } else {
          themeManager.setTheme('JupyterLab Dark');
        }
      }
    });
  }
};

export default plugin;
