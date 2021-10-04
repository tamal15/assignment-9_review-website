import React from 'react';
import './DataShow.css'

const DataShow = (props) => {
    const { name, img, price ,text } = props.users;
    console.log(props)
    const design = {
        width: '18rem'
    }
    return (
    

        <div className="col-lg-4 mb-5 mt-5 col-sm-12  ">
        <div className="card" style={design}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h3>{name}</h3>
                <h4>price: {price}</h4>
                <p class="card-text">{text}.</p>
            </div>
        </div>
    </div>

    );
};

export default DataShow;