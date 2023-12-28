import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuoteBlock = ({ quote, onSave }) => {
  if (!quote) {
    return null;
  }

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>{quote.quote}</Text>
      <Text style={styles.authorText}>{quote.author}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'justify',
  },
  authorText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'darkgreen',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default QuoteBlock;
