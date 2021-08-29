import React from "react";
import { UserContext } from "./App";

const Details: React.FC = () => {
    const value = React.useContext(UserContext);
    return (
        <h1>{value}</h1>
    )
}
export default Details;