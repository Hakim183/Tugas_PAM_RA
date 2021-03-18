import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <StatusBar
            animated
            barStyle="dark-content"
            backgroundColor="transparent"
          />
            <ImageBackground
              source={{
                uri:
                  "https://i.pinimg.com/564x/98/3e/1f/983e1f403d53172ceb3cbaf2b14c948b.jpg",
              }}
              style={styles.image}>
          <View style={styles.container}>
              <Text style={styles.title}>
                Apple-Samsung Bersaing soal Kecepatan Ponsel 5G
              </Text>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri:
                    "https://akcdn.detik.net.id/visual/2020/10/14/ilustrasi-5g_169.png?w=650",
                }}
              />
              <Text style={styles.description}>
                Jakarta, CNN Indonesia -- Opensignal melaporkan Samsung
                mendominasi jajaran smartphone 5G tercepat di Amerika Serikat
                (AS). {"\n"}
                {"\t"}Berdasarkan hasil pengetesan, 60 persen dari 25 ponsel
                yang diuji merupakan produk Samsung.{"\n"}
                Samsung Galaxy S21 5G yang baru diluncurkan memiliki kecepatan
                unduh rata-rata tertinggi 56,0 Mbps, meskipun secara statistik
                sama dengan TCL Revvl 5G. Dua model S21 lainnya juga masuk dalam
                10 besar.{"\n"}
                {"\n"}
                Dengan hasil itu, Opensignal memprediksi model smartphone
                high-end Samsung mendatang bakal menggunakan modem dan chipset
                yang sama. Samsung S21 diketahui ditenagai oleh chipset Qualcomm
                Snapdragon 888.{"\n"}
                {"\t"}Ketika membandingkan lima merek ponsel pintar terbesar di
                AS, Opensignal melihat pengguna Apple memiliki peningkatan
                kecepatan unduh terbesar. Di area di mana 5G tersedia, pengguna
                Apple memiliki kecepatan unduh secara keseluruhan 2,3 kali lebih
                cepat daripada kecepatan unduh 4G.{"\n"}
                Di antara merek lain yang dianalisis, perbedaannya berkisar dari
                1,7 kali untuk pengguna LG, hingga 1,4 kali untuk pengguna
                OnePlus dan Google.{"\n"}
                {"\n"}
                Berdasarkan koleksi data pada 11 November 202 hingga 26 Februari
                2021, rata-rata kecepatan unduh produk Apple berbasis 5G sebesar
                44,5 Mbps, LG 47,9 Mbps, Samsung 54 Mbps, OnePlus 53,1 Mbps, dan
                Google 52,2 Mbps.{"\n"}
                {"\n"}
                {"\t"}Di area di mana 5G tersedia, pengguna Apple melihat
                kecepatan unduh sekitar 18,9 persen lebih lambat daripada merek
                Samsung. Untuk kecepatan unduhan 4G, pengguna OnePlus dan Google
                mengalami kecepatan dua kali lebih cepat dari pengguna Apple.
                {"\n"}
                {"\n"}
                Adapun model dari setiap pabrikan yang memiliki kecepatan
                terbaik, yakni Samsung S21 5G (56 Mbps), TCL Revvl 5G (49,8
                Mbps), Motorola Razr 5G (44 Mbps), OnePlus 8 Pro (43,8 Mbps), LG
                V60 ThinQ (42,9 Mbps), Google Pixel (41,1 Mbps), dan iPhone 12
                Pro (36,9 Mbps).
              </Text>
            </View>
            <View style={styles.comment}>
              <Text>Komentar Pembaca</Text>
              <TextInput
                placeholder="Add a comment..."
                style={styles.textInput}
                />
              <Button title="Kirim" onPress={() => Alert.alert("Terimakasih telah berkunjung dan memberikan komentar.")} />
          </View>
                </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderTopColor: "#b3b3b3",
    borderTopWidth: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  tinyLogo: {
    flex: 1,
    width: 320,
    height: 220,
    resizeMode: "stretch",
  },
  description: {
    color: "black",
    fontSize: 17,
    marginTop: 20,
    textAlign: "justify",
    margin: 1,
  },
  comment: {
    borderColor: "#b3b3b3",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 15,
    marginTop: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    height: 50,
    borderColor: "#000000",
    borderBottomWidth: 3,
    marginBottom: 36,
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default App;
