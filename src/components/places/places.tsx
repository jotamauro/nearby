import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place/place";
import { S } from "./places.styles";

type Props = {
  data: PlaceProps[];
};

export const Places = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  const showMarketDetails = () => {
    console.log("showMarketDetails");
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={S.indicator}
      backgroundStyle={S.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={S.content}
        ListHeaderComponent={() => (
          <Text style={S.title}>Explore locais perto de você</Text>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </BottomSheet>
  );
};
