'use client';

import styled from 'styled-components';
import { useTranslations } from 'next-intl'

const StyledPage = styled.div`
  .page {
    display: flex;
  }
`;

export default function Index() {
  const t = useTranslations('common')

  return (
    <StyledPage>
      <div>{t('hello')}</div>
      <div> - </div>
      <div>{t('world')}</div>
    </StyledPage>
  );
}
