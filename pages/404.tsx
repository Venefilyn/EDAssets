import styles from "../styles/404.module.css";
import Image from "next/image";
import Link from "next/link";

const NoPage = () => {
	return (
		<div className={styles.center}>
			<h1 className={styles.bigText}> 404 </h1>
			<h2 className={styles.smallText}>
				The galaxy you are trying to find does not exist cmdr! But luckily this friendly Sidewinder will take you back{" "}
				<Link href="/">
					<a className={styles.link}>home!</a>
				</Link>
			</h2>

			<Link href="/">
				<a>
					<Image src="/404/SidewinderMkI.png" width="487" height="257"></Image>
				</a>
			</Link>

			<h6 className={styles.hint}>(hint: click the sidewinder)</h6>
		</div>
	);
};

export default NoPage;