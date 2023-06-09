import { useContext, useState } from 'react';
import './widget.scss'
import { AuthContext } from '../../context/AuthContext'
import { vote } from '../../repository/repository';
import MyVerticallyCenteredModal from '../Modal/Modal';


const Widget = ({ candidate }) => {

    const { token } = useContext(AuthContext)
    const [modalShow, setModalShow] = useState(false);


    const comfitmVote = async (id) => {
        try {

            const r = await vote(id, token)
            console.log(r)
        } catch (e) {
            console.log(e.reponse);
        }

        setModalShow(false)
    }

    return (
        <div className='widget'>
            <div className='container'>
                <p className="title">Partido: {candidate.party.name}</p>
                <div>
                    <img src={candidate.avatar} />
                </div>
                <p className="name">{candidate.name}</p>
                <button onClick={() => setModalShow(true)}>Votar</button>
            </div>

            <MyVerticallyCenteredModal show={modalShow} cancel={() => setModalShow(false)} confirm={() => comfitmVote(candidate.party._id)} />
        </div>
    )
}

export default Widget