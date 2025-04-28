import Ionicons from '@expo/vector-icons/Ionicons';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type IconButtonProps = {
	onPress: () => void;
	name: React.ComponentProps<typeof Ionicons>['name'];
	size: number;
	color: string;
};

const IconButton: FC<IconButtonProps> = ({ onPress, name, size, color }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Ionicons name={name} size={size} color={color} />
		</TouchableOpacity>
	);
};

export default IconButton;
