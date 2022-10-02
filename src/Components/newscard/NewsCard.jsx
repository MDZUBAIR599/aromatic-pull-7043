import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ data }) => {
	//console.log(data)
	return (
		<div className="bcontainer">
			<div className={styles.container} >
			<div className={styles.firstChild}>
				<img src={data.img} alt="" width="100%" height="100%" />
			</div>
			<div className={styles.secondChild}>
				<h3>{data.heading}</h3>
				<p>{data.description}</p>
			 <div className={styles.third}>
					<p>   {data.type}</p>
				   <p >{data.date}</p></div>
			</div>
		</div>
		</div>
	);
};

export default NewsCard;
