import style from './add_2/add_2_project.module.css';

import x from './add_2/img/x.svg';
import add from './add_2/img/add.svg';
import { useNavigate } from 'react-router-dom';



const Add_2_project = () => {

    const navigate = useNavigate();

    return (
        <div className={style.body}>
        <div className={style.container} >
            <div className={style.titel}  >
                <p>Добавить проект на главную</p>
                <div onClick={() => navigate('/Add_2')} className={style.titel_img} >
                    <img src={x} alt=""/>
                </div>
            </div>
                <input className={style.choose_1} placeholder='Выберите проект'/>
                <input className={style.choose_1} placeholder='Выберите очередность'/>
            <div className={style.dowlone} >
                <div className={style.dowlone_img}>
                    <img src={add} alt=""/>
                </div>
                <div className={style.dowlone_p_p} >
                    <div>Перетищите картинку или</div><div className={style.dowlone_p}>загрузите</div>
                </div>
            </div>
            <div className={style.button_ok}>
                <button onClick={() => navigate('/Add_2')}>Добавить</button>
                <button onClick={() => navigate('/Add_2')}>Отмена</button>
            </div>
        </div>
        </div>
    );
};

export default Add_2_project;