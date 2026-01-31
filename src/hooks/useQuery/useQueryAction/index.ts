import { useMutation } from '@tanstack/react-query'
import { useAxios } from '../../useAxios'
import { notificationApi } from '../../../generic/notificationApi';
import Cookies from "js-cookie";
import { setAuthorizationModalVisiblity } from '../../../redux/modal-store';
import { useReduxDispatch } from '../../useRedux';
import { getUser } from '../../../redux/user-slice';
import { signInWithGoogle } from '../../../config';
import {} from "../"
import { getCoupon } from '../../../redux/shop-slice';


export const useLoginMutation = () => {
  const notify = notificationApi();
    const axios = useAxios();
    const dispatch = useReduxDispatch();
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (data: object) => axios({ url: "user/sign-in", method: "POST", body: data }),
        onSuccess: (data) => {
          notify("login");
            const { token, user } = data;
            localStorage.setItem("token", token);
            window.dispatchEvent(new Event("auth-change"));
            
            Cookies.set("token", token);
            Cookies.set("user", JSON.stringify(user));
            dispatch(getUser(user));
            dispatch(setAuthorizationModalVisiblity());
        },
        onError(error: { status: number}){
          if (error.status === 409) {
            notify("409");
          }
        },
    });
};


export const useRegisterMutation = () => {
  const notify = notificationApi();
  const axios = useAxios();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      notify("register");
      const { token, user } = data;

      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      dispatch(getUser(user));
      dispatch(setAuthorizationModalVisiblity());
    },
    onError(error: { status: number }) {
      if (error.status === 409) {
        notify("409");
      }
    },
  });
};



export const useOnAuthGoogle = () => {
  const notify = notificationApi();
  const axios = useAxios();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["sign-google"],
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios ({ url: "user/sign-in/google", method: "POST", body: {email:response.user.email},
      });
    },
    onSuccess: (data) => {
      notify("login");
      const { token, user } = data;

      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      dispatch(getUser(user));
      dispatch(setAuthorizationModalVisiblity());
    },
    onError: (error: { status: number}) => {
      if (error.status === 409) {
       return notify("409");
      }
      notify("error");
    }
  });
}

export const useGetCoupon = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationKey: ["coupon"],
    mutationFn: ({coupon_code}: {coupon_code: string}) =>
      axios({ url: "features/coupon", param: { coupon_code } }),

    onSuccess(data) {
      dispatch(getCoupon(data?.discount_for));
      notify("cupon")
    },
    onError(error: { status: number }) {
      if (error.status === 400){
        notify("not_coupon")
      }
    },
  });
};