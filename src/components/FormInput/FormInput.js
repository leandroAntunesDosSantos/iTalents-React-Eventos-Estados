import './FormInput.css'

export default function FormInput({label, ...props}) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{label}</label>
            <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
        </div>
    );
}