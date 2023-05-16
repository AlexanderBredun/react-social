
type Mods = Record<string, string | boolean>

export function classNames(initClassName: string, additionalClassNames?: string[] | Mods):string {

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