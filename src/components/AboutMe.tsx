import jackProfile from '../assets/images/me.jpg'
import resume from '../assets/images/ResumeApril2022.png'

import React, { Component } from 'react'

import { SectionWrap, SectionRow, ContentColumn, ContentRow, ContentBox, ChipContainer, SectionTitle, ProfileImageWrap } from '../styles/stylesheet.js';

export default function About() {
    return (
        <SectionWrap>
            <SectionRow>
                <SectionTitle> About Me </SectionTitle>
            </SectionRow>
            <SectionRow>
                <ProfileImageWrap>
                    <img src={jackProfile} id="aboutMePic" className="img-fluid rounded center-block" alt="Jack Davey"></img>
                </ProfileImageWrap>


                <div className="col-sm-9" id="introFacts">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <h3>Intro</h3>
                                <p>Currently pursuing a B.S. in Web Design and Engineering with a minor in
                                    Innovation, Design Thinking, and the Entrepreneurial Mindset at Santa Clara University.
                                    Having spent my entire life in California, I grew up with an immense appreciation for
                                    the beauty and simplicity of nature. I love to tinker, design, and create, but when I’m
                                    not working away at my desk, you’ll likely find me at the driving range or exploring
                                    the mountains with my hammock and camera. </p>
                                <br></br>

                                <a href={resume} download={'resume.png'}><b> Download my resume here!</b></a>
                            </div>
                        </div>
                    </div>

                    {/*Maybe implement some interactivity with these in the futre,
          like slow floating movement & hover action*/}

                    {/* Also switch these from a copy/paste mess to an array ffs */}

                    <ContentRow>
                        <ContentColumn>
                            <ContentRow>
                                <h3>Technologies</h3>
                            </ContentRow>
                            <ContentRow>
                                <ContentBox>
                                    <ChipContainer>React Native</ChipContainer>
                                    <ChipContainer>ReactJS</ChipContainer>
                                    <ChipContainer>JavaScript</ChipContainer>
                                    <ChipContainer>Java</ChipContainer>
                                    <ChipContainer>HTML</ChipContainer>
                                    <ChipContainer>CSS</ChipContainer>
                                    <ChipContainer>C</ChipContainer>
                                    <ChipContainer>PHP</ChipContainer>
                                    <ChipContainer>SQL</ChipContainer>
                                    <ChipContainer>Ruby</ChipContainer>
                                </ContentBox>
                            </ContentRow>
                        </ContentColumn>
                        <ContentColumn>
                            <ContentRow>
                                <h3>Skills</h3>
                            </ContentRow>
                            <ContentRow>
                                <ContentBox>
                                    <ChipContainer>Creative Cloud</ChipContainer>
                                    <ChipContainer>Professional Writing</ChipContainer>
                                    <ChipContainer>UI / UX</ChipContainer>
                                    <ChipContainer>SolidWorks</ChipContainer>
                                    <ChipContainer>Graphic Design</ChipContainer>
                                    <ChipContainer>Electronics</ChipContainer>
                                    <ChipContainer>PC Assembly</ChipContainer>
                                </ContentBox>
                            </ContentRow>
                        </ContentColumn>
                    </ContentRow>
                </div>

            </SectionRow>
        </SectionWrap>
    );
}