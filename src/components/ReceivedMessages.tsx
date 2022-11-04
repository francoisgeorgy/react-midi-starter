import React from "react";
import {stores} from "../stores";
import {hs} from "../utils/hexstring";
import {observer} from "mobx-react-lite";

export const ReceivedMessages = observer(() => {

    return (
        <div className="m10 pt-10 border-top-colored">
            {/*<div>{stores.midi.messages.length} messages.</div>*/}
            {stores.midi.messages.map((message, _) =>
                <div>
                    {hs(message)}
                </div>
            )}
        </div>
    )

});