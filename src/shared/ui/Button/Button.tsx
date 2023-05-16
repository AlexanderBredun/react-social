import { classNames } from "@/shared/lib/helpers";
import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum eBtnVariant{
    CLEAR = "clear",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: eBtnVariant
}

export const Button:FC<Props> = ({ children, variant, className, ...otherProps })=> {
	return (
		<button  className={classNames(cls.btn, [className, cls[variant]])} {...otherProps}>
			{children}
		</button>
	);
};

