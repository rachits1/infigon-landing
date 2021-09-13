import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero">
            <div className="hero__sub">
                <div className="hero__left">

                    <div className="hero__left__content">
                        <h1>How we can Help</h1>
                        <p>Aliquam erat volutpat. Nam arcu leo, venenatis quis diam ac, accumsan rutrum velit. Suspendisse vel odio ac odio dictum hendrerit. Duis tincidunt tempor tempor. Vestibulum auctor dignissim erat, sed venenatis magna. Integer urna justo.Donec ultrices fringilla lectus. Etiam sit amet mauris imperdiet, tempor tellus eget, commodo nisi.</p>
                        <ul className="hero__left__content-list">
                            <li>STEP 1</li>
                            <li>STEP 2</li>
                            <li>STEP 3</li>
                            <li>STEP 4</li>
                        </ul>
                    </div>
                </div>

                <div className="hero__right">
                    <img src="/images/heroimg.jpeg" alt="heroImg" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection;
