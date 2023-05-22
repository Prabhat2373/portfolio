import React from 'react'
import MailIcon from '../../components/icons/MailIcon'
import PhoneIcon from '../../components/icons/PhoneIcon'

const ContactSidebarMenu = () => {
    return (
        <div className='flex flex-col text-text-main'>
            <div className='flex gap-2 p-2'><MailIcon /> prabhattambe10@gmail.com</div>
            <div className='flex gap-2 p-2'><PhoneIcon /> +91 8459052292</div>
        </div>
    )
}

export default ContactSidebarMenu