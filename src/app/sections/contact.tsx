'use client'

import AnimatedTitle from "../hooks/revealText"
import {
    SectionShell,
    SectionInner,
    SectionHeading,
    Eyebrow,
} from "../styles/shared"
import {
    ContactColumn,
    ContactInvite,
    Field,
    FieldLabel,
    TextInput,
    TextArea,
    SubmitButton,
} from "../styles/contact.styles"

export default function Contact() {
    return (
        <SectionShell $band $last>
            <SectionInner>
                <Eyebrow>03 — Contact</Eyebrow>
                <SectionHeading>
                    <AnimatedTitle {...{ "title": "Contact Me!" }} />
                </SectionHeading>

                <ContactColumn action="https://formspree.io/f/xgedrjkp" method="POST">
                    <ContactInvite>
                        Have a project in mind, or just want to say hi?
                    </ContactInvite>

                    <Field>
                        <FieldLabel>Name</FieldLabel>
                        <TextInput type="text" name="contactname" autoComplete="name" required />
                    </Field>

                    <Field>
                        <FieldLabel>Email</FieldLabel>
                        <TextInput type="email" name="email" autoComplete="email" required />
                    </Field>

                    <Field>
                        <FieldLabel>Message</FieldLabel>
                        <TextArea name="message" required></TextArea>
                    </Field>

                    <SubmitButton type="submit">Send</SubmitButton>
                </ContactColumn>
            </SectionInner>
        </SectionShell>
    )
}
