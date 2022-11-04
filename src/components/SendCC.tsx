import React, {FormEvent, useState} from "react";
import {stores} from "../stores";

export const SendCC = () => {

    const [cc, setCC] = useState(0);
    const [value, setValue] = useState(0);

    function updateCC(e: React.ChangeEvent<HTMLInputElement>) {
        const cc = parseInt(e.currentTarget.value);
        if (!isNaN(cc)) setCC(cc);
    }

    function updateValue(e: React.ChangeEvent<HTMLInputElement>) {
        const v = parseInt(e.currentTarget.value);
        if (!isNaN(v)) setValue(v);
    }

    function send() {
        stores.midi.sendCC(cc, value);
    }

    return (
        <div className="m10">
            Controller: <input type="text" value={cc} onChange={updateCC}/>
            Value: <input type="text" value={value} onChange={updateValue}/>
            <button type="button" onClick={send}>send</button>
        </div>
    )

};