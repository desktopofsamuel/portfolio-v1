import React from 'react'

const Footer = () => (
    <div id="#footer">
        
        <section className="S-CTA">
            <div className="Container Padding-S">
            <div className="Padding-XS">
                <img style={{width:'90px',height:'90px'}} src="/static/propic.png" />
                <h1>Drop me a line</h1>
                <div className="TextContainer">
                <p>I'm interested in freelance projects and remote work, or feel free to ping me about design & technology. </p>
                <a href="mailto:desktopofsamuel@gmail.com">desktopofsamuel@gmail.com</a>
                </div>
            </div> 
            </div>
        </section>
        <section className="S-Footer">
            <div className="Container TextCenter Padding-XS">
            <div className="FooterWrapper WhiteText">
                <small>©2018 Samuel Wong — Made in Hong Kong</small>
            </div>
            </div>
        </section>
    </div>
    )

export default Footer