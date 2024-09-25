import './Form.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';


export default function Form() {
    return (
        <form className='form mt-20'>
            <h2>Quer receber novidades e promoções?</h2>
            <FormInput label='Nome' type='text' id='name' name='name' placeholder='Maria Rodriguez da Silva'/> 
            <FormInput label='Email' type='email' id='email' name='email' placeholder='joao_bonifacio@outlook.com' />
            <FormInput label='Telefone' type='tel' id='phone' name='phone' placeholder='(41)99876-0044'/>
            <Button type='submit'>Enviar</Button>
        </form>
    );
}