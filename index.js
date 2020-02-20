const themes = require('insomnia-plugin-core-themes');

module.exports.themes = themes.themes.map(theme => ({
  ...theme,
  name: `${theme.name}-enhanced`,
  displayName: `✨ ${theme.displayName}`,
  theme: {
    ...theme.theme,
    rawCss: `
      .CodeMirror-foldmarker {
        margin: 0 0.2em;
        padding: 0.1em 0.4em;
        background: white;
        border-radius: 3px;
        color: black;
        text-shadow: unset !important;
      }
    `,
  },
}));