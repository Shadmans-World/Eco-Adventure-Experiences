import React from 'react';

const ForgotPass = () => {
    return (
        <div>
            <form>
                <label>Email</label>
                <input type="email" name="email" id="" placeholder='email' />
                <label> Forgot Pass</label>
                <button>Forgot</button>
            </form>
        </div>
    );
};

export default ForgotPass;