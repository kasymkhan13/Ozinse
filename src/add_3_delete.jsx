import { useNavigate } from 'react-router-dom';
import style from './add_3/add_3_delete.module.css';
import img_x from './project/img/000.svg';

const Add_3_delete = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
        <div className={style.content} >
            <div className={style.h1} >
                <p>Удалить категорию?</p>
                <div onClick={() => navigate('/Add_3')} className={style.x}>
                        <img src={img_x} alt=""/>
                </div>
            </div>
            <div className={style.p}>
                <div>
                    <p>Вы действительно хотите удалить категорию?</p>
                </div>
                <div className={style.button} >
                    <button onClick={() => navigate('/Add_3')}>Да, удалить</button>
                    <button onClick={() => navigate('/Add_3')}>Отмена</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Add_3_delete;
