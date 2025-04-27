import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA', // світлий фон
    },
    scrollContent: {
      padding: 20,
    },
    content: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      elevation: 3, // тінь на Android
      shadowColor: '#000', // тінь на iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 220,
      borderRadius: 12,
      marginBottom: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 16,
      textAlign: 'center',
    },
    detailText: {
      fontSize: 16,
      color: '#666',
      marginBottom: 8,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: '#444',
      marginTop: 24,
      marginBottom: 12,
      alignSelf: 'flex-start',
    },
    listIngridients: {
      width: '100%',
      padding: 10,
      borderRadius: 8,
      marginBottom: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    IngridientItem: {
      fontSize: 16,
      color: '#555',
      backgroundColor: '#E0E0E0',
      padding: 10,
      borderRadius: 8,
      marginBottom: 8,
      marginRight: 8,
    },
    listItem: {
      fontSize: 16,
      color: '#555',
      backgroundColor: '#F0F0F0',
      padding: 10,
      borderRadius: 8,
      marginBottom: 8,
      width: '100%',
    },
  });

  export default styles;