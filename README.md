# jupyterlab-iframe-bridge-example

**Archived**

We recommend using `jupyter-iframe-commands` directly: https://github.com/TileDB-Inc/jupyter-iframe-commands

---

[![Github Actions Status](https://github.com/jtpio/jupyterlab-iframe-bridge-example/workflows/Build/badge.svg)](https://github.com/jtpio/jupyterlab-iframe-bridge-example/actions/workflows/build.yml)

An example bridge extension to demo passing messages between a host page and JupyterLab running in an IFrame.

⚠️ This is an example extension for demo purposes only.

![image](https://user-images.githubusercontent.com/591645/208265862-2a3bed60-8719-4860-9400-42f551da520d.png)

## Requirements

- JupyterLab >= 3.0

## Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
jlpm watch
```

### Usage

Build a new JupyterLite site:

```bash
cd examples
jupyter lite build --output-dir lite

# start a local server
python -m http.server
```

Then go to http://localhost:8000/examples.

## Development uninstall

```bash
pip uninstall jupyterlab_iframe_bridge_example
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-iframe-bridge-example` within that folder.
