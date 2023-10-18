import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(false);

    return (
        <div>
            ConditionalRender:
            <hr/>
            Resultado: {x ? "True" : "False"}
        </div>
    )
}

export default ConditionalRender;