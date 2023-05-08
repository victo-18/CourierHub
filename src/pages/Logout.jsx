import { unAuthorize } from "../hooks/redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { store } from "../hooks/redux/store";
import { useEffect } from "react";

export function Logout() {
    const navigate = useNavigate();

    store.dispatch(unAuthorize());

    useEffect(() => {
        navigate("/login");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null;
}