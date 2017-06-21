import React from 'react';

/**
 * Returns whether an element instance is of a particular type.
 * @param  {ReactElement}     element       the element to check
 * @param  {Function|String}  componentType the type of element to check against
 * @return {Boolean}                        whether the element is the supplied type
 */
export const isComponentOfType = (element, componentType) => {
    return element.type.name === componentType;
}

/**
 * Finds all elements in the tree with a `type` prop that matches `type`.
 *
 * This is like both React's `scryRenderedDOMComponentsWithTag` and
 * `scryRenderedComponentsWithType` as you can supply a component class or a
 * DOM tag.
 *
 * @param  {ReactElement} tree    the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @return {Array}                all matching elements
 */
export const findAllWithType = (tree, type) => {
	return findAll(tree, component => {
		if (React.isValidElement(component)) {
			const
				displayNameIsType = component.type.displayName != null && component.type.displayName === type,
				nameIsType = component.type.name != null && component.type.name === type;

			return displayNameIsType || nameIsType;
		}

		return false;
	});
}

/**
 * Traverses the tree and returns all elements that satisfy the function `test`.
 *
 * @param  {ReactElement}   tree the tree to traverse
 * @param  {Function} test  the test for each component
 * @return {Array}          the elements that satisfied `test`
 */
export const findAll = (tree, test) => {
	let found = test(tree) ? [tree] : [];
	if (React.isValidElement(tree)) {
		if (React.Children.count(tree.props.children) > 0) {
			React.Children.forEach(tree.props.children, (child) => {
				found = found.concat(findAll(child, test));
			});
		}
	}
	return found;
}
