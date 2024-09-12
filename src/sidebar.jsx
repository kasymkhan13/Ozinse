import style from './assats/css/sidebar.module.css';
import img_1 from './img/sidebar/Dashboard.svg';
import img_2 from './img/sidebar/2.svg';
import img_3 from './img/sidebar/3.svg';
import img_4 from './img/sidebar/4.svg';
import img_5 from './img/sidebar/5.svg';
import img_6 from './img/sidebar/6.svg';
import img_7 from './img/sidebar/7.svg';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {

    const navigate = useNavigate();

    return (
        <div className={style.sidebar}>
        <button onClick={() => navigate('/FontSize')} className={style.sidebar_button_1}>
            <div>
                <img src={img_1} alt=""/>
            </div>
            <p>Проекты</p>
        </button>
            <button onClick={() => navigate('/Add_2')} className={style.sidebar_button_2}>
                <img src={img_2} alt=""/>
                <p>Проекты на главной</p>
            </button>
            <button onClick={() => navigate('/Add_3')} className={style.sidebar_button_3}>
                <img src={img_3} alt=""/>
                <p>Категории</p>
            </button>
            <button onClick={() => navigate('/Add_4')} className={style.sidebar_button_4}>
                <img src={img_4} alt=""/>
                <p>Пользователи</p>
            </button>
            <button onClick={() => navigate('/Add_5')} className={style.sidebar_button_5}>
                <img src={img_5} alt=""/>
                <p>Роли</p>
            </button>
            <button onClick={() => navigate('/Add_6')} className={style.sidebar_button_6}>
                <img src={img_6} alt=""/>
                <p>Жанры</p>
            </button>
            <button onClick={() => navigate('/Add_7')} className={style.sidebar_button_7}>
                <img src={img_7} alt=""/>
                <p>Возрасты</p>
            </button>
    </div>
    );
};

export default SideBar;