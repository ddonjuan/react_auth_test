import React from 'react';

export const Input=(props)=>(
    <div className="form-group">
        <label for={props.inputID}>{props.labelName}</label>
        <input onChange={props.onChange} type={props.inputType} className="form-control" name={props.inputID} value={props.value} id={props.inputID} aria-describedby={props.inputID}/>
        <small id={props.inputID} className="form-text text-muted">{props.smallText}</small>
    </div>
)
export default Input;