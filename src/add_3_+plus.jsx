import { useNavigate } from 'react-router-dom';
import style from './add_3/add_3_plus.module.css';
import img_x from './project/img/000.svg';


const Add_3_plus = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
        <div className={style.content} >
            <div className={style.h1} >
                <p>Добавить категорию</p>
                <div onClick={() => navigate('/Add_3')} className={style.x}>
                        <img src={img_x} alt=""/>
                </div>
            </div>
            <div className={style.p}>
                <input className={style.input_p} type="text" placeholder='Название категории' />
                <div className={style.button} >
                    <button onClick={() => navigate('/Add_3')}>Добавить</button>
                    <button onClick={() => navigate('/Add_3')}>Отмена</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Add_3_plus;