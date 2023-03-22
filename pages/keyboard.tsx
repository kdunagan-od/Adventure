export default function Keyboard() {
  const qwertyTopRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const qwertyMiddleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const qwertyBottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  return (
    <div className='keyboard'>
      <div className='top-row'>
        {qwertyTopRow.map((keyName: string) => {
        return <div className={keyName + ' key'}>{keyName}</div>
        })}
      </div>
      <div className='top-row'>
        {qwertyMiddleRow.map((keyName: string) => {
        return <div className={keyName + ' key'}>{keyName}</div>
        })}
      </div>
      <div className='top-row'>
        {qwertyBottomRow.map((keyName: string) => {
        return <div className={keyName + ' key'}>{keyName}</div>
        })}
      </div>

    </div>
  )
}
