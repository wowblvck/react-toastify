import { defineConfig, Options } from 'tsup';

const injectFunc = `
function injectStyle(css) {
  if (!css || typeof document === 'undefined') return

  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')

  head.appendChild(style)
  style.appendChild(document.createTextNode(css))
}
`;

const baseConfig: Options = {
  minify: true,
  target: 'es2018',
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  injectStyle: css => {
    return `${injectFunc}injectStyle(${css});`;
  },
  banner: {
    js: '"use client";'
  }
};

export default defineConfig([
  {
    ...baseConfig,
    entry: ['src/index.ts'],
    external: ['react'],
    clean: ['dist']
  },
  {
    ...baseConfig,
    injectStyle: false,
    entry: { unstyled: 'src/index.ts' },
    external: ['react'],
    clean: ['dist']
  },
  {
    ...baseConfig,
    entry: {
      'use-notification-center/index': 'src/addons/use-notification-center/index.ts'
    },
    external: ['react', 'react-toastify'],
    clean: ['addons'],
    outDir: 'addons'
  }
]);
