import React from 'react';

const ImageList = ({images})=>{

    const imagesList = images.map(({description, id, urls}) => {
        return <img key={id} alt={description} src={urls.regular}/>
    })
    return (
        <div>
            {imagesList}
        </div>
    )
};

export default ImageList;