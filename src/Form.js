import React from 'react';


const Form = ({ checked, createNumber, setCheck, numbers }) => {
    return (
        <form onSubmit={(event) => { event.preventDefault() }}>
            <div>
                <label>Even Only</label>
                <input type="checkbox" checked={checked} onChange={() => setCheck(!checked)} />
            </div>
            <div>
                <button onClick={() => createNumber()}>Make Number</button>
            </div>
            <div>
                <ul>
                    {numbers.map((number, idx) => {
                        return (<li key={idx}>{number}</li>);
                    })}
                </ul>
            </div>
        </form>
    )
}

export default Form;