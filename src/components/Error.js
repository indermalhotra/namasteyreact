
// Hook that is used to get the error object
import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <>
        <h2>Something went wrong!</h2>
        {/* this is how we use error object */}
        <h3>{err.data}</h3>
        </>
    )
}

export default Error;
