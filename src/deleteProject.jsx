import { useNavigate } from 'react-router-dom';
import style from './project/deleteProject.module.css';

import img_x from './project/img/000.svg';

const DeleteProject = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
			<div className={style.content} >
				<div className={style.h1} >
					<p>Удалить проект?</p>
					<div onClick={() => navigate('/Project_1')} className={style.x}>
							<img src={img_x} alt=""/>
					</div>
				</div>
				<div className={style.p}>
					<div>
						<p>Вы действительно хотите удалить проект?</p>
					</div>
					<div className={style.button} >
						<button onClick={() => navigate('/Project_1')}>Да, удалить</button>
						<button onClick={() => navigate('/Project_1')}>Отмена</button>
					</div>
				</div>
			</div>
		</div>
    );
};

export default DeleteProject;