import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';
import { useNavigate } from "react-router-dom";
import slesh from './add_2/img/+.svg';

import styles from './add_5/add_5.module.css';

import img_1 from './add_5/img/1.svg';
import img_2 from './add_5/img/2.svg';
import img_3 from './add_5/img/3.svg';


const Add_5 = () => {

    const navigate = useNavigate();

    return (
        <body className={style.body}>
			<Header />
			<div className={style.container}>
				<SideBar />
                <div className={styles.content} >
				<div className={styles.content_header}>
					<div className={styles.content_header_1} >
						<div className={styles.hed_1} >Роли</div>
						<p className={styles.hed_1_p} >3</p>
						<div onClick={() => navigate('/Add_5_rol')} className={styles.hed_2} >
							<div className={styles.hed_2_img}>
								<img src={slesh} alt=""/>
							</div>
								<p>Добавить</p>
						    </div>
                        </div>
                    </div>
                    <div className={styles.content_nav}>
                        <div className={styles.box}>
                            <h1>Менеджер 1</h1>
                            <div className={styles.box_titel}>
                                <div>
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Проекты </p>
                                <p className={styles.p}>(Редактирование)</p>
                            </div>
                            <div className={styles.box_titel}>
                                <div >
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Категории </p>
                                <p className={styles.p}>(Только чтение)</p>
                            </div>
                            <div className={styles.box_titel}>
                                 <div>
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Пользователи </p>
                                <p className={styles.p}>(Только чтение)</p>
                                <div className={styles.img_left}>
                                    <img src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_5_delete')} className={styles.img_left_2}>
                                    <img src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <h1>Менеджер 2</h1>
                            <div className={styles.box_titel}>
                                <div>
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Проекты </p>
                                <p className={styles.p}>(Редактирование)</p>
                            </div>
                            <div className={styles.box_titel}>
                                <div >
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Категории </p>
                                <p className={styles.p}>(Только чтение)</p>
                            </div>
                            <div className={styles.box_titel}>
                                 <div>
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Пользователи </p>
                                <p className={styles.p}>(Только чтение)</p>
                                <div className={styles.img_left}>
                                    <img src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_5_delete')} className={styles.img_left_2}>
                                    <img src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <h1>Менеджер 3</h1>
                            <div className={styles.box_titel}>
                                <div>
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Проекты </p>
                                <p className={styles.p}>(Редактирование)</p>
                            </div>
                            <div className={styles.box_titel}>
                                <div >
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Категории </p>
                                <p className={styles.p}>(Только чтение)</p>
                            </div>
                            <div className={styles.box_titel}>
                                 <div>
                                    <img src={img_1} alt="" />
                                </div>
                                <p>Пользователи </p>
                                <p className={styles.p}>(Только чтение)</p>
                                <div className={styles.img_left}>
                                    <img src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_5_delete')} className={styles.img_left_2}>
                                    <img src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</body>
    );
};

export default Add_5;