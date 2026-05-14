import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

type Props = {
    nome: string;
    causa: string;
    descricao: string;
    localizacao: string;
    imagem: any;
    cor: string;
    onPress: () => void;
};

export default function ONGCard({
    nome,
    causa,
    descricao,
    localizacao,
    imagem,
    cor,
    onPress,
}: Props) {

    return (
        <View
            style={[
                styles.ongCard,
                {
                    borderLeftWidth: 6,
                    borderLeftColor: cor,
                },
            ]}
        >
            <Image
                source={imagem}
                style={styles.ongImage}
            />

            <View style={styles.cardInfo}>
                <Text style={styles.ongNome}>
                    {nome}
                </Text>
                <Text style={styles.ongCause}>
                    {causa}
                </Text>
                <Text style={styles.ongLocation}>
                    📍 {localizacao}
                </Text>
                <Text style={styles.ongDescription}>
                    {descricao}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.arrowBtn}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    ongCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 22,
        marginBottom: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
    },
    ongImage: {
        width: 75,
        height: 75,
        borderRadius: 18,
        resizeMode: 'cover',
        marginRight: 16,
    },
    cardInfo: {
        flex: 1,
    },
    ongNome: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#0F172A',
    },
    ongCause: {
        fontSize: 15,
        color: '#005CFF',
        marginTop: 4,
        fontWeight: '600',
    },
    ongLocation: {
        fontSize: 14,
        color: '#64748B',
        marginTop: 6,
    },

    ongDescription: {
        fontSize: 13,
        color: '#94A3B8',
        marginTop: 6,
    },

    arrowBtn: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#EFF6FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowText: {
        fontSize: 24,
        color: '#005CFF',
        fontWeight: 'bold',
    },
});