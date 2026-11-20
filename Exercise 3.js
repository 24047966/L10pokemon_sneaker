import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert, Button, Image, SectionList, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';

const datasource = [
  {
    title: 'Fire', icon: '🔥', bgColor: 'lightsalmon',
    data: [
      {name: 'Charmander', card: '168'},
      {name: 'Charmeleon', card: '169'},
      {name: 'Charizard ex', card: '199'}
    ]
  },
  {
    title: 'Electric', icon: '⚡', bgColor: 'gold',
    data: [
      {name: 'Pikachu', card: '173'},
      {name: 'Zapdos ex', card: '192'},
      {name: 'Zapdos ex', card: '202'}
    ]
  }
];

export default function App() {
  const [useBackupImages, setUseBackupImages] = useState(false);

  const renderItem = ({item}) => {
    let imageUrl = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_'
      + item.card + '-2x.png';
    return (
      <TouchableOpacity
        style={styles.opacityStyle}
        accessibilityRole="button"
        onPress={() => Alert.alert(item.name, 'Card ' + item.card + '/165 selected!')}
      >
        <View style={styles.nameColumn}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.cardNumber}>{item.card}/165</Text>
        </View>
        <Image
          source={{uri: imageUrl}}
          style={styles.cardImage}
          resizeMode="contain"
          onError={() => setUseBackupImages(true)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Button
        title="Add Pokemon"
        color="#1976D2"
        onPress={() => Alert.alert('Add Pokemon', 'You will use this button next lesson.')}
      />
      <SectionList
        style={styles.list}
        sections={datasource}
        keyExtractor={(item) => item.card}
        renderItem={renderItem}
        extraData={useBackupImages}
        renderSectionHeader={({section}) => (
          <Text style={[styles.headerText, {backgroundColor: section.bgColor}]}>
            {section.icon} {section.title}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    paddingVertical: 5,
  },
  opacityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'lavender',
    borderWidth: 1,
    borderColor: '#666',
  },
  nameColumn: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  cardNumber: {
    fontSize: 14,
    color: '#514C62',
    marginTop: 4,
  },
  cardImage: {
    width: 180,
    height: 252,
    maxWidth: '55%',
  },
});
