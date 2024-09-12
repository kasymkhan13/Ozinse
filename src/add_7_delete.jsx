import style from './add_7/add_7_delete.module.css';
import { useNavigate } from 'react-router-dom';
import img_x from './project/img/000.svg';

const Add_7_delete = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
        <div className={style.content} >
            <div className={style.h1} >
                <p>Удалить возраст?</p>
                <div onClick={() => navigate('/Add_7')} className={style.x}>
                        <img src={img_x} alt=""/>
                </div>
            </div>
            <div className={style.p}>
                <div>
                    <p>Вы действительно хотите удалить возраст?</p>
                </div>
                <div className={style.button} >
                    <button onClick={() => navigate('/Add_7')}>Да, удалить</button>
                    <button onClick={() => navigate('/Add_7')}>Отмена</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Add_7_delete;