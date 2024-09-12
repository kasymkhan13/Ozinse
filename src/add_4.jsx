import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';

import styles from './add_4/add_4.module.css';

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import img_1 from './add_4/img/a.svg';
import img_3 from './add_4/img/m.svg';
import { useNavigate } from "react-router-dom";

const Add_4 = () => {

    const navigate  = useNavigate();

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <body className={style.body}>
			<Header />
			<div className={style.container}>
				<SideBar />
                <div className={styles.content} >
				    <div className={styles.content_header}>
					<div className={styles.content_header_1} >
						<div className={styles.hed_1} >Пользователи</div>
						<p className={styles.hed_1_p} >5</p>
                        </div>
                        <DatePicker 
                    className={styles.dataPicker}
                    placeholderText="Сортировать: По дате регистрации"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                     setDateRange(update);
                    }}
                     isClearable={true}
                     />
                </div>
                <div className={styles.nav}>
                    <div onClick={() => navigate('/Add_4_data')} className={styles.nav_box}>
                        <div className={styles.nav_img}>
                            <img src={img_1} alt="" />
                        </div>
                        <div className={styles.nav_taitel}>
                            <p className={styles.nav_taitel_p}>
                            Guy Hawkins
                            </p>
                            <p className={styles.nav_taitel_pp}>
                            mail@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className={styles.nav_box}>
                        <div className={styles.nav_img}>
                            <img src={img_1} alt="" />
                        </div>
                        <div className={styles.nav_taitel}>
                            <p className={styles.nav_taitel_p}>
                            Marvin McKinney
                            </p>
                            <p className={styles.nav_taitel_pp}>
                            mail@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className={styles.nav_box}>
                        <div className={styles.nav_img}>
                            <img src={img_3} alt="" />
                        </div>
                        <div className={styles.nav_taitel}>
                            <p className={styles.nav_taitel_p}>
                            Ronald Richards
                            </p>
                            <p className={styles.nav_taitel_pp}>
                            mail@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className={styles.nav_box}>
                        <div className={styles.nav_img}>
                            <img src={img_1} alt="" />
                        </div>
                        <div className={styles.nav_taitel}>
                            <p className={styles.nav_taitel_p}>
                            Guy Hawkins
                            </p>
                            <p className={styles.nav_taitel_pp}>
                            mail@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className={styles.nav_box}>
                        <div className={styles.nav_img}>
                            <img src={img_1} alt="" />
                        </div>
                        <div className={styles.nav_taitel}>
                            <p className={styles.nav_taitel_p}>
                            Guy Hawkins
                            </p>
                            <p className={styles.nav_taitel_pp}>
                            mail@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                </div>
			</div>
		</body>
    );
};

export default Add_4;