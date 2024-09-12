import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';
import { useNavigate } from "react-router-dom";
import slesh from './add_2/img/+.svg';

import styles from './add_6/add_6.module.css';

import img_1 from './add_6/img/1.svg';
import img_2 from './add_6/img/2.svg';
import img_3 from './add_6/img/3.svg';
import img_4 from './add_6/img/4.svg';
import img_5 from './add_6/img/5.svg';
import img_6 from './add_6/img/6.svg';
import img_7 from './add_6/img/7.svg';
import img_8 from './add_6/img/8.svg';
import img_9 from './add_6/img/9.svg';

import img_1_1 from './add_6/img/1.1.svg';
import img_1_2 from './add_6/img/1.2.svg';
import img_1_3 from './add_6/img/1.3.svg';


const Add_6 = () => {

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
						<div onClick={() => navigate('/Add_6_plus')} className={styles.hed_2} >
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
                                <p>Комедиялар</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_2} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Отбасымен көретіндер</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_3} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Ғылыми-танымдық</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_4} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Ойын-сауық</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_5} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Ғылыми фантастика және фэнтези</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_6} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Шытырман оқиғалы</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_7} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Қысқаметрлі</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_8} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Музыкалық</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
                                    <img src={img_1_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_img}>
                                <img src={img_9} alt="" />
                            </div>
                            <div className={styles.box_titel}>
                                <p>Спорттық</p>
                            </div>
                            <div className={styles.box_img_3}>
                                <div>
                                     <img src={img_1_1} alt="" />
                                </div>
                                <p>21</p>
                                <div className={styles.img_left}>
                                     <img src={img_1_2} alt="" />
                                </div>
                                <div onClick={() => navigate('/Add_6_delete')} className={styles.img_left_3}> 
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

export default Add_6;