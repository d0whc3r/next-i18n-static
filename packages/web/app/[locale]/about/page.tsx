'use client'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
    const t = useTranslations('about')

    return (
        <div>
            {t('text')}
        </div>
    )
}
