import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import QuotesListItem from './QuotesListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuotesListScreen = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const quotesJson = await AsyncStorage.getItem('quotes');
      const quotes = quotesJson ? JSON.parse(quotesJson) : [];
      setQuotes(quotes);
    };
    getQuotes();
  }, []);

  const handleDeleteQuote = async (item) => {
    const newQuotes = quotes.filter((quote) => quote.id !== item.id);
    await AsyncStorage.setItem('quotes', JSON.stringify(newQuotes));
    setQuotes(newQuotes);
  };

  return (
    <View style={styles.container}>
       {quotes.length > 0 ? (
        <FlatList
          data={quotes}
          renderItem={({ item, index }) => (
            <QuotesListItem quote={item} onDelete={() => handleDeleteQuote(item)} />
          )}
        />
      ) : (
        <Text style={styles.noQuotesText}>You have no quotes yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noQuotesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default QuotesListScreen;
