import classes from './page.module.css'

export default function Auth() {
    return (
        <main className={classes.main}>
            <div className={classes.auth}>
                <form >
                    <h2>Login</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                        />
                    </div>
                    <div className={classes.extraOptions}>
                        <p>zapomněl jsem heslo</p>
                        <p>zažádat o účet</p>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </main>

    )
}
