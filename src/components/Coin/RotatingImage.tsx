import React from "react";
import './RotatingImage.scss'

interface RotatingImageProps {
    src: string;
    alt?: string;
};

const RotatingImage: React.FC<RotatingImageProps> = ({src, alt='Moneda giratoria'}) => {
    return(
        <div className="rotating-image-container">
            <img src={src} alt={alt} className="rotating-image"/>
        </div>
    );
};

export default RotatingImage;