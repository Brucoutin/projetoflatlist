import React, { Component, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Tela from './src/Tela/Tela';
const projeto  = (data) => {
  const [searchText, setSearchText] = useState('')
  const [filteredContacts, setFilteredContacts] = useState()

  const contatos = Tela
  const handleSearch = text => {
    setSearchText(text)
    const filtered = contatos.filter(contact => {
      return contact.name.toLowerCase().includes(text.toLowerCase())
    })
    setFilteredContacts(filtered)
  }
  console.log(contatos, 'jajajajajja')

  return (
    <View style={styles.container}>
     <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={contatos}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.phoneText}>{item.phone}</Text>
          </View>
          </View>
          
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}
export default projeto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 8,
    marginTop: 60,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius:10,
    backgroundColor:"#eee"
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  //  backgroundColor: 'pink'

  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 16,
    color: '#999',
  },
})