import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    // console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Lo sentimos, se ha producido un error inesperado.</p>
            <p>
                <i>{error ? (error.statusText || error.message) : "404 NOT_FOUND"}</i>
            </p>
        </div>
    );
}