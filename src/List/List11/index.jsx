import React from 'react';
import Title from '../../Title';
import './index.less'


const List11 =({data})=> {
  return (
    <div className="sc-List11">
      <Title title={data?.title} line={data?.line} />

      {data?.list.map((item,i) =>
          <div className="m-item" key={i}>
            <div className="m-hd">
              <span>{item?.title}</span>
              <label className={data.round? "round":""}>{item?.label}</label>
            </div>
            <div className={data.bottom? "bottom":""}><div></div>{item?.cnt}</div>
          </div>
      )}
    </div>
  )
}

export default List11