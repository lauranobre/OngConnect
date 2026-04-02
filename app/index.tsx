import { Link } from "@/.expo/types/router";
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleLogin = () => {
    if (email.includes('@') && senha.length > 6) {
      console.log("✅ Acesso autorizado para:", email);
    } else {
      console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>


        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.conteudo}
          showsVerticalScrollIndicator={false} // Opcional: esconde a barra de rolagem
        >

          {/* TOPO - lugar da logo */}
          <Image
            style={styles.imagem}
            source={require('../assets/images/logo.png')}
          />


          {/* MEIO - lugar dos textos */}
          <Text style={styles.tituloPrincipal}>Bem-vindo a OngConnect!</Text>
          <Text style={styles.textoComum}>Nós somos a ponte digital que liga a sua vontade de ajudar às necessidades das ONGs da comunidade.</Text>


          {/* LOCAL DO FORMULÁRIO */}
        <View style={styles.formulario}>

          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input}
            placeholder="Digite seu e-mail" // Mudei o placeholder
            value={email}
            onChangeText={(texto) => setEmail(texto.toLowerCase())}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          
          {/* Persistência Visual */}
          <Text style={{ textAlign: 'center', color: '#64748B', marginBottom: 15, fontSize: 15 }}>
            Logando como: {email || "..."}
          </Text>

          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={(texto) => setSenha(texto)}
            secureTextEntry={true} 
          />

          <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
        </View>


          {/* FINAL - lugar dos botões */}
          <TouchableOpacity
            style={styles.buttonEntrar}
            onPress={handleLogin}
          >
            <Text style={styles.buttonEntrarText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonProjeto}
            onPress={() => console.log('Navegar para a lista de Projetos/Mapa')}
          >
            <Text style={styles.buttonProjetoText}>Conhecer Projetos</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  );
}

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
  textoComum: {
    fontSize: 18,
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 30,
  },
  tituloPrincipal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#005CFF",
    textAlign: "center",
    marginBottom: 10,
  },
  imagem: {
    width: 400,
    height: 150,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonEntrar: {
    backgroundColor: '#005CFF',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 15,
    width: '85%',
    alignItems: 'center',
  },
  buttonProjeto: {
    backgroundColor: '#002a71',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 15,
    width: '85%',
    alignItems: 'center',
  },
  buttonEntrarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonProjetoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formulario: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  esqueciSenha: {
    fontSize: 15,
    color: '#1E293B',
    textAlign: 'right',
    marginRight: 10,
    textDecorationLine: 'underline',
  },
  scrollView: {
    width: '100%',
  },
  conteudo: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  caixa: {
    width: '90%',
    height: 150, // Altura grande para forçar a tela a rolar
    backgroundColor: '#007AFF',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    borderRadius: 10,
  }
});