import { useNavigate } from 'react-router-dom';
import style from './add_4/add_4_data.module.css';
import img_x from './project/img/000.svg';
import mask from './add_4/img/Mask Group.svg';

const Add_4_data = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
        <div className={style.content} >
            <div className={style.h1} >
                <p>Данные пользователя</p>
                <div onClick={() => navigate('/Add_4')} className={style.x}>
                        <img src={img_x} alt=""/>
                </div>
            </div>
            <div className={style.content_titel}>
                <div className={style.content_titel_img}>
                    <img src={mask} alt="" />
                </div>
                <div className={style.content_p}>
                    <h1>Cameron Williamson</h1>
                    <p>+7 (702) 213-12-31</p>
                    <p>mail@gmail.com</p>
                    <p>Дата рождения: 31.10.2001</p>
                </div>
            </div>
            <div className={style.button} >
                <button onClick={() => navigate('/Add_4')}>Закрыть</button>
            </div>
        </div>
    </div>
    );
};

export default Add_4_data;