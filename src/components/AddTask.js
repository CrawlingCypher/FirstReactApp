import  {useState} from 'react'



function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    function onSubmit (e) {
        e.preventDefault() //doesn't submit to a page

        //validation
        if(!text){
            alert('please add task')
            return
        }
        onAdd({ text, day, reminder})

        //clearing the form
        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' onChange={(e) =>{setText(e.target.value)}}></input>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Day and Time' onChange={(e) =>{setDay(e.target.value)}} checked={reminder}></input>
            </div>
            <div className='form-control-check'>
                <label>Set reminder</label>
                <input type='checkbox' ></input>
            </div>

            <input type='submit' value='Save Task' className="btn btn-block" onChange={(e) =>{setReminder(e.currentTarget.checked)}}></input>

        </form>
    )
}

export default AddTask