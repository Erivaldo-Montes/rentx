import { useCallback, useEffect, useState } from "react";
import { FlatList, ViewToken, Dimensions } from "react-native";
import { Container, Image, ImageView } from "./styles";

interface Props {
  imagesUrl: string[];
  onBulletUpdate: (visibleItem: any) => void;
}

export function ImageSlider({ imagesUrl, onBulletUpdate }: Props) {
  const [] = useState();

  const onViewableItemsChanged = useCallback(
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      if (info.viewableItems[0] !== undefined) {
        onBulletUpdate(info.viewableItems[0].index);
      }
    },
    []
  );

  return (
    <Container>
      <FlatList
        data={imagesUrl}
        onViewableItemsChanged={onViewableItemsChanged}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        contentContainerStyle={{
          paddingEnd: 16,
          paddingStart: 16,
        }}
        renderItem={({ item }) => (
          <ImageView>
            <Image source={{ uri: item }} />
          </ImageView>
        )}
      />
    </Container>
  );
}
