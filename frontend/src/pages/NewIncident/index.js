import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import './styles.css'
import api from '../../services/api'
export default function Incindent(){

    const [title, setTitle] = useState('');
    const [descripion, setDescripion] = useState('');
    const [value, setValue] = useState('');
   const ongId = localStorage.getItem('ongId')
   const history = useHistory()
   async function handlerNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            descripion,
            value,
        }
        try {
            await api.post('incidents',data,{
                headers:{
                        Authorization:ongId
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para um herói resolver isso. </p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para Home
</Link>
            </section>

            <form onSubmit={handlerNewIncident} >
                <input placeholder="Titulo do Caso"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <textarea placeholder="Descrição"
                value={descripion}
                onChange={e => setDescripion(e.target.value)}
                />
                <input placeholder="valor em reais"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}