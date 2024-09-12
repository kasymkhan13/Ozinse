import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';

import styles from './add_3/add_3.module.css';

import slesh from './add_2/img/+.svg';
import img_1 from './add_3/img/1.svg';
import img_2 from './add_3/img/2.svg';
import img_3 from './add_3/img/3.svg';
import { useNavigate } from "react-router-dom";

const Add_3 = () => {

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
						<div onClick={() => navigate('/Add_3_plus')} className={styles.hed_2} >
							<div className={styles.hed_2_img}>
								<img src={slesh} alt=""/>
							</div>
								<p>Добавить</p>
						    </div>
                        </div>
                    </div>
                    <div className={styles.content_nav}>
                        <div className={styles.nav_box}>
                            <div className={styles.nav_p}>Мультфильм</div>
                            <div className={styles.nav_img}>
                                <div className={styles.nav_img0}>
                                    <img className={style.img} src={img_1} alt="" />
                                </div>
                                <div className={styles.nav_img1}>
                                    <img className={style.img} src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_3_delete')} className={styles.nav_img2}>
                                    <img className={style.img} src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.nav_box}>
                            <div className={styles.nav_p}>Мультфильм</div>
                            <div className={styles.nav_img}>
                                <div className={styles.nav_img0}>
                                    <img className={style.img} src={img_1} alt="" />
                                </div>
                                <div className={styles.nav_img1}>
                                    <img className={style.img} src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_3_delete')} className={styles.nav_img2}>
                                    <img className={style.img} src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.nav_box}>
                            <div className={styles.nav_p}>Мультфильм</div>
                            <div className={styles.nav_img}>
                                <div className={styles.nav_img0}>
                                    <img className={style.img} src={img_1} alt="" />
                                </div>
                                <div className={styles.nav_img1}>
                                    <img className={style.img} src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_3_delete')} className={styles.nav_img2}>
                                    <img className={style.img} src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.nav_box}>
                            <div className={styles.nav_p}>Мультфильм</div>
                            <div className={styles.nav_img}>
                                <div className={styles.nav_img0}>
                                    <img className={style.img} src={img_1} alt="" />
                                </div>
                                <div className={styles.nav_img1}>
                                    <img className={style.img} src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_3_delete')} className={styles.nav_img2}>
                                    <img className={style.img} src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.nav_box}>
                            <div className={styles.nav_p}>Мультфильм</div>
                            <div className={styles.nav_img}>
                                <div className={styles.nav_img0}>
                                    <img className={style.img} src={img_1} alt="" />
                                </div>
                                <div className={styles.nav_img1}>
                                    <img className={style.img} src={img_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_3_delete')} className={styles.nav_img2}>
                                    <img className={style.img} src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			    </div>
		</body>
    ); 
};

export default Add_3;