import {
	Avatar,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPaw,
	faShieldHeart,
	faCircleExclamation,
	faEllipsis,
	faRightFromBracket,
	faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import useUserContext from "../../hooks/useUserContext";
import AnimalRescueModal from "../Modals/AnimalRegisterModal"
import AnimalRequestModal from "../Modals/AnimalRequestModal"
import AnimalReportModal from "../Modals/AnimalReportModal"
import { useDisclosure } from "@chakra-ui/hooks"

export const SideBar = () => {
	const rescueShelteredModal = useDisclosure()
	const requestShelteredModal = useDisclosure()
	const reportShelteredModal = useDisclosure()
	const { userState, logout } = useUserContext();
	return (
		<Flex flexDir="column" p="24px" pt="70px" marginLeft="auto" maxW="350px">
			<Flex gap="4px" flexDir="column" color="#5072E8">
				<Flex
					alignItems="center"
					gap="14px"
					cursor="pointer"
					fontWeight="500"
					borderRadius="15px"
					p="8px 14px"
					_hover={{ backgroundColor: "#5072E83B" }}
					onClick={rescueShelteredModal.onOpen}
				>
					<FontAwesomeIcon icon={faPaw} size="2x" />
					<Text>Registrar animal acolhido</Text>
					<AnimalRescueModal isOpen={rescueShelteredModal.isOpen} onClose={rescueShelteredModal.onClose} />
				</Flex>
				<Flex
					alignItems="center"
					gap="14px"
					cursor="pointer"
					fontWeight="500"
					borderRadius="15px"
					p="8px 14px"
					_hover={{ backgroundColor: "#5072E83B" }}
					onClick={requestShelteredModal.onOpen}
				>
					<FontAwesomeIcon icon={faShieldHeart} size="2x" />
					<Text>Solicitações de adoção</Text>
					<AnimalRequestModal isOpen={requestShelteredModal.isOpen} onClose={requestShelteredModal.onClose} />
				</Flex>
				<Flex
					alignItems="center"
					gap="14px"
					cursor="pointer"
					fontWeight="500"
					borderRadius="15px"
					p="8px 14px"
					_hover={{ backgroundColor: "#5072E83B" }}
					onClick={reportShelteredModal.onOpen}
				>
					<FontAwesomeIcon icon={faCircleExclamation} size="2x" />
					<Text>Reportar animal perdido</Text>
					<AnimalReportModal isOpen={reportShelteredModal.isOpen} onClose={reportShelteredModal.onClose} />
				</Flex>
			</Flex>

			<Menu>
				<MenuButton aria-label="Options">
					<Flex
						cursor="pointer"
						mt="64px"
						alignItems="center"
						justifyContent="space-between"
						borderRadius="15px"
						p="8px 14px"
						_hover={{ backgroundColor: "#5072E83B" }}
					>
						<Flex alignItems="center" gap="14px">
							<Avatar
								src={userState.imageUrl}
								name={userState.username}
								size="md"
								borderWidth="2px"
								borderColor="#5072E8"
							/>
							<Text fontSize="18px" color="#5072E8" fontWeight="600">
								{userState.username || "Desconhecido"}
							</Text>
						</Flex>
						<FontAwesomeIcon icon={faEllipsis} size="2x" color="#5072E8" />
					</Flex>
				</MenuButton>
				<MenuList borderRadius="15px" p="0">
					<MenuItem
						icon={
							<FontAwesomeIcon icon={faCircleInfo} size="2x" color="#5072E8" />
						}
						borderRadius="15px 15px 0 0"
						p="12px"
						color="#5072E8"
						fontWeight="500"
					>
						Ajuda
					</MenuItem>
					<MenuItem
						icon={
							<FontAwesomeIcon
								icon={faRightFromBracket}
								size="2x"
								color="#fff"
							/>
						}
						backgroundColor="#f44a4a"
						borderRadius="0 0 15px 15px"
						p="12px"
						color="#fff"
						fontWeight="500"
						_hover={{ backgroundColor: "#d02020" }}
						onClick={logout}
					>
						Sair
					</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};
