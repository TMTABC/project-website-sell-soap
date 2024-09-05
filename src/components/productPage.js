import React from 'react';

function ProductPage({ title, description, imageUrl }) {
    return (
        <div className="product-page">
            <h1>{title}</h1>
            <img src={imageUrl} alt={title} />
            <p>{description}</p>
        </div>
    );
}

export default ProductPage;
