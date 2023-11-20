import useUserContext from "../../hooks/useUserContext";
import { Avatar, Button, Flex, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import { useState } from "react";

interface PostProps {
  createdAt: number;
  authorUrl: string;
  authorName: string;
  authorId: string;
  animalName: string;
  animalSize: string;
  animalType: string;
  animalStatus: string;
  animalAge?: number;
  animalId: string;
  description?: string;
  imageUrl: string;
  alreadyRequested: boolean;
}

export const Post = ({
  createdAt,
  authorUrl,
  authorName,
  authorId,
  animalName,
  animalSize,
  animalType,
  animalAge,
  animalId,
  description,
  imageUrl,
  alreadyRequested,
  animalStatus,
}: PostProps) => {
  const { userState } = useUserContext();

  const [isLoading, setIsLoading] = useState(false);
  const [isRequested, setIsRequested] = useState(alreadyRequested);

  const getDays = (unix: number) => {
    const date = moment.unix(unix);
    const now = moment();
    const minutes = now.diff(date, "minutes");
    const hours = now.diff(date, "hours");
    const days = now.diff(date, "days");

    if (minutes < 1) return "Agora";
    if (hours < 1) return now.diff(date, "minutes") + "m";
    if (days < 1) return now.diff(date, "hours") + "h";
    return days + "d";
  };

  const translateSize = (size: string) => {
    switch (size) {
      case "small":
        return "Pequeno";
      case "medium":
        return "";
      case "big":
        return "Grande";
      default:
        break;
    }
  };

  const translateType = (type: string) => {
    switch (type) {
      case "cat":
        return "Gato";
      case "dog":
        return "Cachorro";
      default:
        break;
    }
  };

  const requestAdoption = async () => {
    try {
      setIsLoading(true);
      const url = `${
        import.meta.env.VITE_BASE_API_URL
      }/v1/animal/${animalId}/request-adoption`;
      const response = await axios.post(url, undefined, {
        headers: {
          Authorization: userState.accessToken,
        },
      });
      if (response.status === 201) setIsRequested(true);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <Flex flexDir="column" w="100%" px="22px" gap="6px">
      <Flex justifyContent="space-between">
        <Flex alignItems="center" gap="8px">
          <Avatar
            src={authorUrl}
            name={authorName}
            size="md"
            borderWidth="2px"
            borderColor="#5072E8"
          />
          <Flex flexDir="column">
            <Flex alignItems="center" gap="6px">
              <Text fontSize="16px" color="#5072E8" fontWeight="600">
                {authorName || "Desconhecido"}
              </Text>
              <Text fontSize="14px" color="#585858">
                • {getDays(createdAt)}
              </Text>
            </Flex>
            <Text fontWeight="400" fontSize="14px">
              Protetor
            </Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" textAlign="right">
          <Text fontSize="16px" fontWeight="500">
            {translateSize(animalSize)} {translateType(animalType)}{" "}
            {animalStatus === "lost" ? "Perdido" : animalName}
          </Text>
          <Flex fontSize="14px" gap="3px" marginLeft="auto">
            <Text>{animalAge ? `${animalAge} semanas de idade •` : ""} </Text>
            <Button
              fontSize="14px"
              isDisabled={isLoading || isRequested || userState.id === authorId}
              isLoading={isLoading}
              loadingText="Solicitando"
              backgroundColor="transparent"
              p="6px"
              h="20px"
              color="#5072E8"
              fontWeight="500"
              cursor="pointer"
              textAlign="right"
              onClick={requestAdoption}
            >
              {userState.id === authorId ? 'Seu animal registrado' : (isRequested ? "Solicitado" : "Solicitar Adoção")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Img w="100%" h="428px" borderRadius="4px" src={imageUrl} />
      <Flex flexDir="column">
        <Flex>
          <Text fontSize="15px">
            <Text as="b" fontWeight="600" fontSize="16px" mr="5px">
              {authorName}
            </Text>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
