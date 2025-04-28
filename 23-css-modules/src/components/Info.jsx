import css from "./Info.module.css";

export default function Info() {
  return (
      <>
        <h1 className={css.title}>Info page</h1>
        <button className={css.button}>Click me!</button>
      </>
  )
}