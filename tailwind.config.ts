import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#211b2c', muted: '#777382', violet: '#6c42c7', lilac: '#f3effb', canvas: '#f8f7fa' }, boxShadow: { card: '0 8px 30px rgba(35, 25, 55, .06)' } } }, plugins: [] };
export default config;
