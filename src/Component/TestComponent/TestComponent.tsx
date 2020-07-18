import React from 'react'
import { useTranslation } from 'react-i18next'

const TestComponent = () => {
  const { t } = useTranslation('common')
  return (
    <div>
      {t('mainPage.mainPageText')}
    </div>
  )
}

export default TestComponent