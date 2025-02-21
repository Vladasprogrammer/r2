import { useState } from "react";

export default function Login() {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const { setData, response } = usePost('login');
    
    const goHome = _ => {

        window.location.replace = '#';
    }


    const doLogin = _ => {
        setData({
            name: form.username,
            password: form.password
        });
        goHome();
    }

    const doForm = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }



    return (
        <div>
            <h1>Login</h1>
            <fieldset>
                <legend>Login</legend>
                <input type="text" name="username" placeholder="Username" value={form.username} onChange={doForm} />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={doForm} />
                <button type="button" onClick={doLogin}>Login</button>
                <button type="button" onClick={goHome}>Cancel</button>
            </fieldset>
        </div>
    );
}
