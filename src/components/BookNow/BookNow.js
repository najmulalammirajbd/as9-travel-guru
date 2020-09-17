import React from 'react';
import '../BookNow/BookNow.css'
import image1 from '../../Image/Sajek.png'
import image2 from '../../Image/Sreemongol.png'
import image3 from '../../Image/sundorbon.png'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const BookNow = () => {
    const history = useHistory () 
    const booknowbtn = () => {
        history.push('/fulldetail');
    }
    return (
        <div className="bookNow">
            <div className="image">
                <img src={image1} alt=""/>
            </div>
            <div>
            <h2>Sajek</h2>
                <p>Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town</p>
                <Button onClick={booknowbtn} variant="outline-info">Book Now</Button>
            </div>
            <div className="image">
                <img src={image2} alt=""/>
            </div>
            <div>
            <h2>Sreemangal</h2>
            <p>Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town</p>
                <Button onClick={booknowbtn} variant="outline-info">Book Now</Button>
            </div>
            <div className="image">
                <img src={image3} alt=""/>
            </div>
            <div>
            <h2>Sundarbans</h2>
            <p>Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town</p>
                <Button onClick={booknowbtn} to="/Fulldetail" variant="outline-info">Book Now</Button>
            </div>
        </div>
        
    );
};

export default BookNow;