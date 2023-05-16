import React from "react";
import { useTranslation } from "react-i18next";

function About() {
	const { t } = useTranslation("about");
	return (
		<div>
			<h1>
				{t("страница about")}
				
			</h1>
			<p>
				{t("test")}
			</p>
		</div>
	);
}

export default About;