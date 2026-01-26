import { Form, Input } from "antd";
import type { RegisterType } from "../../../../../@types";
import { notificationApi } from "../../../../../generic/notificationApi";
import { useRegisterMutation } from "../../../../../hooks/useQuery/useQueryAction";
import { Loader } from "lucide-react";



const Register = () => {
  const input_style: string = "h-10 mt-2"
  const icon_style: string = "border border-[#EAEAEA] hover:border-blue-500 h-10 rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer";
  const notify = notificationApi();
  const { mutate, isPending } = useRegisterMutation();
  const user_register =(e:RegisterType) => {
    if(e.password !== e.second_password){
      return notify("second_password");
    }
    const {name, password, email, surname} = e;
    mutate({name, password, email, surname});
  }
  return (
    <div className="w-4/5 m-auto">
      <div className="mt-5">
        <p>Enter your email and password to register.</p>
        <Form onFinish={user_register}>
          <Form.Item
            name={"name"}
            rules={[{ required: true, message: "Please input your name" }]}
          >
            <Input
              type="text"
              placeholder="Name"
              className={`${input_style}`}
            />
          </Form.Item>

          <Form.Item
            name={"surname"}
            rules={[{ required: true, message: "Please input your surname" }]}
          >
            <Input
              type="text"
              placeholder="Surname"
              className={`${input_style}`}
            />
          </Form.Item>

          <Form.Item
            name={"email"}
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input
              type="email"
              placeholder="Email"
              className={`${input_style}`}
            />
          </Form.Item>

          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input
              type="password"
              placeholder="**********"
              className={`${input_style}`}
            />
          </Form.Item>

          <Form.Item
            name={"second_password"}
            rules={[
              { required: true, message: "Please input your password again" },
            ]}
          >
            <Input
              type="password"
              placeholder="**********"
              className={`${input_style}`}
            />
          </Form.Item>

          <p className="text-end mt-2 text-nav text-sm cursor-pointer">
            Forgot Password?
          </p>
          <button className="bg-nav w-full mt-4 text-white h-10 rounded-md flex items-center justify-center cursor-pointer">
            {isPending ? (
              <Loader className="animate-spin" size={20} />
            ) : (
              "Register"
            )}
          </button>
        </Form>
        <div className="flex items-center justify-center my-5 gap-4">
          <div className="w-[30%] h-0.5 bg-[#EAEAEA]"></div>
          <p className="text-[#3D3D3D] text-center text-[13px]">
            Or register with
          </p>
          <div className="w-[30%] h-0.5 bg-[#EAEAEA]"></div>
        </div>
        <div className={`${icon_style}`}>
          <i className="ri-google-fill text-[#4285F4]"></i>
          <p>Register with Google</p>
        </div>
        <div className={`${icon_style}`}>
          <i className="ri-facebook-fill text-[#4285F4]"></i>
          <p>Register with Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default Register;