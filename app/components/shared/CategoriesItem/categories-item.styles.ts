import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	categoryItemContainer: {
		flex: 1,
		height: 150,
		margin: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		elevation: 4,
		shadowColor: '#000',
		shadowOpacity: 0.25,
		textShadowRadius: 3.5,
		shadowOffset: { width: 0, height: 2 },
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
	},
});

export default styles;
