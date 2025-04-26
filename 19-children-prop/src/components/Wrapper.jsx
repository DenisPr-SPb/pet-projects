export default function Wrapper({children, color}) {
  return (
      <div style={{backgroundColor: color}} className="wrapper">
        <h1>Hello from wrapper</h1>
        {children}
      </div>
  )
}