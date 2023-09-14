'use client';
import { Contact, Copyright, Header } from "../Molecules"
import { FooterRoot } from "../Organisms"

export const Footer = () => {
    return (
        <FooterRoot>
            <Header />
            <Contact />
            <Copyright />
        </FooterRoot>
    )
}