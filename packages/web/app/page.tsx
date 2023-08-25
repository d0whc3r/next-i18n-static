import {redirect} from 'next/navigation';
import { locales } from '../utils/i18n'

export default function RootPage() {
  redirect(`/${locales[0]}`);
}
