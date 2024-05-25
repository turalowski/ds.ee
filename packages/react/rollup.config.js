import ts from 'rollup-plugin-typescript2';

export default {
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Margin/index.ts',
    'src/molecules/Select/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [
    ts({
      tsconfigOverride: {
        exclude: [
          '../src/**/*.mdx',
          '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        ],
      },
    }),
  ],
  external: ['react', '@ds.e/foundation'],
};
