import React from "react";
import '.HeroImageStyle.css';

const HeroSection = () => {
    return(
        <div style={SectionStyle}> <div className='overlay-container' >
            <div className='background-image' style={{
                backgroundImage: 'url("../images/warehouse.jpg")',
                backgroundSize: 'cover',
                padding: '5%'
            }}>
                <h1 style={{ color: '#FFE100' }}>We Create Beautiful Structures.</h1>
                <h3 className="text-container" style={{ color: 'white' }}>Welcome to Joy Structurals, where innovation meets craftsmanship in the realm of construction and structurals. As industry pioneers, we seamlessly blend cutting-edge technologies with time-honored expertise to deliver unparalleled solutions. From groundbreaking designs to robust structural frameworks, our team of seasoned professionals ensures every project stands as a testament to durability and aesthetic finesse. We specialize in tailored construction services, emphasizing quality, safety, and efficiency. With a commitment to exceeding client expectations, Joy Structurals emerges as a beacon of reliability, transforming visions into concrete realities.

                    Join us in shaping the future of construction, where precision meets passion.</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '10px', marginRight: '10px' }}>
                    <button className='btn' style={{ padding: '10px 30px', fontSize: '1em' }}>Contact Us</button>
                    <button className='btn' style={{ padding: '10px 30px', fontSize: '1em' }}>Book Appointment</button>
                </div>

            </div>
        </div></div>
    )
}

const SectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    contentFit: 'fit',
    width: '100%'


}
export default HeroSection;