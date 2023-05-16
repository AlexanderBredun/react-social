import { Button } from "@/shared/ui/Button";
import React, { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/helpers";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";

export const Sidebar:FC = ()=> {

	const [collapsed, setCollapsed] = useState(false);

	const toggle = ()=> setCollapsed(val => !val);

	return (
		<aside className={classNames(cls["aside-block"], { [cls.collapsed]: collapsed })}>
			<Button onClick={toggle}>
            Toggle
			</Button>
			<nav></nav>
			<div className={cls["aside-block__switchers"]}>
           
				<ThemeSwitcher  />
				<LangSwitcher  />
			</div>
      
		</aside>
	);
};
