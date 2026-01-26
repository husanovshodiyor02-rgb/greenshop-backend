import { Form, Input } from "antd"
import { useLoginMutation, useOnAuthGoogle } from "../../../../../hooks/useQuery/useQueryAction";
import { Loader } from "lucide-react";



const Login = () => {
    const input_style: string ="h-10 mt-2 border-[#46A358]";
    const icon_style: string =
      "border border-[#EAEAEA] hover:border-blue-500 h-10 rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer";
    const {mutate, isPending} =useLoginMutation();
const login = (e: {email: string, password: string}) => {
    mutate(e);}

    const {mutate: mutateGoogle} = useOnAuthGoogle();
  return (
    <div className="w-4/5 m-auto">
      <div className="mt-5 mb-2">
        <p>Enter your email and password to login.</p>
        <Form onFinish={login}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input
              type="email"
              placeholder="Email"
              className={`${input_style}`}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input
              type="password"
              placeholder="**********"
              className={`${input_style}`}
            />
          </Form.Item>
          <p className="text-end mt-2 text-nav text-sm cursor-pointer">
            Forgot password?
          </p>
          <button className="bg-nav w-full mt-4 text-white h-10 rounded-md flex items-center justify-center cursor-pointer">
            {isPending ? <Loader className="animate-spin" size={20} /> : "Login"}
          </button>
        </Form>
        <div className="flex items-center justify-center mt-5 mb-5 gap-4">
          <div className="w-[30%] h-0.5 bg-[#EAEAEA]"></div>
          <p className="text-center text-[#3D3D3D] text-[13px]">
            Or login with
          </p>
          <div className="w-[30%] h-0.5 bg-[#EAEAEA]"></div>
        </div>
        <div onClick={() => mutateGoogle()} className={`${icon_style}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>
        <div className={`${icon_style}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12.073C24 5.447 18.627 0.073 12 0.073C5.373 0.073 0 5.447 0 12.073C0 18.062 4.388 23.027 10.125 23.927V15.542H7.078V12.073H10.125V9.43C10.125 6.423 11.917 4.761 14.658 4.761C15.97 4.761 17.344 4.996 17.344 4.996V7.948H15.83C14.34 7.948 13.875 8.873 13.875 9.822V12.073H17.203L16.671 15.542H13.875V23.927C19.612 23.027 24 18.062 24 12.073Z"
              fill="#1877F2"
            />
            <path
              d="M16.671 15.542L17.203 12.073H13.875V9.822C13.875 8.873 14.34 7.948 15.83 7.948H17.344V4.996C17.344 4.996 15.97 4.761 14.658 4.761C11.917 4.761 10.125 6.423 10.125 9.43V12.073H7.078V15.542H10.125V23.927C10.739 24.028 11.364 24.079 12 24.073C12.636 24.079 13.261 24.028 13.875 23.927V15.542H16.671Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Login