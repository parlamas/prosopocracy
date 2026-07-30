// app/rota/page.tsx
import '../styles.css';
import RotaContent from '../../components/RotaContent';
import { ROTA_TRANSLATIONS } from '../../lib/rota-translations';

export default function RotaPage() {
  return <RotaContent lang="en" t={ROTA_TRANSLATIONS.en!} />;
}
