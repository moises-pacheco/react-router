import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import React from 'react'

function ErrorPage() {

    const error = useRouteError();

    //Caso 1: errores del router(404,401,500)
    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h2>Error: {error.status}</h2>
                {
                    error.status === 404 && (
                        <p>La página que buscas no existe</p>
                    )
                }

                {
                    error.status === 500 && (
                        <p>La página que buscas no existe</p>
                    )
                }
            </>
        )
    }

    return (
        <>
            <h2>Error inesperado</h2>
            <p>{error.message || "Ha ocurrido un error inesperado"}</p>
        </>
    )

}

export default ErrorPage;
