'use client'
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { locales } from '../utils/i18n'

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale });
    }

    return (
        <select
            title="selector"
            defaultValue={locale}
            onChange={onLocaleChange}
        >
            {locales.map((lang) => (
                <option key={lang} value={lang}>
                    {lang}
                </option>
            ))}
        </select>
    )
}
