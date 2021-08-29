import React, { Fragment } from "react";
import { UserContext } from "./App";

const User: React.FC = () => {
    const value = React.useContext(UserContext);

    return (
        <React.Fragment>
            <h1>{value}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid temporibus quae architecto quo eum sequi in rem quasi labore repudiandae, quidem necessitatibus voluptas. Voluptatem consequatur adipisci cumque, amet ad quaerat!

            </p>
        </React.Fragment>

    )
}

export default User;