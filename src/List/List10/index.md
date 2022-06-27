
## List10

- title `string`: 标题文本
- list `array`: ITEM 对象
- line `boolean`: 标题栏目的显示模式
- id `boolean`: 是否显示序号

### ITEM
`cnt` 和 `list` 之间选择一种内容展示方式

- icon `string`: 图标链接
- title `string`: 一级标签
- list `array`: 内容数组
- cnt `string`：段落内容
- src `string`：跳转链接
- link `string`：跳转链接说明

```tsx
import React, { useState, useEffect } from 'react';
import { List10 } from 'japanCom';

const [line, setLine] = useState(true)
const [id, setId] = useState(true)


const s = {
  padding: '10px 15px',
  border: '1px solid #eee',
  width: '120px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  transition: '.2 ease',
  flex: 1, 
}

const data = {
  title:"お知らせ",
  list:[{
      icon:"https://mqcai.top/cdn/hpcom_article.jpg",
      title: "XXXXXX",
      list:[ "銀座ベレアージュクリニックPCRセンターについて",
            "PCRセンター専用ホームページ",
            "を開設いたしました。料金やお問合せはホームページ内の連絡先にお願いします。",
            "美容点滴の問合せ先とは異なりますのでご了承下さい。"],
      cnt:"",
      src:"https://www.baidu.com",
      link:"しょうさい",
    },{
      icon:"https://mqcai.top/cdn/hpcom_article.jpg",
      title: "XXXXXX",
      list:[],
      cnt:"銀座ベレアージュクリニックPCRセンターについて,PCRセンター専用ホームページ,を開設いたしました。 料金やお問合せはホームページ内の連絡先にお願いします。,美容点滴の問合せ先とは異なりますのでご了承下さい。",
      src:"https://www.baidu.com",
      link:"しょうさい",
    },{
      icon:"https://mqcai.top/cdn/hpcom_article.jpg",
      title: "XXXXXX",
      list:[],
      cnt:"銀座ベレアージュクリニックPCRセンターについて,PCRセンター専用ホームページ,を開設いたしました。 料金やお問合せはホームページ内の連絡先にお願いします。,美容点滴の問合せ先とは異なりますのでご了承下さい。",
      src:"https://www.baidu.com",
      link:"しょうさい",
    }],
  line:line,
  id: id,
}

export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
      <span style={s} onClick={setId.bind(this,!id)}>ID</span>
    </div>

    <List10 data={data} />
  </div>
  )
```
