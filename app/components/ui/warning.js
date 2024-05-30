import Overlay from './overlay'
import classes from './warning.module.css'
export default function Warning() {
    return (
        <div className={classes.warning}>
            <h1>UPOZORNĚNÍ</h1>
            <p>Otevřel jste navrh</p>
            <div className={classes.buttons}>
                <button>ne schváluju</button>
                <button>schváluju</button>
            </div>
        </div>
    )
}
