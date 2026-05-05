import React from 'react'
import ContactForm from '@/components/contact/contactForm'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "Contact Joyzen | Book a Clarity Call for Fertility & Health Support",

  description:
    "Get in touch with Joyzen to understand your reproductive health better. Book a clarity call and receive personalized guidance, continuous care, and expert support.",

  keywords: [
    "Contact Joyzen",
    "Fertility consultation online",
    "Reproductive health support",
    "Book fertility consultation",
    "Hormone health guidance",
    "Online fertility doctor",
    "Continuous healthcare support",
    "Joyzen contact"
  ],

  openGraph: {
    title: "Contact Joyzen",
    description:
      "Book a clarity call and start your journey with continuous reproductive healthcare.",
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