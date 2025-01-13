import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place/place";
import { Places } from "@/components/places/places";

import { api } from "@/services/api";
import { Services } from "@/services/services.types";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import * as Location from "expo-location";
import { router } from "expo-router";
import MapView, { Callout, Marker } from "react-native-maps";

type MarketProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

const currentLocation = {
  latitude: -23.5505199,
  longitude: -46.6333094,
};

const Home = () => {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const { data } = await api.get(Services.categories);
      setCategories(data);
      setSelectedCategory(data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlaces = async () => {
    try {
      if (!selectedCategory) {
        return;
      }
      const { data } = await api.get("/markets/category/" + selectedCategory);

      setMarkets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPlaces();
  }, [selectedCategory]);

  useEffect(() => {
    async function getCurrentLocation() {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando...</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CECECE",
      }}
    >
      <Text>Home</Text>
      <Categories
        data={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <MapView
        style={{ flex: 1, width: "100%" }}
        initialRegion={{
          latitude: location?.coords.latitude || currentLocation.latitude,
          longitude: location?.coords.longitude || currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          image={require("@/assets/location.png")}
          identifier="current"
          coordinate={{
            latitude: location?.coords.latitude || currentLocation.latitude,
            longitude: location?.coords.longitude || currentLocation.longitude,
          }}
        />
        {markets.map((market) => (
          <Marker
            key={market.id}
            title={market.name}
            description={market.description}
            coordinate={{
              latitude: market.latitude,
              longitude: market.longitude,
            }}
            image={require("@/assets/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/market/${market.id}`)}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {market.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {market.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  );
};

export default Home;
