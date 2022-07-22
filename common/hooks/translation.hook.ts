import { useRouter } from 'next/router'
import { fa } from '@locales/fa'
import { en } from '@locales/en'

export const useTranslate = () => {
    const { locale } = useRouter()
    console.log(locale)

    const t = (key: keyof typeof fa | keyof typeof en) => {
        return locale === 'en-US' ? en[key] : fa[key]
    }
    return {
        t,
        locale
    }
}
