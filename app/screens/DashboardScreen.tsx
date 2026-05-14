import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function HomeScreen({ route, navigation }: Props) {
    const { userName, userId } = route.params;

    return (
        <View style={styles.body}>
            <View style={styles.container}>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.conteudo}
                    showsVerticalScrollIndicator={false}
                >

                    {/* TOPO */}
                    <Text style={styles.tituloPrincipal}>Dashboard</Text>
                    <Text style={styles.textoComum}>
                        Bem-vindo de volta, {userName}
                    </Text>

                    {/* CARD DE INFORMAÇÕES */}
                    <View style={styles.card}>
                        <Text style={styles.label}>Nome</Text>
                        <Text style={styles.info}>{userName}</Text>

                        <Text style={styles.label}>ID do usuário</Text>
                        <Text style={styles.info}>{userId}</Text>
                    </View>

                    {/* CARDS DE RESUMOS - INVENÇÃO */}
                    <View style={styles.cardsContainer}>

                        <View style={styles.resumoCard}>
                            <Text style={styles.cardTitulo}>ONGs disponíveis</Text>
                            <Text style={styles.cardNumero}>12</Text>
                        </View>

                        <View style={styles.resumoCard}>
                            <Text style={styles.cardTitulo}>Causas favoritas</Text>
                            <Text style={styles.cardTexto}>
                                Educação e Meio Ambiente
                            </Text>
                        </View>

                        <View style={styles.resumoCard}>
                            <Text style={styles.cardTitulo}>Impacto</Text>
                            <Text style={styles.cardTexto}>
                                3 ações voluntárias realizadas
                            </Text>
                        </View>

                    </View>

                    {/* AÇÕES */}
                    <TouchableOpacity
                        style={styles.buttonPrincipal}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonSecundario}
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            })
                        }
                    >
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    );
}

// ESTILIZANDO NO MESMO ESTILO DO LOGIN SCRREN
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#F4F7FA",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    scrollView: {
        width: '100%',
    },
    conteudo: {
        alignItems: 'center',
        paddingBottom: 20,
    },

    tituloPrincipal: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#005CFF",
        textAlign: "center",
        marginBottom: 10,
    },
    textoComum: {
        fontSize: 18,
        color: "#1E293B",
        textAlign: "center",
        marginBottom: 30,
    },

    card: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },

    label: {
        fontSize: 14,
        color: '#64748B',
        marginBottom: 5,
    },

    info: {
        fontSize: 18,
        color: '#1E293B',
        marginBottom: 15,
        fontWeight: 'bold',
    },

    buttonPrincipal: {
        backgroundColor: '#005CFF',
        paddingVertical: 14,
        borderRadius: 30,
        width: '85%',
        alignItems: 'center',
        marginBottom: 15,
    },

    buttonSecundario: {
        backgroundColor: '#002a71',
        paddingVertical: 14,
        borderRadius: 30,
        width: '85%',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // INVENÇÃO DOS CARDS DE RESUMO:
    cardsContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 25,
},

resumoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 4,
},

cardTitulo: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 8,
},

cardNumero: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#005CFF',
},

cardTexto: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
},
});