import React from "react";
import { Button } from "@/shared/ui/Button";

// import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
// import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { eBtnVariant } from "../../shared/ui/Button/Button";
import { eThemes, useTheme } from "@/shared/lib/providers/theme";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/helpers";


export const ThemeSwitcher = ()=> {

	const { theme, setTheme } = useTheme();

	return (
		<Button variant={eBtnVariant.CLEAR} className={classNames(cls["btn-theme-switcher"])} onClick={()=> setTheme()}>
			{theme === eThemes.dark
				?
				<i className='fas fa-moon fa-2x'></i>
				:
				<i className="fas fa-sun fa-2x"></i>
			}
       
		</Button>
	);
};

