import classNames from 'classnames';
import React, {PropTypes} from 'react';

const Button = props => {
	const cssclasses = classNames('Button', props.className);
	return props.href
		? <a {...props} className={cssclasses} />
		: <buttom {...props} className={cssclasses} />;
}

Button.propTypes = {
	href: PropTypes.string, // due to the destructuring, PropTypes (React.PropTypes)
}

export default Button // module.exports = Button;
