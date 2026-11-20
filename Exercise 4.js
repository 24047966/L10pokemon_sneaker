import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Image, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const sections = [
    {
        title: 'Nike',
        color: '#20252D',
        data: [
            {
                name: 'Liverpool F.C. x Nike Air Max 95',
                imageUrl: 'https://i.pinimg.com/1200x/07/b2/86/07b286c38c76389617a47be88814c401.jpg',
            },
            {
                name: 'Nike Carhartt WIP x Air Max',
                imageUrl: 'https://wwd.com/wp-content/uploads/2026/11/carhartt-wip-nike-air-max-goadome-low.png?w=1024',
            },
            {
                name: 'Nike x Supreme Rammellzee Sneakers',
                imageUrl: 'https://i.pinimg.com/1200x/4f/c4/d8/4fc4d82c740b17509e4d91720103c01f.jpg',
            },
        ],
    },
    {
        title: 'Adidas',
        color: '#244B78',
        data: [
            {
                name: 'Adidas x Mercedes-Benz Samba OG',
                imageUrl: 'https://i.pinimg.com/1200x/53/0a/52/530a5245cf47fc22faf28e0d30f2f4f5.jpg',
            },
            {
                name: 'Adidas x Wales Bonner Black Cream White',
                imageUrl: 'https://i.pinimg.com/736x/fd/78/3d/fd783dfda8206d3c246d51d3e5babbd7.jpg',
            },
            {
                name: 'Adidas x BAPE Stan Smith',
                imageUrl: 'https://i.pinimg.com/1200x/53/df/69/53df692c8e4055ed722fe0b09558309d.jpg',
            },
        ],
    },
];

const renderItem = ({ item }) => (
    <TouchableOpacity
        style={styles.card}
        accessibilityRole="button"
        onPress={() => Alert.alert('Sneaker selected', item.name)}
    >
        {item.imageUrl ? (
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
                resizeMode="contain"
            />
        ) : (
            <View style={[styles.image, styles.placeholder]}>
                <Text style={styles.placeholderIcon}>👟</Text>
            </View>
        )}

        <Text style={styles.shoeName}>{item.name}</Text>
    </TouchableOpacity>
);

export default function App() {
    return (
        <View style={styles.screen}>
            <StatusBar style="dark" />

            <Text style={styles.title}>L10Sneakers</Text>

            <Button
                title="Add Sneaker"
                color="#244B78"
                onPress={() =>
                    Alert.alert('Add Sneaker', 'You pressed the Add Sneaker button.')
                }
            />

            <SectionList
                sections={sections}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    <Text style={[styles.brand, { backgroundColor: section.color }]}>
                        {section.title}
                    </Text>
                )}
                stickySectionHeadersEnabled={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ECF2F8',
        paddingTop: 52,
        paddingHorizontal: 14,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#192B3B',
        marginBottom: 10,
    },
    listContent: {
        paddingBottom: 24,
    },
    brand: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#20252D',
        borderRadius: 10,
        paddingVertical: 11,
        marginTop: 10,
        marginBottom: 8,
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingTop: 8,
        paddingBottom: 12,
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 168,
        borderRadius: 8,
    },
    shoeName: {
        color: '#192B3B',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 19,
        textAlign: 'center',
        marginTop: 4,
    },
    placeholder: {
        backgroundColor: '#F1F5FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderIcon: {
        fontSize: 28,
    },
});