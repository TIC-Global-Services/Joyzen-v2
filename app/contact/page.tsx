import React from 'react'
import ContactForm from '@/components/contact/contactForm'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "Contact Joyzen | Innovation to Health Tech & Human Longevity",

  description:
    "Joyzen is innovation to health tech for human longevity.",

  keywords: [
    "Joyzen",
    "Innovation to health tech",
    "Human longevity",
    "Health tech innovation",
    "Longevity healthcare"
  ],

  openGraph: {
    title: "Contact Joyzen",
    description:
      "Joyzen is innovation to health tech for human longevity.",
    url: "https://yourdomain.com/contact",
    siteName: "Joyzen",
    // images: [
    //   {
    //     url: "/og-contact.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Contact Joyzen",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  }
};

const page = () => {
    return (
        <div>
            <ContactForm />
        </div>
    )
}

export default page