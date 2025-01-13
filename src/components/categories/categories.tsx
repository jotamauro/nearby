import { FlatList } from "react-native";
import { Category } from "../category/category";
import { S } from "./categories.styles";

export type CategoriesProps = {
  name: string;
  id: string;
}[];

type Props = {
  data: CategoriesProps;
  selectedCategory: string | null;
  onSelectCategory: (id: string) => void;
};

export const Categories = ({
  data,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={S.content}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      style={S.container}
      renderItem={({ item }) => (
        <Category
          key={item.id}
          name={item.name}
          iconId={item.id}
          onPress={() => onSelectCategory(item.id)}
          isSelected={selectedCategory === item.id}
        />
      )}
    />
  );
};
