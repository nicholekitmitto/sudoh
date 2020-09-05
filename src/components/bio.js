import React, { Component } from 'react'
import { Link } from "gatsby"

class Bio extends Component {

    render () {
        return (
            <div className="bio">
                <h2 className="colorful">$ whoami</h2>
                <p>Hiya! I'm Nichole.</p>
                <p>If this site is broken, just know that it's working on my machine 🙃</p>
                <p>I'm currently the lead UI Engineer at CollegeNET, working on a class scheduling and event management application for universities nationwide. I've taken up an interest in cybersecurty and am studying for my certificates to be able to move into the field. I'll be writing about the things I learn along my journey <Link to="/blog/" className="colorful">here</Link>, hopefully you may find something useful!</p>
                <p>If you want to get in touch with me, buy me a coffee, talk about a potential job opportuntity, - <a href="mailto:nicholedwight@gmail.com" className="colorful">give me a shout</a>!</p>

                <div className="info">
                    <section className="work">
                        <h3>Work</h3>
                        <div className="grid">
                            <div className="line"></div>
                            <div className="dot" style={{gridRow: 0,}}></div>
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
                            <p>2015 - 2016</p>
                        </div>
                    </section>

                    <section className="education">
                        <h3>Education/Certs</h3>
                        <div className="grid">
                        <div className="line"></div>
                            <div className="dot" style={{gridRow: 0,}}></div>
                            <h4 className="title">
                                Security+
                            </h4>
                            <p className="last">In Progress</p>

                            <div className="dot" style={{gridRow: 3,}}></div>
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