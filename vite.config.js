import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'
import { version } from './package.json'

console.log('PackageJson', version)

const manifest = defineManifest({
    manifest_version: 3,
    name: 'Scrapbox Extension',
    description: 'Scrapbox Extension',
    version: version,
    icons: {
        '16': 'images/Scrapbox.png',
        '32': 'images/Scrapbox.png',
        '48': 'images/Scrapbox.png',
        '128': 'images/Scrapbox.png',
    },
    content_scripts: [
        {
            js: ['scripts/content.ts'],
            matches: [
                'https://scrapbox.io/katayama8000/*',
            ]
        }
    ],
})

export default defineConfig({
    plugins: [crx({ manifest })],
})