
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use (process as any).cwd() to resolve the TypeScript error where 'cwd' is not found on the 'Process' type.
  // This error typically arises when Node.js typings are missing or conflicting with browser typings in the config context.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Inject the API key into the client-side code. 
      // We cast process to any to safely access environment variables in the Node.js build environment.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || (process as any).env?.API_KEY || '')
    },
    server: {
      port: 3000
    }
  };
});
