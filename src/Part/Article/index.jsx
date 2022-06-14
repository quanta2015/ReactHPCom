import React, { useState, useEffect } from 'react';
import Title from '../../Title';
import './index.less'


const Article =({data})=> {

  return (
    <div className="sc-article">
      <Title title={data?.title} line={data?.line} />

      <div className="m-bd">
        <div className="m-wrap">
          {data.list.map((item,i)=>
            <p>{item}</p>
          )}
        </div>
        
        {data.showImg &&
        <div className="m-img">
          <img src={data.img} />
        </div>}
      </div>
    </div>
  )
}

export default Article
