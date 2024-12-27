'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


interface PropTypes {
    children: React.ReactNode
}

export default function ContactLayout({ children }: PropTypes) {

    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_LOCAL}>
            {children}
        </GoogleReCaptchaProvider>
    )
}