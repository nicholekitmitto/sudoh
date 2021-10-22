import React, { Component } from 'react'
import { Link } from "gatsby"
import Sparkles from "./sparkle"

class Bio extends Component {

    render () {
        return (
            <div className="bio">
                <h2 className="colorful whoami">$ whoami</h2>
                <p>Hiya! I'm Nichole, a <Sparkles>DevOps Engineer</Sparkles>.</p>
                <p>I was most recently an IT Automation Engineer at Ginger, where I developed Python scripts to automate various processes such as the onboarding and offboarding pipelines. I also wrote some CDK to architect project infrastructure in the Cloud, but between you and me, I definitely prefer <Sparkles>Terraform</Sparkles>! I'm currently looking for new opportunities to pursue my interest in DevOps, Automation, Python, or Cloud Engineering! If you have work in any of those areas, let me know!</p>
                <p>If you want to get in touch with me, buy me a coffee, talk about a potential job opportuntity, <a href="mailto:nicholedwight@gmail.com" className="colorful">give me a shout</a>! I'm now availble for any and all entry-level DevOps roles, if you or your company are looking to fill one of these roles, please reach out to me! I'd particularly like to work for a <Sparkles>kind</Sparkles> company on a <Sparkles>supportive</Sparkles> team that helps encourage growth in each other by sharing knowledge.</p>

                <div className="info">
                    <section className="work">
                        <h3>Work</h3>
                        <div className="grid">
                        <div className="line"></div>
                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot dot--current"></div>
                            </div>
                            <h4 className="title">
                                Ginger
                            </h4>
                            <p>IT Automation Engineer</p>
                            <p class="last">Jan 2021 - Oct 2021</p>

                            <div className="line"></div>
                            <div className="dot" style={{gridRow: 4,}}></div>
                            <h4 className="title">
                                CollegeNET
                            </h4>
                            <p>UI Engineer</p>
                            <p class="last">2018 - 2020</p>

                            <div className="dot" style={{gridRow: 7,}}></div>
                            <h4 className="title">
                                Simpleweb
                            </h4>
                            <p>Developer</p>
                            <p className="last">2015 - 2016</p>

                            <div className="dot" style={{gridRow: 10,}}></div>
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
                                AWS Solutions Architect <br/>- Associates
                            </h4>
                            <p className="last">In Progress</p>

                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot"></div>
                            </div>
                            <h4 className="title">
                                University of the <br/>West of England
                            </h4>
                            <p>BSc(Hons) Digital Media</p>
                            <p>2013 - 2017</p>
                        </div>
                    </section>

                    <section className="volunteering">
                        <h3>Volunteer Work</h3>
                        <div className="grid">
                        <div className="line"></div>
                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot dot--current"></div>
                            </div>
                            <h4 className="title">
                                Animal Care
                            </h4>
                            <p>Humane Society of the <br/>Pikes Peak Region</p>
                            <p className="last">2021 - current</p>

                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot"></div>
                            </div>
                            <h4 className="title">
                                Dog Foster
                            </h4>
                            <p>MCACC Shelter</p>
                            <p>2020 - 2021</p>
                            <div className="dot" style={{gridRow: 0, position: "relative",}}>
                                <div className="dot"></div>
                            </div>
                            <h4 className="title">
                                Animal Care Volunteer
                            </h4>
                            <p>Odd Man Inn Animal Refuge</p>
                            <p>2019 - 2020</p>
                        </div>
                    </section>
                </div>
                
            </div>
        );
    }

};

export default Bio