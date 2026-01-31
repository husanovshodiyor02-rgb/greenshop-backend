import { Modal } from "antd";
import { useReduxSelector, useReduxDispatch } from "../../../../hooks/useRedux";
import { setAuthorizationModalVisiblity } from "../../../../redux/modal-store";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthorizationModal = () => {
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();
  const [state, setState] = useState<string>("login");
  onSuccess: (data) => {
    const { token } = data;

    localStorage.setItem("token", token);
    window.dispatchEvent(new Event("auth-change"));
  };
  
  return (
    <Modal
      open={authorizationModalVisiblity}
      footer={false}
      onCancel={() => dispatch(setAuthorizationModalVisiblity())}
    >
      <div className="mt-10">
        <div className="flex items-center justify-center text-xl gap-4">
          <div onClick={() => setState("login")} className={`cursor-pointer ${state === "login" && "text-nav"}`}>Login</div>
          <div className="bg-[#3D3D3D] w-px h-5"></div>
          <div onClick={() => setState("register")} className={`cursor-pointer ${state === "register" && "text-nav"}`}>Register</div>
        </div>
        {state === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthorizationModal;
