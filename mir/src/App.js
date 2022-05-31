
import React, { useState } from 'react'
import img_1 from './img/opa.jpg'
import img_2 from './img/photo.jpg'
import img_3 from './img/1547365376_1.jpg'

const App = () => {
  const width = '200px'
  const [img, setImg] = useState(img_1)

  return (
    <div>
      <div>
        <img src={img} width={width} />
      </div>
      <img onClick={() => setImg(img_2)} src={img_2} width={width} />
      <img onClick={() => setImg(img_3)} src={img_3} width={width} />
    </div>
  )
}

export default App


