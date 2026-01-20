import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./modals-item/authorization";

const Modals = () => {
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <div>{authorizationModalVisiblity && <AuthorizationModal />}</div>;
};

export default Modals;
