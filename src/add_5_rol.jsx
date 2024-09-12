import style from './add_5/add_5_rol.module.css';
import img_x from './project/img/000.svg';
import { useNavigate } from 'react-router-dom';

import img_000 from './add_5/img/000.svg';

const Add_5_rol = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
        <div className={style.content} >
            <div className={style.h1} >
                <p>Добавить категорию</p>
                <div onClick={() => navigate('/Add_5')} className={style.x}>
                        <img src={img_x} alt=""/>
                </div>
            </div>
            <div className={style.rol_input}>
                <div className={style.rol_select_1}>
                    <p className={style.pp}>Наименование</p>
                    <input className={style.select_1_input} type="text" placeholder='Менеджер 1' />
                </div>
                <div className={style.rol_select_1}>
                    <p className={style.pp}>Проекты</p>
					<select className={style.select_1} name="select" id="">
						<option value="">Редактирование</option>
						<option value="">Проекты 1</option>
						<option value="">Проекты 2</option>
						<option value="">Проекты 3</option>
						<option value="">Проекты 4</option>
						<option value="">Проекты 5</option>
					</select>
                </div>
                <div className={style.rol_select_1}>
                    <p className={style.pp}>Категории</p>
					<select className={style.select_1} name="select" id="">
						<option value="">Редактирование</option>
						<option value="">Только чтение</option>
					</select>
                </div>
                <div className={style.rol_select_1}>
                    <p className={style.pp}>Пользователи</p>
					<select className={style.select_1} name="select" id="">
						<option value="">Редактирование</option>
						<option value="">Проекты 1</option>
						<option value="">Проекты 2</option>
						<option value="">Проекты 3</option>
						<option value="">Проекты 4</option>
						<option value="">Проекты 5</option>
					</select>
                </div>
                <div className={style.rol_select_1}>
                    <p className={style.pp}>Роли</p>
					<select className={style.select_1} name="select" id="">
						<option value="">Редактирование</option>
						<option value="">Проекты 1</option>
						<option value="">Проекты 2</option>
						<option value="">Проекты 3</option>
						<option value="">Проекты 4</option>
						<option value="">Проекты 5</option>
					</select>
                </div>
                
            </div>
            <div className={style.button} >
                    <button onClick={() => navigate('/Add_5')}>Добавить</button>
                    <button onClick={() => navigate('/Add_5')}>Отмена</button>
            </div>
        </div>
    </div>
    );
};

export default Add_5_rol;