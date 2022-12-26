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
} from 'native-base';
import * as React from 'react';
import { useState } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Color } from '../../constants/Color';

const HomeScreen = ({ navigation }) => {
	return (
		<Box flex={1} backgroundColor="#ececec" safeArea py="6" px="7">
			<HomeHeader navigation={navigation} />
			<Heading mt={30} fontSize={40} fontWeight={'bold'}>
				Order online {'\n'}collect in store
			</Heading>
			<Tabulation />
		</Box>
	);
};

const Tabulation = () => {
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} px={5}>
			{/* <HStack space={4}> */}
			<Button h={20} w={100} mx={3}>
				hello
			</Button>
			<Button h={20} w={100} mx={3}>
				hello
			</Button>
			<Button h={20} w={100} mx={3}>
				hello
			</Button>
			<Button h={20} w={100} mx={3}>
				hello
			</Button>
			<Button h={20} w={100} mx={3}>
				hello
			</Button>
			<Button h={20} w={100} mx={3}>
				hello
			</Button>
			<Button h={20} w={100} mx={3}>
				hello
			</Button>
			{/* </HStack> */}
		</ScrollView>
	);
};

const HomeHeader = ({ navigation }) => {
	const [search, setSearch] = useState('');

	return (
		<HStack
			w="100%"
			space={3}
			alignItems="center"
			justifyContent={'space-between'}>
			<Icon
				size={8}
				as={<Octicons name="three-bars" color="black" />}
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
						as={<EvilIcons name="search" color="black" />}
					/>
				}
				onChangeText={text => setSearch(text)}
				_focus={{ borderColor: Color.primary, backgroundColor: 'gray.100' }}
			/>
		</HStack>
	);
};

export default HomeScreen;
