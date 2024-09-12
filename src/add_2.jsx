import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';
import styles from './add_2/add_2.module.css';

import slesh from './add_2/img/+.svg';
import img_1 from './add_2/img/1.svg';
import img_2 from './add_2/img/2.svg';
import img_0 from './add_2/img/0..svg';
import red from './add_2/img/edit.svg';
import del from './add_2/img/delete.svg';
import { useNavigate } from "react-router-dom";

const Add_2 = () => {

    const navigate = useNavigate();

    return (
        <body className={style.body}>
			<Header />
			<div className={style.container}>
				<SideBar />
                <div className={styles.content} >
				<div className={styles.content_header}>
					<div className={styles.content_header_1} >
						<div className={styles.hed_1} >Проекты на главной</div>
						<p className={styles.hed_1_p} >2</p>
						<div onClick={() => navigate('/Add_2_project')} className={styles.hed_2} >
							<div className={styles.hed_2_img}>
								<img src={slesh} alt=""/>
							</div>
								<p>Добавить</p>
						</div>
					</div>
				</div>
				<div className={styles.content_nav} >
					<div className={styles.nav_1} >
						<div className={styles.nav_img}>
							<img src={img_1} alt=""/>
						</div>
						<p className={styles.p_2} >Қызғалдақтар мекені</p>
						<div className={styles.nav_p}>
							<p>Телехикая</p>
							<div className={styles.img_0}>
								<img src={img_0} alt=""/>
							</div>
							<p>Мультфильм</p>
						</div>
						<div className={styles.nav_p_2}>
							<p>Проект на главной #1</p>
							<div className={styles.img_1} >
								<img src={red} alt=""/>
							</div>
							<div className={styles.img_2} >
								<img onClick={() => navigate('/Add_2_delete')} src={del} alt=""/>
							</div>
						</div>
					</div>
					<div className={styles.nav_1} >
						<div className={styles.nav_img} >
							<img src={img_2} alt=""/>
						</div>
						<p className={styles.p_2}>Ойыншықтар</p>
						<div className={styles.nav_p} >
							<p>Телехикая</p>
							<div className={styles.img_0} >
								<img src={img_0} alt=""/>
							</div>
							<p>Мультфильм</p>
						</div>
						<div className={styles.nav_p_2}>
							<p>Проект на главной #2</p>
							<div className={styles.img_1} >
								<img src={red} alt=""/>
							</div>
							<div onClick={() => navigate('/Add_2_delete')} className={styles.img_2} >
								<img src={del} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</body>
    );
} ;

export default Add_2;