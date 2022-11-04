import React, {FormEvent, useState} from "react";
import {stores} from "../stores";

export const SendPC = () => {

    const [pc, setPC] = useState(0);

    function updatePC(e: React.ChangeEvent<HTMLInputElement>) {
        const pc = parseInt(e.currentTarget.value);
        if (!isNaN(pc)) setPC(pc);
    }

    function send() {
        stores.midi.sendPC(pc);
    }

    return (
        <div className="m10">
            PC <input type="text" value={pc} onChange={updatePC}/>
            <button type="button" onClick={send}>send</button>
        </div>
    )

};