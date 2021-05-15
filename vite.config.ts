import {ConfigEnv, UserConfig} from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => ({
    plugins: [preact()],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import 'preact/debug';`,
    },
    resolve: {
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class',
        'react-dom-factories': 'preact-compat/lib/react-dom-factories',
      },
    },
});
