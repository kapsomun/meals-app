import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mealContainer: {
		margin: 16,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: '#f9f9f9',
		elevation: 4,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
        
	},
	mealImage: {
		width: '100%',
		height: 200,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		resizeMode: 'cover',
	},
	mealTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 8,
	},
    mealAffordability: {
        fontSize: 16,
        textAlign: 'center',
        color: '#888',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    mealDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: 8,
        color: '#666',
        fontSize: 14,
    },
});

export default styles;
