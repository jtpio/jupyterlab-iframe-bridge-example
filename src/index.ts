import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-iframe-bridge extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-iframe-bridge:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-iframe-bridge is activated!');
  }
};

export default plugin;
