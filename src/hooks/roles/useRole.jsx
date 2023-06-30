import { useSelector } from "react-redux";

export default function useRole() {
    const { user: { role } } = useSelector((state) => state.session);

    return role;
}