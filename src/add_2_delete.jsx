import style from './add_2/add_2_delete.module.css';
import { useNavigate } from 'react-router-dom';

import img_x from './project/img/000.svg';

const Add_2_delete = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
			<div className={style.content} >
				<div className={style.h1} >
					<p>Удалить проект из главной?</p>
					<div onClick={() => navigate('/Add_2')} className={style.x}>
							<img src={img_x} alt=""/>
					</div>
				</div>
				<div className={style.p}>
					<div>
						<p>Вы действительно хотите удалить проект?</p>
					</div>
					<div className={style.button} >
						<button onClick={() => navigate('/Add_2')}>Да, удалить</button>
						<button onClick={() => navigate('/Add_2')}>Отмена</button>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Add_2_delete;