import React from 'react';
import Title from '../../Title';
import './index.less'


const Img04 =({data})=> {
  return (
    <div className="sc-img04">
      <div className="m-img">
            <img src={data.img} />
      </div>
      <div className="m-bd">
          <div className='m-title'>{data?.title}</div>
          <div className='m-cnt'>{data?.cnt}</div>
      </div>
    </div>
  )
}

export default Img04