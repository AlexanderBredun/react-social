import { classNames } from "@/shared/lib/helpers";
import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

export enum eVariant{
    UNDERLINE = "underline",
    UNDERDASH = "dashed"
}

interface Props extends LinkProps{
    variant?: eVariant
    className?: string,
    to: string,
}

export const AppLink:FC<Props> = ({ children, to, variant, ...allProps })=> {
	return (
		<Link to={to} {...allProps} className={classNames(cls.appLink, [cls[variant]])}>
			{children}
		</Link>
	);
};
