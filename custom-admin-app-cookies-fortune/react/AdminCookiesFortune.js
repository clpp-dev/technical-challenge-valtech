import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader, Tabs, Tab } from 'vtex.styleguide'

//componentes
import AdminCookiesFortuneManagment from './components/AdminCookiesFortuneManagment'

import './styles.global.css'

const AdminCookiesFortune = () => {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="cookiesfortune.Title" />}
        />
      }
    >
      <PageBlock variation="full">
        <Tabs>
          <Tab
            label={<FormattedMessage id="cookiesfortune.titletab1" />}
            active={currentTab === 1}
            onClick={() => setCurrentTab(1)}>
            <AdminCookiesFortuneManagment/>
          </Tab>
        </Tabs>
      </PageBlock>
    </Layout>
  )
}

export default AdminCookiesFortune
