import React from 'react';
import './index.less';

const List08 = ({ data }) => {
  return (
    <div className="sc-list08">
      <div className="m-bd">
        {data?.list.map((item, i) => (
          <div className="m-item" key={i}>
            <div className="m-top">
              {item?.label && (
                <label className={`m-lb ${data.label ? 'm-bk' : ''}`}>{item?.label}</label>
              )}
            </div>
            <div className={`m-bdy ${data.line ? 'm-line' : ''}`}>
              {item?.title && <div className="title">{item?.title}</div>}

              {item?.list[0] && (
                <div className="m-cnt">
                  {item.list.map((o, j) => (
                    <span key={j}>
                      {data?.id && <label>{j + 1}. </label>} {o} <br />
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List08;
