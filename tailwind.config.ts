import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{colors:{primary:'#0099FF',secondary:'#111111',accent:'#FFFFFF',background:'#000000'},boxShadow:{glow:'0 0 40px rgba(0,153,255,.28)'},fontFamily:{sans:['var(--font-geist-sans)','Inter','sans-serif']}}},plugins:[]};
export default config;
