
import { toast } from "react-hot-toast";
type NotificationType =
  | "login"
  | "409"
  | "second_password"
  | "register"
  | "error"
  | "cupon"
  | "not_coupon"
  | "wishlist_add"
  | "wishlist_remove"
  | "cart_add"
  | "cart_remove";
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
          case "cupon":
            return toast.success("Chegirma qabul qilindi !");
          case "not_coupon":
            return toast.error("Chegirma aniqlanmadi !");
          case "wishlist_add":
            return toast.success("Wishlistga qo‘shildi !");
          case "wishlist_remove":
            return toast("Wishlistdan olib tashlandi !", {
              icon: "ℹ️",
            });
          case "cart_add":
            return toast.success("Savatga qo‘shildi!");
          case "cart_remove":
            return toast.error("Savatdan olib tashlandi!");
        }
    }

    return notify 
}