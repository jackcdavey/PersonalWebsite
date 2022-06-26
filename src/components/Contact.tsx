import AnimatedTitle from "../hooks/revealText"
import { SectionWrap, SectionRow, SectionTitle, ContactForm, ContactFormWrap, MessageInput, EmailInput, ContactSubmit, InnerContactFormWrap, ContactLabel } from "../styles/stylesheet.js"

export default function Contact() {
	return (
		<SectionWrap>
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
								<h4>Name:</h4>
								<EmailInput type="name" name="contactname" />
							</ContactLabel>
							<ContactLabel>
								<h4>Email:</h4>
								<EmailInput type="email" name="email" />
							</ContactLabel>
						</InnerContactFormWrap>
						<InnerContactFormWrap>
							<ContactLabel>
								<h4 style={{ paddingTop: "3%" }}>Message:</h4>
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
