import {
	Box,
	Button,
	HStack,
	Input,
	Text,
	Icon,
	View,
	Heading,
	ScrollView,
	FlatList,
	Image,
} from "native-base";
import React, { useState, useRef, useEffect } from "react";
import { Dimensions, RefreshControl } from "react-native";

import { Color } from "../../constants/Color";
import { Icons } from "../../components/icons";
import { Colors, categoryData } from "../../constants";
import ProductCard from "../../components/productCard";
import { productProps } from "../../types/types";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const { width } = Dimensions.get("window");
const mWidth = width / 2;

const Tabulation = () => {
	const renderItem = ({ item }) => {
		return (
			<View>
				<Text>{item.id}</Text>
				<Text>{item.name}</Text>
			</View>
		);
	};
	return (
		<View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => `${item.id}`}
				data={categoryData}
				renderItem={renderItem}
				contentContainerStyle={{
					paddingVertical: 10,
				}}
			/>
		</View>
	);
};

const HomeHeader = ({ navigation }) => {
	const [search, setSearch] = useState("");

	return (
		<HStack
			w="100%"
			space={3}
			alignItems="center"
			justifyContent={"space-between"}>
			<Icon
				size={8}
				as={<Icons.Octicons name="three-bars" color="black" />}
				onPress={() => navigation.openDrawer()}
			/>
			<Input
				placeholder="Search"
				fontSize={18}
				variant="rounded"
				w="full"
				px="4"
				maxWidth="280px"
				InputLeftElement={
					<Icon
						ml="4"
						size={7}
						color="gray.500"
						as={<Icons.EvilIcons name="search" color="black" />}
					/>
				}
				onChangeText={text => setSearch(text)}
				_focus={{ borderColor: Color.primary, backgroundColor: "gray.100" }}
			/>
		</HStack>
	);
};

const ProductList = () => {


	const renderProduct = (item: any) => {
		return <ProductCard key={item.id} {...item} />;
	};

	let productData = [
		{
			id: 1,
			name: "Product 1",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 2,
			name: "Product 2",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 3,
			name: "Product 3",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 4,
			name: "Product 4",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 5,
			name: "Product 1",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 6,
			name: "Product 2",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 7,
			name: "Product 3",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 8,
			name: "Product 4",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 9,
			name: "Product 1",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 10,
			name: "Product 2",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 11,
			name: "Product 3",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
		{
			id: 12,
			name: "Product 4",
			price: 100,
			image: "https://picsum.photos/200/300",
		},
	];



	return (
		<View style={{ flex: 1, width: width }}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingVertical: 20 }}
			>
				<FlatList
					showsVerticalScrollIndicator={false}
					// initialNumToRender={4}
					// numColumns={Math.ceil(productData.length / 2)}
					numColumns={2}
					keyExtractor={item => `${item.id}`}
					data={productData}
					renderItem={renderProduct}
					ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
					contentContainerStyle={{
						marginVertical: 10,
						alignSelf: 'flex-start',
					}}
				/>
			</ScrollView>
		</View>
	);
};

const HomeScreen = ({ navigation }) => {
	return (
		<Box flex={1} backgroundColor="#ececec" safeArea py="6" px="7">
			<HomeHeader navigation={navigation} />
			<Heading mt={30} fontSize={40} fontWeight={"bold"}>
				Order online {"\n"}collect in store
			</Heading>
			<Tabulation />
			<ProductList />
		</Box>
	);
};

export default HomeScreen;
