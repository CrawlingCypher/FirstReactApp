import Button from './Button'

function Header({title, onAdd, showAdd}) {
  return (
    <header className="Header">
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'}text={showAdd ? 'Close' : 'Add'} onAdd={onAdd}/>
    </header>
    )
}

export default Header