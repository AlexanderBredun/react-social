
type ModsObj = Record<string, string | boolean | undefined>
export type Mods = Array<string | undefined> | ModsObj

export function classNames(initClassName: string, additionalClassNames?: Mods):string {

	let addClasses = '';
	if(!additionalClassNames){
		addClasses = '';
	}
	else if(Array.isArray(additionalClassNames)){
		addClasses = additionalClassNames.filter(v => typeof v === 'string').join(' ');
	}
	else{
		addClasses = Object.entries(additionalClassNames).filter(([cls, value])=> Boolean(value)).map(([cls, value])=> cls).join(' ');
	}
 

	return [
		initClassName,
		addClasses,
	].filter(_=>_).join(' ');

}