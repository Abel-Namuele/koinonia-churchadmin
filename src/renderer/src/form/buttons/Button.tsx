// eslint-disable-next-line react/prop-types
export function Button({ onClick, type, className }): React.JSX.Element {
  return (
    <button onClick={onClick} type={type} className={className}>
      Alterar foto
    </button>
  )
}
