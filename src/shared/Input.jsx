import React from 'react'

function Input(props) {
  return (
    <React.Fragment>
        <div className="mb-3">
           <label htmlFor={props.id} className="form-label">{props.title}</label>
           <input type={props.type} name={props.name} className="form-control" value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} />
          {props.erorrs[props.name]&& <p className='text-danger'>{props.erorrs[props.name]}</p>}
  </div>
    </React.Fragment>
  )
}

export default Input