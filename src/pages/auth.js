import AuthImg from "../assets/auth.svg";
import Logo from "../assets/logo.svg";
import { Button, Menu } from "antd"
import { useState } from "react"
function Auth() {
    const items = [
        {
            label: 'Students',
            key: 'students',
        },
        {
            label: 'Teachers',
            key: 'teachers',
        },
    ];
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    const [current, setCurrent] = useState('students');
    return (
        <>
            <div className="h-20 flex items-center justify-center border-gray-200 border-b-2">
                <img src={Logo} className="h-48" />
            </div>
            <div className="container">
                <div className="grid grid-cols-2">
                    <div className="mx-20 my-20">
                        <h1 className="text-3xl font-bold text-center">ProctorChain</h1>
                        <img src={AuthImg} className="w-auto " />
                    </div>
                    <div className="flex justify-center items-center flex-col w-full">
                        <Menu onClick={onClick} selectedKeys={[current]}  mode="horizontal" items={items} />
                        <div className="border-2 border-gray-700 p-24 my-10 mx-10 rounded-lg w-10/12">
                            <div className="">
                                <Button className="w-full bg-blue-600" type="primary">Connect Wallet</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Auth;