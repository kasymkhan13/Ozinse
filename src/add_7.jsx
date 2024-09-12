import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';
import { useNavigate } from "react-router-dom";
import slesh from './add_2/img/+.svg';

import styles from './add_7/add_7.module.css';

import img_1_1 from './add_6/img/1.1.svg';
import img_1_2 from './add_6/img/1.2.svg';
import img_1_3 from './add_6/img/1.3.svg';

import img_1 from './add_7/img/1.svg';
import img_2 from './add_7/img/2.svg';
import img_3 from './add_7/img/3.svg';
import img_4 from './add_7/img/4.svg';
import img_5 from './add_7/img/5.svg';

const Add_7 = () => {

    const navigate = useNavigate();

    return (
        <body className={style.body}>
			<Header />
			<div className={style.container}>
				<SideBar />
                <div className={styles.content} >
				<div className={styles.content_header}>
					<div className={styles.content_header_1} >
						<div className={styles.hed_1} >Жанры</div>
						<p className={styles.hed_1_p} >9</p>
						<div onClick={() => navigate('/Add_7_plus')} className={styles.hed_2} >
							<div className={styles.hed_2_img}>
								<img src={slesh} alt=""/>
							</div>
								<p>Добавить</p>
						    </div>
                        </div>
                    </div>
                    <div className={styles.content_nav}>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_1} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>8-10 жас</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_7_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_2} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>10-12 жас</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_7_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_3} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>12-14 жас</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_7_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_4} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>14-16 жас</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_7_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_5} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>16-18 жас</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_7_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</body>
    );
};

export default Add_7;