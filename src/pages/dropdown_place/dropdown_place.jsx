import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react'

const DropDpowCustom = (props) => {
    const items = [
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ];
  return (
    <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <a style={{textDecoration:"none",color:"white",fontSize:"25px"}}>Hà Nội</a>
        <DownOutlined style={{ color:'white',fontSize:"14px"}}/>
      </Space>
    </a>
  </Dropdown>
  )
}

export default DropDpowCustom