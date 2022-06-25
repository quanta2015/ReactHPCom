import React from 'react';
import Title from '../../Title';
import './index.less'


const Img05 =({data})=> {
  return (
    <div className="sc-img05">

     {data?.img1 &&
        <div className="m-img">
          <img src={data.img1} />
          <div></div>
        </div>}

      {data?.img2 &&
        <div className="m-img">
          <div></div>
          <img src={data.img2} />
        </div>}
        
      <div className="m-tl">
        {data?.label &&
          <label> {data?.label}</label>
        }</div>
      <div className='m-cnt'>{data?.cnt}</div>
    </div>
  )
}

export default Img05