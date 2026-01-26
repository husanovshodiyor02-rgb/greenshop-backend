

import { toast } from "react-hot-toast";
type NotificationType = "login" | "409" | "second_password" | "register" | "error";
export const notificationApi = () => {



    const notify = (type:NotificationType) => {
        switch (type) {
          case "login":
            return toast.success("Xush kelibsiz !");
          case "409":
            return toast.error("Email yoki parol noto'g'ri !");
          case "second_password":
            return toast.error("Parollar mos emas !");
          case "register":
            return toast.success("Ro'yxatdan o'tish muvaffaqiyatli !");
          case "error":
            return toast.error("Xatolik yuz berdi !");
        }
    }

    return notify 
}