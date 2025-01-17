import React from "react";
import './SpecialtyStyle.css';
import './fonts.css';

const SpecialtySection = () => {
    return (

        <div className='speciality-container'>
            <h2 style={{ color: 'whitesmoke' }}>Our Specialty</h2>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '5em' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', padding: '0' }}>
                    <img style={{}} src="../images/school.png" width="200px" />
                    <p style={{ alignSelf: 'center', margin: '5px', color: '#ffd000', fontFamily: 'Rubik' }}>Educational</p>
                    <p style={{ alignSelf: 'center', margin: '5px', color: '#ffd000', fontFamily: 'Rubik' }}>Institutions</p>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', padding: '0' }}>
                    <img src="../images/warehouseIcon.png" width="200px" />
                    <p style={{ alignSelf: 'center', margin: '5px', color: '#ffd000', fontFamily: 'Rubik' }}>Warehouses</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', padding: '0' }}>
                    <img src="../images/production.png" width="200px" />
                    <p style={{ alignSelf: 'center', margin: '5px', color: '#ffd000', fontFamily: 'Rubik' }}>Factories</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', padding: '0' }}>
                    <img src="../images/sketch.png" width="200px" />
                    <p style={{ alignSelf: 'center', margin: '5px', color: '#ffd000', fontFamily: 'Rubik' }}>Custom</p>
                    <p style={{ alignSelf: 'center', margin: '5px', color: '#ffd000', fontFamily: 'Rubik' }}>solutions</p>
                </div>
            </div>
        </div >
    )
}
export default SpecialtySection;