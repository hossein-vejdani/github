import { useRouter } from 'next/router'
import { en } from '@locales/en'

export const useTranslate = () => {
    const { locale } = useRouter()

    const t = (key: keyof typeof en) => {
        return en[key]
    }
    return {
        t,
        locale
    }
}
