import { FC, HTMLAttributes, useState } from 'react';
import cls from './CopyText.module.scss';
import { classNames } from '@/shared/lib/helpers';

interface CopyTextProps extends HTMLAttributes<HTMLSpanElement> {
	code?: boolean;
	children: string,
	className?: string
}

const CopyText: FC<CopyTextProps> = ({ children, code, className, ...otherProps }) => {

	const [copied, setCopied] = useState(false);

	const copyText = () => {
		navigator.clipboard.writeText(children);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	if (code) {
		return (
			<div className={classNames(cls['copy-code'], [className])} {...otherProps} >
				<pre  >
					<i role='button' onClick={copyText} className={copied ? 'fal fa-check' : 'fal fa-copy'} style={{ 'color': copied ? 'var(--color-green)' : 'inherit' }}></i>
					<code>
						{children}
					</code>
				</pre>
			</div>

		);
	}

	return (
		<span className={classNames(cls['copy-text'], [className])} role='button' onClick={copyText} {...otherProps} >
			<i className={copied ? 'fal fa-check' : 'fal fa-copy'} style={{ 'color': copied ? 'var(--color-green)' : 'inherit' }}></i>
			{children}
		</span>
	);
};

export {
	CopyText
};