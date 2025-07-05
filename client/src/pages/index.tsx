import { Helmet } from "react-helmet-async";

export function IndexPage() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <h1>Home</h1>
            </div>
        </>
    )
}