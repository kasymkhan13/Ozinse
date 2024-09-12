import Content from "./content";
import Header from "./header";
import SideBar from "./sidebar";
import style from './assats/css/fontSize.module.css';

function FontSize() {
	return (
		<body className={style.body}>
			<Header />
			<div className={style.container}>
				<SideBar />
				<Content />
			</div>
		</body>
	);
}

export default FontSize;