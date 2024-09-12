import style from './assats/css/content.module.css';

import img_1 from './img/content/header/arrow-down-3.svg';
import img_2 from './img/content/header/2.svg';
import img_3 from './img/content/header/3.svg';

import box_1 from './img/content/nav/box_1.svg';
import box_2 from './img/content/nav/box_2.svg';
import box_3 from './img/content/nav/box_3.svg';
import box_4 from './img/content/nav/box_4.svg';
import box_5 from './img/content/nav/box_5.svg';
import box_6 from './img/content/nav/box_6.svg';
import box_7 from './img/content/nav/box_7.svg';
import box_8 from './img/content/nav/box_8.svg';
import box_1_1 from './img/content/nav/box_1_1.svg';
import box_1_2 from './img/content/nav/box_1_2.svg';
import box_1_3 from './img/content/nav/box_1_3.svg';
import elipse from './img/content/nav/Ellipse 99.svg';
import { useNavigate } from 'react-router-dom';


const Content = () => {

    const navigate = useNavigate();

    return (
        <div className={style.content}>
        <div className={style.content_header} >
            <div className={style.content_header_1} >
                <div className={style.hed_1} >Проекты</div>
                <p className={style.hed_1_p} >113</p>
                <button onClick={() => navigate('/AddProject')} className={style.hed_2} >
                    <div className={style.hed_2_img}>
                        <img src={img_2} alt=""/>
                    </div>
                        <p>Добавить</p>
                </button>
            </div>
            <div className={style.content_header_2} >
                <div className={style.hed_3} >
                    <div className={style.hed_3_1} >
                        <p className={style.p_1} >Сортировать:</p>
                        <p className={style.p_2} >Популярные</p>
                        <div className={style.hed_3_img} >
                            <img src={img_1} alt=""/>
                        </div>
                        </div>
                    <div className={style.hed_3_2} >
                        <p className={style.p_1} >Категория:</p>
                        <p className={style.p_2} >Все категории</p>
                        <div className={style.hed_3_img} >
                            <img src={img_1} alt=""/>
                        </div>
                        </div>
                    <div className={style.hed_3_3} >
                        <p className={style.p_1} >Тип:</p>
                        <p className={style.p_2} >Фильмы и сериалы</p>
                        <div className={style.hed_3_img} >
                            <img src={img_1} alt=""/>
                        </div>
                        </div>
                </div>
                <div className={style.hed_4}  >
                    <div className={style.hed_4_img} >
                        <img src={img_3} alt=""/>
                    </div>
                    <p>Выберите год</p>
                </div>
            </div>
        </div>
        <div className={style.content_nav} >
            <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                        <div className={style.box_img_titel} >
                            4 бөлім
                        </div>
                        <img src={box_1} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Айдар</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                            <img src={elipse} alt=""/>
                            <p>Мультфильм</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>15201</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                        <div className={style.box_img_titel} >
                            12 бөлім
                        </div>
                        <img src={box_2} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Суперкөлік Самұрық</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                            <img src={elipse} alt=""/>
                            <p>Мультфильм</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>12153</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                        <img src={box_3} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                        <p>Каникулы off-line 2</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>7301</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                        <img src={box_4} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Ойыншықтар</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>15201</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>


                <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                        <div className={style.box_img_titel} >
                            4 бөлім
                        </div>
                        <img src={box_5} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Айдар</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                            <img src={elipse} alt=""/>
                            <p>Мультфильм</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>15201</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                        <img src={box_6} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Суперкөлік Самұрық</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                            <img src={elipse} alt=""/>
                            <p>Мультфильм</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>12153</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                    <div className={style.box_img_titel} >
                            12 бөлім
                        </div>
                        <img src={box_7} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                        <p>Каникулы off-line 2</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>7301</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/Project_1')} className={style.box} >
                    <div className={style.box_img} >
                        <img src={box_8} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Ойыншықтар</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>15201</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={style.box} >
                    <div className={style.box_img} >
                        <div className={style.box_img_titel} >
                            4 бөлім
                        </div>
                        <img src={box_5} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Айдар</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                            <img src={elipse} alt=""/>
                            <p>Мультфильм</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>15201</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.box} >
                    <div className={style.box_img} >
                        <img src={box_6} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Суперкөлік Самұрық</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                            <img src={elipse} alt=""/>
                            <p>Мультфильм</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>12153</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.box} >
                    <div className={style.box_img} >
                    <div className={style.box_img_titel} >
                            12 бөлім
                        </div>
                        <img src={box_7} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                        <p>Каникулы off-line 2</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>7301</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.box} >
                    <div className={style.box_img} >
                        <img src={box_8} alt=""/>
                    </div>
                    <div className={style.box_titel}>
                        <div className={style.box_p_1} >
                            <p>Ойыншықтар</p>
                        </div>
                        <div className={style.box_p_2} >
                            <p>Телехикая</p>
                        </div>
                    </div>
                    <div className={style.box_delete} >
                        <div className={style.box_delete_img_1} >
                            <img src={box_1_1} alt=""/>
                            <p>15201</p>
                        </div>
                        <div className={style.box_delete_img_2} >
                            <img src={box_1_2} alt=""/>
                        </div>
                        <div className={style.box_delete_img_3} >
                            <img src={box_1_3} alt=""/>
                        </div>
                    </div>
                </div>

        </div>
    </div>
    );
};

export default Content;