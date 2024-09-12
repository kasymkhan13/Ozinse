import style from './add_7/add_7_plus.module.css';

import x from './add_2/img/x.svg';
import add from './add_2/img/add.svg';
import { useNavigate } from 'react-router-dom';

const Add_7_plus = () => {

    const navigate = useNavigate();

    return (
        <div className={style.body}>
        <div className={style.container} >
            <div className={style.titel}  >
                <p>Добавить возраст</p>
                <div onClick={() => navigate('/Add_7')} className={style.titel_img} >
                    <img src={x} alt=""/>
                </div>
            </div>
                <input className={style.choose_1} placeholder='Введите возраст'/>
            <div className={style.dowlone} >
                <div className={style.dowlone_img}>
                    <img src={add} alt=""/>
                </div>
                <div className={style.dowlone_p_p} >
                    <div>Перетищите картинку или</div><div className={style.dowlone_p}>загрузите</div>
                </div>
            </div>
            <div className={style.button_ok}>
                <button onClick={() => navigate('/Add_7')}>Добавить</button>
                <button onClick={() => navigate('/Add_7')}>Отмена</button>
            </div>
        </div>
        </div>
    );
};

export default Add_7_plus;