import style from '../assats/css/welcom.module.css';
import img_0 from '../assats/img/welcom/Icon_Art (Edit Me).svg';
import img_1 from '../assats/img/welcom/icons/Combined Shape.svg';

import { useNavigate } from 'react-router-dom';

const Welcom_1 = () => {

    const navigate = useNavigate();

    return (
			<div className={style.container}>
			<div className={style.img_1} >
				<img src={img_0} alt=""/>
			</div>
			<div className={style.box} >
				<div className={style.box_1} >
					<div className={style.box_titele} >
						<h1 className={style.titel_1} >
							Добро пожаловать
						</h1>
						<p className={style.titel_2} >
							Войдите в систему, чтобы продолжить
						</p>
					</div>
					<form className={style.box_input} >
						<div className={style.input_email}  >
							<input name="login" placeholder="Email" type="text"/>
						</div>
						<div className={style.input_password} >
							<input name="pass" placeholder="Пароль" type="password"/>
							<div className={style.input_password_img} >
								<img src={img_1} alt=""/>
							</div>
						</div>
					</form>
					<div className={style.box_button} >
						<button onClick={() => navigate("/FontSize")} className={style.button_1} >Войти</button>
						<p>Забыли пароль? <a onClick={() => navigate("/Welcom_2")}>Восстановить</a></p> 
					</div>
				</div>
			</div>
			<div className={style.box_2}></div>
		</div>			
    );
};

export default Welcom_1;


