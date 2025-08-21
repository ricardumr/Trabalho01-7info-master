import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import Modal from "react-native-modal";
import { useState } from "react";

export default function App() {
  const viagens = [
    {
      id: 1,
      imagem: require("./assets/favicon.png"),
      local: "Maldivas",
      sobre:
        "As Maldivas são um arquipélago paradisíaco localizado no Oceano Índico, formado por mais de 1.000 ilhas, conhecidas por suas praias de areia branca, mar cristalino e recifes de corais coloridos. O clima é tropical, com temperaturas quentes o ano todo, tornando o destino perfeito para quem busca relaxamento e contato com a natureza. As ilhas oferecem resorts luxuosos sobre a água, atividades como mergulho e snorkel, além de uma paisagem de pôr do sol deslumbrante. É um lugar que combina tranquilidade, beleza natural e experiências únicas.",
    },

    {
      id: 2,
      imagem: require("./assets/favicon.png"),
      local: "Indonésia",
      sobre:
        "A Indonésia é um país formado por milhares de ilhas no sudeste asiático, conhecido por suas praias tropicais, templos históricos e vulcões imponentes. Destinos como Bali e Java combinam cultura vibrante, paisagens naturais deslumbrantes e uma rica gastronomia, atraindo visitantes do mundo todo.",
    },

    {
      id: 3,
      imagem: require("./assets/favicon.png"),
      local: "Filipinas",
      sobre:
        "As Filipinas são um arquipélago de mais de 7 mil ilhas com praias paradisíacas, águas azul-turquesa e recifes de corais incríveis. É um destino perfeito para mergulho, esportes aquáticos e contato com a natureza, além de contar com a calorosa hospitalidade do povo filipino.",
    },

    {
      id: 4,
      imagem: require("./assets/favicon.png"),
      local: "Bahamas",
      sobre:
        "As Bahamas são um conjunto de ilhas no Caribe, famosas por suas praias de areia branca e rosa, mar cristalino e vida marinha abundante. Com clima ensolarado quase o ano inteiro, é um destino ideal para quem busca relaxar e aproveitar atividades como mergulho e passeios de barco.",
    },
  ];

  const criaItem = ({ item }) => (
    <View style={styles.listaItem}>
      <Image source={item.imagem} style={styles.listaImagem} />

      <View>
        <Text>Local: {item.local} </Text>
        <Text>Sobre: {item.sobre} </Text>
      </View>
    </View>
  );

  const [visivel1, setVisivel1] = useState(false);

  const trocar1 = () => {
    setVisivel1(!visivel1);
  };

  const [visivel2, setVisivel2] = useState(false);

  const trocar2 = () => {
    setVisivel2(!visivel2);
  };

  const [visivel3, setVisivel3] = useState(false);

  const trocar3 = () => {
    setVisivel3(!visivel3);
  };

  const [visivel4, setVisivel4] = useState(false);

  const trocar4 = () => {
    setVisivel4(!visivel4);
  };

    const [visivel5, setVisivel5] = useState(false);

  const trocar5 = () => {
    setVisivel5(!visivel5);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxMain}>
         <TouchableOpacity style={styles.cadastro} onPress={trocar5}>
                  <Text style={styles.texto}>Cadastro</Text>
                </TouchableOpacity>
        <Text style={styles.titulo}>Reservas aereas</Text>

          <Modal style={styles.modal} isVisible={visivel5}>
      <TextInput placeholder="Nome:"></TextInput>  
      <TextInput placeholder="Email:"></TextInput>  
      <TextInput placeholder="Senha:"></TextInput>    

        <TouchableOpacity style={styles.botao} onPress={trocar5}>
          <Text style={styles.texto}>Fechar</Text>
        </TouchableOpacity>
      </Modal>
        
        <View style={styles.listaItem}>
          <View style={styles.row}>
            <View style={styles.produtoBox}>
              <Image
                style={styles.image}
                source={require("./assets/maldivas.jpg")}
              />
              <Text>Maldivas</Text>
              <TouchableOpacity style={styles.botao} onPress={trocar1}>
                <Text style={styles.texto}>Abrir modal 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao} onPress={trocar1}>
                <Text style={styles.texto}>Abrir modal 1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={trocar1}>
                <Text style={styles.texto}>Abrir modal 1</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.produtoBox}>
              <Image
                style={styles.image}
                source={require("./assets/filipinas.jpg")}
              />
              <Text>Indonesia</Text>

              <TouchableOpacity style={styles.botao} onPress={trocar2}>
                <Text style={styles.texto}>Abrir modal 2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={trocar2}>
                <Text style={styles.texto}>Abrir modal 2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={trocar2}>
                <Text style={styles.texto}>Abrir modal 2</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <View style={styles.produtoBox}>
                <Image
                  style={styles.image}
                  source={require("./assets/indonesia.avif")}
                />
                <Text>Filipinas</Text>

                <TouchableOpacity style={styles.botao} onPress={trocar3}>
                  <Text style={styles.texto}>Abrir modal 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={trocar3}>
                  <Text style={styles.texto}>Abrir modal 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={trocar3}>
                  <Text style={styles.texto}>Abrir modal 3</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.produtoBox}>
              <Image
                style={styles.image}
                source={require("./assets/bahamas.jpg")}
              />
              <Text>bahamas</Text>

              <TouchableOpacity style={styles.botao} onPress={trocar4}>
                <Text style={styles.texto}>Abrir modal 4</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={trocar4}>
                <Text style={styles.texto}>Abrir modal 4</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={trocar4}>
                <Text style={styles.texto}>Abrir modal 4</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <View style={styles.produtoBox}>
                <Image
                  style={styles.image}
                  source={require("./assets/indonesia.avif")}
                />
                <Text>Filipinas</Text>

                <TouchableOpacity style={styles.botao} onPress={trocar3}>
                  <Text style={styles.texto}>Abrir modal 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={trocar3}>
                  <Text style={styles.texto}>Abrir modal 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={trocar3}>
                  <Text style={styles.texto}>Abrir modal 3</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.produtoBox}>
              <Image
                style={styles.image}
                source={require("./assets/bahamas.jpg")}
              />
              <Text>bahamas</Text>

              <TouchableOpacity style={styles.botao} onPress={trocar4}>
                <Text style={styles.texto}>Abrir modal 4</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={trocar4}>
                <Text style={styles.texto}>Abrir modal 4</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={trocar4}>
                <Text style={styles.texto}>Abrir modal 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal
        isVisible={visivel1}
        style={styles.modal}
        animationIn={"fadeInDown"}
        animationInTiming={200}
        animationOut={"bounceIn"}
        backdropColor="#black" //muda a cor de tras do model
        backdropOpacity={0.5} //muda a opacidade da cor de tras do model
      >
        <FlatList
          data={viagens}
          renderItem={criaItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity style={styles.botao} onPress={trocar1}>
          <Text style={styles.texto}>Fechar modal</Text>
        </TouchableOpacity>
      </Modal>

      <Modal style={styles.modal} isVisible={visivel2}>
        <TouchableOpacity style={styles.botao} onPress={trocar2}>
          <Text style={styles.texto}>Fechar modal</Text>
        </TouchableOpacity>
      </Modal>

      <Modal style={styles.modal} isVisible={visivel3}>
        <TouchableOpacity style={styles.botao} onPress={trocar3}>
          <Text style={styles.texto}>Fechar modal</Text>
        </TouchableOpacity>
      </Modal>

      <Modal style={styles.modal} isVisible={visivel4}>
        <TouchableOpacity style={styles.botao} onPress={trocar4}>
          <Text style={styles.texto}>Fechar modal</Text>
        </TouchableOpacity>
      </Modal>

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  modal: {
    backgroundColor: "#ca6363ff",
    width: "50%",
    marginTop: 200,
    marginBottom: 200,
    marginLeft: "25%",
    marginRight: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 5,
    borderRadius: 20,
  },

  botao: {
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  cadastro:{
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    alignItems:"flex-end"
  },
  

  texto: {
    color: "white",
  },

  titulo: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  boxMain: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  listaItem: {
    marginTop: 20,
    padding: 10,
    borderRadius: 12,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
  },

  listaImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  produtoBox: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 180,
    height: 400,
    marginRight: 5,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 30,
    justifyContent: "flex-start", // conteúdo vai pro topo
    alignItems: "center", // centraliza horizontalmente
    backgroundColor: "#eee", // só pra enxergar a box
  },
});
