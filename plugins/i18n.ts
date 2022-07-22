import { I18NConfig } from 'next/dist/server/config-shared'

export const i18nConfig: I18NConfig = {
    locales: ['en-US', 'fa'],
    defaultLocale: 'en-US',
    localeDetection: false,
    localePath: './'
}
