import style from './add_6/add_6_delete.module.css';
import { useNavigate } from 'react-router-dom';
import img_x from './project/img/000.svg';

const Add_6_delete = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
        <div className={style.content} >
            <div className={style.h1} >
                <p>Удалить жанр?</p>
                <div onClick={() => navigate('/Add_6')} className={style.x}>
                        <img src={img_x} alt=""/>
                </div>
            </div>
            <div className={style.p}>
                <div>
                    <p>Вы действительно хотите удалить жанр?</p>
                </div>
                <div className={style.button} >
                    <button onClick={() => navigate('/Add_6')}>Да, удалить</button>
                    <button onClick={() => navigate('/Add_6')}>Отмена</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Add_6_delete;