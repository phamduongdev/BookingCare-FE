function About(props) {

    return (
        <div className='section-share section-about'>
            <div className="section-about-header">
                What's new?
            </div>
            <div className="section-about-content">
                <div className="content-left">
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/INzGi5v1ypQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="content-right">
                    <p>You are the <strong>CSS</strong> to my <strong>HTML</strong></p>
                </div>
            </div>
        </div>
    );
}

export default About;