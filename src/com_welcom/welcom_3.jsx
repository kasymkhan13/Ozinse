import { useNavigate } from 'react-router-dom';
import style from '../assats/css/welcom_3.module.css';
import img_0 from '../assats/img/welcom/Icon_Art (Edit Me).svg';

const Welcom_3 = () => {

    const navigate = useNavigate();

    return (
		<div className={style.container} >
            <div className={style.img_1} >
				<img src={img_0} alt=""/>
			</div>
            <div className={style.box} >
            <div className={style.box_1} >
					<div className={style.box_titele} >
						<h1 className={style.titel_1} >
							Запрос успешно принят
						</h1>
						<p className={style.titel_2}>
							На почту ******.@gmail.com, указанную при регистрации, сейчас придёт письмо.
						</p>
					<div className={style.box_button}>
						<button onClick={() => navigate('/')} className={style.button_1}>Перейти на почту</button>
						<p>У вас есть аккаунт? <a onClick={() => navigate('/')}>Войти</a></p> 
					</div>
				</div>
			</div>
            </div>
			<div className={style.box_2}></div>
		</div>
    );
};

export default Welcom_3;