import React from 'react'

const PhotoCard = ({data}) => {
  return (
      <>
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                  <img src={data.img_path} className="w-100" />
                </div>
      </>
  )
}

export default PhotoCard