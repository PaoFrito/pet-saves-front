import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  Text,
  Img,
  Avatar,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { AnimalsToRequest } from "../../../model/AnimalsToRequest";
import useUserContext from "../../../hooks/useUserContext";

const AnimalReqestModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { userState } = useUserContext();

  const [animalList, setAnimalList] = useState<AnimalsToRequest[]>([]);

  const fetchAnimalListData = () => {
    axios
      .get(`${import.meta.env.VITE_BASE_API_URL}/v1/animal/adoption-requests`, {
        headers: {
          Authorization: userState.accessToken,
        },
      })
      .then((res) => {
        setAnimalList(res.data.filter((x) => x.animal.status === "sheltered"));
      });
  };

  useEffect(() => {
    fetchAnimalListData();
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent maxW="1000px">
          <ModalHeader fontSize="24px" color="#5072E8" justifyContent="center">
            <Flex align="center" gap="24px">
              <FontAwesomeIcon icon={faShieldHeart} size="2x" /> Solicitações
              adoção
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {animalList.map((animal: any) => (
              <>
                <Flex direction="row" gap="16px" padding="16px">
                  <Flex direction="column" w="40%" gap="8px">
                    <Text fontSize="16px" color="#5072E8" fontWeight="500">
                      {animal.animal.name}
                    </Text>
                    <Img
                      src={animal.animal.imageUrl}
                      h="200px"
                      borderRadius="12px"
                    />
                  </Flex>
                  <Flex direction="column" w="60%" gap="8px">
                    <Text fontSize="16px" color="#5072E8">
                      Pessoas interessadas
                    </Text>
                    <Flex direction="row" gap="8px" wrap="wrap">
                      {animal.requests.map((requester: any) => (
                        <Tooltip
                          label={requester.username}
                          hasArrow
                          borderRadius="5px"
                          textTransform="capitalize"
                        >
                          <Avatar
                            src={requester.imageUrl}
                            name={requester.username}
                            w="50px"
                            h="50px"
                          />
                        </Tooltip>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
              </>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AnimalReqestModal;
