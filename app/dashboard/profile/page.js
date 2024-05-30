import classes from './page.module.css'

export default function Profile() {
  return (
    <main className={classes.profile}>
      <h1>Profile information</h1>
      <div>
        <div className={classes.avatar}>
          <div className={classes.circle}></div><h5>Wade Warren</h5>
        </div>
        <p>illyha9sun@gmail.com</p>
        <p>Název obchodu</p>
        <p>Název obchodu</p>
        <p>frekvence objednávání </p>
      </div>
      <hr />
      <h1>Profile Settings</h1>
      <div>
        <p>Zmenit heslo</p>
      </div>
    </main>
  )
}
