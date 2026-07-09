'use client'

import AnimatedTitle from "../hooks/revealText"
import { SectionWrap, SectionRow, SectionTitle, ContactForm, ContactFormWrap, MessageInput, EmailInput, ContactSubmit, InnerContactFormWrap, ContactLabel, ContactLabelText, MessageLabelText } from "../styles/stylesheet.js"

export default function Contact() {
    return (
        <SectionWrap
            //Contact section is displayed at the end of the page
            style={{ marginBottom: 0 }}
        >
            <SectionRow>
                <SectionTitle>
                    {" "}
                    <AnimatedTitle {...{ "title": "Contact Me!" }} />{" "}
                </SectionTitle>
            </SectionRow>
            <SectionRow>
                <ContactForm action="https://formspree.io/f/xgedrjkp" method="POST">
                    <ContactFormWrap>
                        <InnerContactFormWrap>
                            <ContactLabel>
                                <ContactLabelText>Name:</ContactLabelText>
                                <EmailInput type="text" name="contactname" autoComplete="name" />
                            </ContactLabel>
                            <ContactLabel>
                                <ContactLabelText>Email:</ContactLabelText>
                                <EmailInput type="email" name="email" autoComplete="email" />
                            </ContactLabel>
                        </InnerContactFormWrap>
                        <InnerContactFormWrap>
                            <ContactLabel>
                                <MessageLabelText>Message:</MessageLabelText>
                                <MessageInput name="message"></MessageInput>
                            </ContactLabel>
                        </InnerContactFormWrap>
                    </ContactFormWrap>
                    <ContactSubmit type="submit">Send</ContactSubmit>
                </ContactForm>
            </SectionRow>
        </SectionWrap>
    )
}
