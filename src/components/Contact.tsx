import jackProfile from "../assets/images/me.jpg"
import resume from "../assets/images/ResumeApril2022.png"
import styled from "styled-components"

import AnimatedTitle from "../hooks/revealText"

import React, { Component } from "react"

import {
	SectionWrap,
	SectionRow,
	ContentColumn,
	ContentRow,
	ContentBox,
	ChipContainer,
	SectionTitle,
	ProfileImageWrap,
	ContactForm,
	ContactFormWrap,
	MessageInput,
	EmailInput,
	ContactSubmit,
} from "../styles/stylesheet.js"

export default function Contact() {
	return (
		<SectionWrap>
			<SectionRow>
				<SectionTitle>
					{" "}
					<AnimatedTitle {..."Contact Me!"} />{" "}
				</SectionTitle>
			</SectionRow>
			<SectionRow>
				<ContactForm action="https://formspree.io/f/xgedrjkp" method="POST">
					<ContactFormWrap>
						<div style={{ display: "flex", flexDirection: "row", textAlign: "center", paddingBottom: "3%" }}>
							<label>
								Name:
								<EmailInput type="name" name="contactname" />
							</label>
							<label>
								Email:
								<EmailInput type="email" name="email" />
							</label>
						</div>
						<label>
							Message:
							<MessageInput name="message"></MessageInput>
						</label>
					</ContactFormWrap>
					<ContactSubmit type="submit">Send</ContactSubmit>

					{/* <ContactSubmit type="submit" value={"Send"} /> */}
					{/* <ContactSubmit type="submit" value="Send" /> */}

					{/* <button type="submit">Send</button> */}
				</ContactForm>
			</SectionRow>
		</SectionWrap>
	)
}
