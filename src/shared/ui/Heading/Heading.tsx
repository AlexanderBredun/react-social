import { FC } from 'react';
import cls from './Heading.module.scss';
import { classNames } from '@/shared/lib/helpers';
import { Mods } from '@/shared/lib/helpers/classNames';

type tType = 'danger' | 'success' | 'default'
type tAlign = 'center' | 'left' | 'right'
type tSize = 'L' | 'S' | 'XL'

interface HeadingProps extends Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'type'|'align'>{
    tag?: keyof JSX.IntrinsicElements;
    heading: string;
    subheading?: string;
    type?: tType;
    align?: tAlign
	size?: tSize;
	className?: string
}

const Heading:FC<HeadingProps> = ({ tag: Tag = 'h2', align = 'left', type = 'default', size, heading, className, subheading, ...props }) => {

	const mods: Mods = [cls[type], cls[align], size && cls[size], className];

	return (
		<>
			<Tag className={classNames(cls['heading'], mods)} {...props}>
				{heading}
			</Tag>
			{subheading && <p className={classNames(cls['subheading'], mods)}>{subheading}</p>}
		</>
	);
};

export {
	Heading
};