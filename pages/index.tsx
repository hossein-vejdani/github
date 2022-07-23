import TheSearchForm from '@components/user/TheSearchForm/TheSearchForm'
import { useTranslate } from '@/common/hooks/translation.hook'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  const { t } = useTranslate()

  return (
    <>
      <TheSearchForm />
    </>
  )
}

export default Home
