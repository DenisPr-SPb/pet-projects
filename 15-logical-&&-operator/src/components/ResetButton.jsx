export default function ResetButton({onclick}) {
  return (
      <div>
        <button style={{backgroundColor: "red"}}
                onClick={onclick}>
          Reset
        </button>
      </div>
  )
}