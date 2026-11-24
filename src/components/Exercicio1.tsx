import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
} from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
      setMensagem("Erro: preencha todos os campos.");
    } else if (senha.length < 6) {
      setMensagem("Erro: a senha deve ter pelo menos 6 caracteres.");
    } else if (senha !== confirmarSenha) {
      setMensagem("Erro: as senhas não são iguais.");
    } else {
      setMensagem("Cadastro realizado com sucesso!");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput
        style={styles.campo_texto}
        value={nome}
        onChangeText={setNome}
      />

      <Text>E-mail</Text>
      <TextInput
        style={styles.campo_texto}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Senha</Text>
      <View style={styles.painel_senha}>
        <TextInput
          style={styles.campo_senha}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.olho}>{mostrarSenha ? "🙈" : "👁️"}</Text>
        </Pressable>
      </View>

      <Text>Confirmar senha</Text>
      <View style={styles.painel_senha}>
        <TextInput
          style={styles.campo_senha}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={!mostrarSenha}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.olho}>{mostrarSenha ? "🙈" : "👁️"}</Text>
        </Pressable>
      </View>

      <View style={styles.botao}>
        <Button title="Cadastrar" onPress={cadastrar} />
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  campo_texto: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  painel_senha: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 10,
  },
  campo_senha: {
    flex: 1,
    padding: 8,
  },
  olho: {
    fontSize: 22,
    paddingHorizontal: 10,
  },
  botao: {
    marginVertical: 10,
  },
  mensagem: {
    textAlign: "center",
    fontSize: 16,
  },
});import { useState } from "react";
import {View, Text, TextInput, Button, Pressable, StyleSheet,} from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
      setMensagem("Erro: preencha todos os campos.");
    } else if (senha.length < 6) {
      setMensagem("Erro: a senha deve ter pelo menos 6 caracteres.");
    } else if (senha !== confirmarSenha) {
      setMensagem("Erro: as senhas não são iguais.");
    } else {
      setMensagem("Cadastro realizado com sucesso!");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput
        style={styles.campo_texto}
        value={nome}
        onChangeText={setNome}
      />

      <Text>E-mail</Text>
      <TextInput
        style={styles.campo_texto}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Senha</Text>
      <View style={styles.painel_senha}>
        <TextInput
          style={styles.campo_senha}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.olho}>{mostrarSenha ? "🙈" : "👁️"}</Text>
        </Pressable>
      </View>

      <Text>Confirmar senha</Text>
      <View style={styles.painel_senha}>
        <TextInput
          style={styles.campo_senha}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={!mostrarSenha}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.olho}>{mostrarSenha ? "🙈" : "👁️"}</Text>
        </Pressable>
      </View>

      <View style={styles.botao}>
        <Button title="Cadastrar" onPress={cadastrar} />
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  campo_texto: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  painel_senha: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 10,
  },
  campo_senha: {
    flex: 1,
    padding: 8,
  },
  olho: {
    fontSize: 22,
    paddingHorizontal: 10,
  },
  botao: {
    marginVertical: 10,
  },
  mensagem: {
    textAlign: "center",
    fontSize: 16,
  },
});