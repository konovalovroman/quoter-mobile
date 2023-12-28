import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuotesListItem = ({ quote, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.mainText}>{quote.quote}</Text>
        <Text style={styles.secondaryText}>{quote.author}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(quote.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  quoteContainer: {
    flex: 1,
    marginRight: 10,
  },
  mainText: {
    fontSize: 16,
    marginBottom: 5,
  },
  secondaryText: {
    fontSize: 14,
    color: '#555',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default QuotesListItem;
