import style from './assats/css/header.module.css';
import logo from './img/header/logo.svg';
import logo_2 from './img/header/search.svg';
import img_3 from './img/header/Bell.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

	const navigate = useNavigate();

    return (
        <div className={style.header}>
			<div className={style.header_img}>
				<img src={logo} alt=""/>
			</div>
			<div className={style.header_input} >
				<input placeholder="Поиск" type="text"/>
				<div className={style.input_img}>
					<img src={logo_2} alt=""/>
				</div>
			</div>
			<div className={style.delete_1} onClick={() => navigate('/') }>
				<div className={style.header_button}>
					<button>Выйти</button>
					<div className={style.input_img_2}>
						<img src={img_3} alt=""/>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Header;