import { copyFileSync } from 'fs';

const filesToCopy = [
    { src: 'public/manifest.json', dest: 'dist/manifest.json' },
    { src: 'src/background.js', dest: 'dist/background.js' },
    { src: 'src/content.js', dest: 'dist/content.js' }
];

filesToCopy.forEach(({ src, dest }) => {
    copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
});
