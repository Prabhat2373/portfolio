import React from 'react'
import Page from '../../components/Page'
import ContactPageContent from './ContactPageContent'

const ContactIndex = () => {
    return (
        <Page content={<ContactPageContent />} dataTabName={'Contact'} sidebarName={'Contact'} sidebarDetails={''} />
    )
}

export default ContactIndex