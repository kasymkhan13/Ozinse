
import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';
import styleAdd from './addProject/addProject.module.css';

import img_1 from './addProject/img/Bell.svg';
import img_2 from './addProject/img/1.svg';
import img_3 from './addProject/img/2.svg';
import img_0 from './addProject/img/chevron-right.svg';

const AddProject = () => {
    return (
        <body className={style.body}>
        <Header />
        <div className={style.container}>
            <SideBar />
            <div className={styleAdd.content}  >
				<div className={styleAdd.content_header} >
					<div>
						<p>Проекты</p>
						<img src={img_0} alt=""/>
						<p>Добавить проект</p>
					</div>
				</div>
				<div className={styleAdd.content_nav} >
					<div className={styleAdd.titel_nav} >
						<div>
							<img src={img_1} alt=""/>
						</div>
						<h1>Основная информация</h1>
					</div>
					<div className={styleAdd.conent_buttons} >
						<button>Название проекта
						</button>
						<button>Категория
							<div className={styleAdd.conent_buttons_img} >
								<img src={img_2} alt=""/>
							</div>
						</button>
						<div className={styleAdd.conent_buttons_1} >
							<button>Тип проекта
								<div className={styleAdd.conent_buttons_img} >
									<img src={img_2} alt=""/>
								</div>
							</button>
							<button>Возрастная категория
								<div className={styleAdd.conent_buttons_img} >
									<img src={img_2} alt=""/>
								</div>
							</button>
						</div>
						<div className={styleAdd.conent_buttons_2}>
							<button>Год
								<div className={styleAdd.conent_buttons_img} >
									<img src={img_3} alt=""/>
								</div>
							</button>
							<button>Хронометраж (мин)
								<div className={styleAdd.conent_buttons_img} >
									<img src={img_3} alt=""/>
								</div>
							</button>
						</div>
						<button>Ключевые слова</button>
						<p>Например: мультфильм, мультсериал </p>
                        <textarea className={styleAdd.buttons_input} placeholder="Добавьте описание" name="" id="">
                            
                        </textarea>
						<button>Режиссер</button>
						<button>Продюссер</button>
						<div className={styleAdd.button_ok} >
							<button>Далее</button>
							<button>Отмена</button>
						</div>
					</div>
				</div>
			</div>
        </div>
    </body>
    );
};

export default AddProject;