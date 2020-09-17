import React from 'react';
import Navbare from '../Navbare/Navbare';
import '../Fulldetaile/Fulldetail.css'
import image26 from '../../Image/Rectangle 26.png'
import image27 from '../../Image/Rectangle 27.png'
import image28 from '../../Image/Rectangle 28.png'

const Fulldetail = () => {
    return (
        <div>
            <Navbare></Navbare>
            <div className="rommditail">
                <div>
                    <img src={image26} alt=""/>
                </div>
                <div>
                    <h4>Light Brite Stay</h4>
                    <h6>4 Gestas 2 bedromes 2 beds</h6>
                </div>
                <div>
                    <img src={image27} alt=""/>
                </div>
                <div>
                    <h4>Light Brite Stay</h4>
                    <h6>4 Gestas 2 bedromes 2 beds</h6>
                </div>
                <div>
                    <img src={image28} alt=""/>
                </div>
                <div>
                    <h4>Light Brite Stay</h4>
                    <h6>4 Gestas 2 bedromes 2 beds</h6>
                </div>
            </div>
            
        </div>
        
    );
};

export default Fulldetail;