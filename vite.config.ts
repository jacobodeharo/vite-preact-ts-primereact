import {ConfigEnv, UserConfig} from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => ({
    plugins: [preact()],
});
