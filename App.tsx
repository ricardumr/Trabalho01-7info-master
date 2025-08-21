import { TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  
} from "react-native";

import Modal from "react-native-modal";
import { useState } from "react";

export default function App() {
  const viagens = [
    {
      id: 1,
      
      local: "Maldivas",
      sobre:
        "As Maldivas são um arquipélago paradisíaco localizado no Oceano Índico, formado por mais de 1.000 ilhas, conhecidas por suas praias de areia branca, mar cristalino e recifes de corais coloridos. O clima é tropical, com temperaturas quentes o ano todo, tornando o destino perfeito para quem busca relaxamento e contato com a natureza. As ilhas oferecem resorts luxuosos sobre a água, atividades como mergulho e snorkel, além de uma paisagem de pôr do sol deslumbrante. É um lugar que combina tranquilidade, beleza natural e experiências únicas.",
        
    },

    {
      id: 2,
      
      local: "Indonésia",
      sobre:
        "A Indonésia é um país formado por milhares de ilhas no sudeste asiático, conhecido por suas praias tropicais, templos históricos e vulcões imponentes. Destinos como Bali e Java combinam cultura vibrante, paisagens naturais deslumbrantes e uma rica gastronomia, atraindo visitantes do mundo todo.",
        
    },

    {
      id: 3,
      
      local: "Filipinas",
      sobre:
        "As Filipinas são um arquipélago de mais de 7 mil ilhas com praias paradisíacas, águas azul-turquesa e recifes de corais incríveis. É um destino perfeito para mergulho, esportes aquáticos e contato com a natureza, além de contar com a calorosa hospitalidade do povo filipino.",
        
    },

    {
      id: 4,
      
      local: "Bahamas",
      sobre:
        "As Bahamas são um conjunto de ilhas no Caribe, famosas por suas praias de areia branca e rosa, mar cristalino e vida marinha abundante. Com clima ensolarado quase o ano inteiro, é um destino ideal para quem busca relaxar e aproveitar atividades como mergulho e passeios de barco.",
      
    },
  ];
  const [sobre,setSobre] = useState('');
  const [imagem,setImagem] = useState('');
  const [favoritos,setFavoritos] = useState('');

  const [visivel, setVisivel] = useState(false);
  const [fav, setFav] = useState(false);



     const [visivel5, setVisivel5] = useState(false);

  const trocar5 = () => {
    setVisivel5(!visivel5);
  };



  const trocar = (idx) => {
    setSobre(viagens[idx].sobre);
    
    setVisivel(!visivel);    
  };

  const trocarFav = (idx) => {
    setFavoritos(viagens[idx].favoritos);
    setFav(!fav);    
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxMain}>
        <View style={styles.row}>
              <Image style={styles.logo} source={require("./assets/logo.png")}/>
              <Text style={styles.titulo}>Reservas aereas</Text>
              <TouchableOpacity style={styles.cadastro} onPress={trocar5}>
                  <Text style={styles.textocad}>Cadastro</Text>
              </TouchableOpacity>
        </View>
        <Modal style={styles.modalcad} isVisible={visivel5}>
      <Text style={styles.titulo}>Preencha os dados</Text>      
      <View style={styles.row}>
  

        <TextInput
      style={styles.textInput} 
      placeholder="Digite seu nome"
      label="Nome"/>  
      </View>

      <View style={styles.row}>
  
        <TextInput 
      style={styles.textInput}
      placeholder="Digite seu email"
      label="Email"/>  

      </View>
      <View style={styles.row}>
  
        <TextInput 
      style={styles.textInput}
      placeholder="Digite seu senha"
      label="Senha"/>  

      </View>
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
              <Text style={styles.tituloBox}>Maldivas</Text>
              <View style={styles.opcoes}>
              <TouchableOpacity style={styles.botao} onPress={() => trocar(0)}>
                <Text style={styles.texto}>Detalhes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={() => trocarFav(0)}>
                <Text style={styles.texto}>Favoritos</Text>
              </TouchableOpacity>
              </View>
            </View>

            <View style={styles.produtoBox}>
              <Image
                style={styles.image}
                source={require("./assets/filipinas.jpg")}
              />
              <Text style={styles.tituloBox}>Indonesia</Text>

              <TouchableOpacity style={styles.botao} onPress={() => trocar(1)}>
                <Text style={styles.texto}>Detalhes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={() => trocarFav(1)}>
                <Text style={styles.texto}>Favoritos</Text>
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
                <Text style={styles.tituloBox}>Filipinas</Text>

                <TouchableOpacity style={styles.botao} onPress={() => trocar(2)}>
                  <Text style={styles.texto}>Detalhes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => trocarFav(2)}>
                  <Text style={styles.texto}>Favoritos</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.produtoBox}>
              <Image
                style={styles.image}
                source={require("./assets/bahamas.jpg")}
              />
              <Text style={styles.tituloBox}>bahamas</Text>

              <TouchableOpacity style={styles.botao} onPress={() => trocar(3)}>
                <Text style={styles.texto}>Detalhes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao} onPress={() => trocarFav(3)}>
                <Text style={styles.texto}>favoritos</Text>
              </TouchableOpacity>
            </View>
          </View>

        
        </View>
      </View>

      <Modal
        isVisible={visivel}
        style={styles.modal}
        animationIn={"fadeIn"}
        animationInTiming={200}
        animationOut={"fadeOut"}
        backdropColor="#black" //muda a cor de tras do model
        backdropOpacity={0.8} //muda a opacidade da cor de tras do model
      >
        <View style={styles.listaItem}>
          
          <View>
            <Text style={styles.texto}>Sobre: {sobre} </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.botao} onPress={() => trocar(1)}>
          <Text style={styles.texto}>Fechar modal</Text>
        </TouchableOpacity>
      </Modal>
            <Modal
        isVisible={fav}
        style={styles.modalFav}
        animationIn={"fadeIn"}
        animationInTiming={200}
        animationOut={"fadeOut"}
        backdropColor="#black" //muda a cor de tras do model
        backdropOpacity={0.5} //muda a opacidade da cor de tras do model
      >
        <View>
          <Text style={styles.textoFav}>Viagem adicionada as favoritas!</Text>
          <TouchableOpacity style={styles.botao} onPress={() => trocarFav(0)}>
          <Text >Ok</Text>
        </TouchableOpacity>
        </View>
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
    backgroundColor: "#2A9D8F",
    width: "80%",
    marginTop: 100,
    marginBottom: 200,
    marginLeft: "10%",
    marginRight: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 5,
    borderRadius: 20,
  },
  modalcad:{
    backgroundColor: "#2A9D8F",
    width: "80%",
    marginTop: 100,
    marginBottom: 200,
    marginLeft: "10%",
    marginRight: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 5,
    borderRadius: 20,
  },
  textocad:{
    color:"white"
  },

  modalFav:{
        backgroundColor: "#55acd1ff",
    width: "60%",
    marginTop: 100,
    marginBottom: 200,
    marginLeft: "20%",
    marginRight: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 5,
    borderRadius: 20,
  },


  botao: {
    backgroundColor: "#F1FAEE",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  cadastro:{
    flex:1,
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    alignItems:"center"
  },
  

  texto: {
    color: "black",
    
  },

  titulo: {
    flex:1,
    fontSize: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: 50
  },

  tituloBox:{
    color:"white",
    fontSize:20,
    marginBottom:20
  },
  textoFav:{
    fontSize:15,
    marginBottom:20
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
    flex:1,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"stretch"
  },
  opcoes:{
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  listaImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  produtoBox: {
    backgroundColor: "#264653",
    padding: 20,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 180,
    height: 350,
    marginRight: 5,
  },
  textInput:{
    marginBottom:10,
    width:250,
    padding:5

  },
  logo:{
    flex:1,
    width: 50,
    height: 50,
    alignItems:"center",
    justifyContent:"center"
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: "flex-start", // conteúdo vai pro topo
    alignItems: "center", // centraliza horizontalmente
    backgroundColor: "#eee", // só pra enxergar a box
  },
});


