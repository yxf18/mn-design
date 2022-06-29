import React from 'react';
import { Button as AntdButton } from "antd";


const Button: React.FC<any> = () => {
    return <h1>
        button
        <AntdButton type='primary' danger>antd-Button</AntdButton>
    </h1>
}
export default Button
