import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { quotesCategories } from '../helpers/quotesCategories';
import { getQuote } from '../api/quotes';
import QuoteBlock from './QuoteBlock';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetQuoteScreen = () => {
  const navigation = useNavigation();
  const [quoteType, setQuoteType] = useState(quotesCategories[0]);
  const [quote, setQuote] = useState({});

  const handleGetQuote = async () => {
    const newQuote = await getQuote(quoteType);
    setQuote(newQuote);
  };

  const handleSaveQuote = async () => {
    const quotesJson = await AsyncStorage.getItem('quotes');
    const quotes = quotesJson ? JSON.parse(quotesJson) : [];

    if (quotes.length && quotes.find((item) => item.id === quote.id)) {
      Alert.alert('Quote already saved!');
      return;
    }

    const newQuotes = [...quotes, quote];
    await AsyncStorage.setItem('quotes', JSON.stringify(newQuotes));
    Alert.alert('Quote saved!');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Text>{'\n'}</Text>
      <Text style={styles.label}>Quote Type:</Text>
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={quoteType}
          style={styles.picker}
          onValueChange={(itemValue) => setQuoteType(itemValue)}
        >
          {quotesCategories.map((category, index) => (
            <Picker.Item key={index} label={category} value={category} />
          ))}
        </Picker>
      </View>

      {Object.keys(quote).length > 0 && <QuoteBlock quote={quote} onSave={handleSaveQuote} />}

      <View style={styles.buttonContainer}>
        <Button title="Get Quote" onPress={handleGetQuote} />
        <Button title="Saved quotes" onPress={() => navigation.navigate('Saved Quotes')} />
        <Text>{'\n'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 40,
    width: '100%',
    flex: 0,
  },
  buttonContainer: {
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
});

export default GetQuoteScreen;
