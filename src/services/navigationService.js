import { CommonActions } from '@react-navigation/native';

let navigator;
export function setNavigator(nav) {
	if (nav) {
		navigator = nav;
	}
}

export function navigate(routeName) {
	
	if (navigator && routeName) {
		navigator.dispatch(
			CommonActions.navigate({
				name: routeName
			})
		);
	}
}