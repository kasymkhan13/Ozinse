import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';
import styles from './project/project.module.css';

import img_0 from './project/img/chevron-right.svg';
import img_1 from './project/img/1.svg';
import img_2 from './project/img/2.png';
import img_3 from './project/img/3.svg';
import img_delete from './project/img/delete.svg'; 
import img_nav from './project/img/Image.svg';
import play from './project/img/Play Button.svg';
import { useNavigate } from "react-router-dom";


const Project_1 = () => {

	const navigete = useNavigate();

    return (
        <body className={style.body}>
        <Header />
        <div className={style.container}>
            <SideBar />
            <div className={styles.content} >
				<div className={styles.content_header} >
					<div>
						<p>Проекты</p>
						<img src={img_0} alt=""/>
						<p>Суперкөлік Самұрық</p>
					</div>
				</div>
				<div className={styles.content_nav} >
					<div className={styles.content_nav_titel} >
						<div className={styles.nav_titel_1} >
							<div>
								<p>Суперкөлік Самұрық</p>
							</div>
							<div className={styles.nav_titel_1_img} >
								<img src={img_1} alt=""/>
								<img src={img_2} alt=""/>
								<img src={img_3} alt=""/>
							</div>
						</div>
						<div className={styles.nav_titel_2}>
							<a href="../red/red.html">
								<div className={styles.nav_titel_2_1}>
									<p>Редактировать</p>
								</div>
							</a>
								<div onClick={() => navigete('/DeleteProject')} className={styles.nav_titel_2_img} >
									<img src={img_delete} alt=""/>
								</div>
						</div>
					</div>
					<div className={styles.content_nav_img} >
						<div>
							<img src={play} alt=""/>
						</div>
						<img src={img_nav} alt=""/>
					</div>
					<div className={styles.content_season}>
						<div className={styles.season_1}>
							<button>1 сезон</button>
							<button>2 сезон</button>
							<button>3 сезон</button>
						</div>
						<div className={styles.season_2}>
							<button>1 серия</button>
							<button>2 серия</button>
							<button>3 серия</button>
							<button>4 серия</button>
							<button>5 серия</button>
							<button>6 серия</button>
							<button>7 серия</button>
							<button>8 серия</button>
							<button>9 серия</button>
							<button>10 серия</button>
						</div>
					</div>
					<div className={styles.author} >
						<div className={styles.author_1} >
							<h1>Описание</h1>
							<p>Шытырман оқиғалы мультсериал Елбасының «Ұлы даланың жеті қыры» бағдарламасы аясында жүзеге асырылған. Мақалада қызғалдақтардың отаны Қазақстан екені айтылады. Ал, жоба қызғалдақтардың отаны – Алатау баурайы екенін анимация тілінде дәлелдей түседі. If you want to increase your knowledge of 3D design with Aarón, you can also take some of his other courses: Characters in Cinema 4D: from the Sketch to 3D Printing, Prototypes and Product Viewing in Cinema 4D, Compositions with Cinema 4D and OctaneRender, 3D Illustration with 4D Cinema 4D.</p>
						</div>
						<div className={styles.author_2}>
							<div className={styles.author_2_1} >
								<p>Режиссер:</p>
							<p>Бақдәулет Әлімбеков </p>
							</div>
							<div className={styles.author_2_2} >
								<p>Продюсер:</p>
								<p>Сандуғаш Кенжебаева</p>
							</div>							
						</div>
					</div>
					<div className={styles.scrin} >
						<h1>Скриншоты</h1>
						<div className={styles.scrin_8}  >
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
        </div>
    </body>
    );
};

export default Project_1;