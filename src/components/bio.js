import React, { Component } from 'react'
import { Link } from "gatsby"
import Sparkles from "./sparkle"

class Bio extends Component {

    render () {
        return (
            <div className="bio">
                <h2 className="colorful whoami">$ whoami</h2>
                <p>Hiya! I'm Nichole, a <Sparkles>digital privacy enthusiast</Sparkles>.</p>
                <p>I was most recently the lead UI Engineer at CollegeNET, working on a class scheduling and event management application for universities nationwide. I've taken up an additional interest in cybersecurity and am now studying full-time for my certificates to be able to move into the information security realm professionally in the very near future. I'll be writing about the things I learn along my journey <Link to="/blog/" className="colorful">here</Link>, hopefully you may find something useful!</p>
                <p>If you want to get in touch with me, buy me a coffee, talk about a potential job opportuntity, <a href="mailto:nicholedwight@gmail.com" className="colorful">give me a shout</a>! I'm now availble for any and all entry-level cybersecurity roles, if you or your company are looking to fill one of these roles, please reach out to me! I'd particularly like to work for a <Sparkles>kind</Sparkles> company on a <Sparkles>supportive</Sparkles> team that helps encourage growth in each other by sharing knowledge.</p>

                <div className="info">
                    <section className="work">
                        <h3>Work</h3>
                        <div className="grid">
                            <div className="line"></div>
                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot dot--current"></div>
                            </div>
                            <h4 className="title">
                                CollegeNET
                            </h4>
                            <p>UI Engineer</p>
                            <p>2018 - current</p>

                            <div className="dot" style={{gridRow: 4,}}></div>
                            <h4 className="title">
                                Simpleweb
                            </h4>
                            <p>Developer</p>
                            <p className="last">2015 - 2016</p>

                            <div className="dot" style={{gridRow: 7,}}></div>
                            <h4 className="title">
                                Picollecta
                            </h4>
                            <p>PHP Developer</p>
                            <p>2014</p>
                        </div>
                    </section>

                    <section className="education">
                        <h3>Education/Certs</h3>
                        <div className="grid">
                        <div className="line"></div>
                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot dot--current"></div>
                            </div>
                            <h4 className="title">
                                Security+
                            </h4>
                            <p className="last">In Progress</p>

                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot dot--current"></div>
                            </div>
                            <h4 className="title">
                                LPIC-1
                            </h4>
                            <p className="last">In Progress</p>

                            <div className="dot" style={{gridRow: 5,}}></div>
                            <h4 className="title">
                                University of the <br/>West of England
                            </h4>
                            <p>BSc(Hons) Digital Media</p>
                            <p>2013 - 2017</p>
                        </div>
                    </section>
                </div>
                
            </div>
        );
    }

};

export default Bio