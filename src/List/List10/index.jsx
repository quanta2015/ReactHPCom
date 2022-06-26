import React from 'react';
import Title from '../../Title';
import './index.less'


const List10 =({data})=> {


  return (
    <div className="sc-list10">
      <Title title={data?.title} line={data?.line} />

       <div className="m-bd">
        {data?.list.map((item,i)=>
          <div className="m-item" key={i}>
            <div className="m-icon">
              <img src={item?.icon} />
            </div>

            <div className="m-cnt">
                {item?.title && <label> {item?.title} </label>}
                {item?.cnt && <div>{item?.cnt}</div>}
                {item?.list && item?.list.map((o,j)=>
                  <span key={j}>{data?.id && <label>{j+1}. </label>}{o}</span>
                )}
                {item?.src && <label><a href={item?.src}>{item?.link}</a></label>}
            </div>
          </div>
        )}
      </div> 
    </div>
  )
}

export default List10