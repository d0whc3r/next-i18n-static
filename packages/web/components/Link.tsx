'use client'
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
    const t = useTranslations('common')
    return (
        <header>
            <nav>
                <Link href="/">{t('home')}</Link>
                <Link href="/about">{t('about')}</Link>
            </nav>
            <LocaleSwitcher />
        </header>
    )
}
