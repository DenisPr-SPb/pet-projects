import style from './Button.module.css';

export default function Button(props) {
  const {children, disabled=false} = props;
  return (
      <button {...props} className={style.button} disabled={disabled}>{children}</button>
  )
};