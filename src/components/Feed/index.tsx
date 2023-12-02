import { Flex } from "@chakra-ui/react";
import useUserContext from "../../hooks/useUserContext";
import { Post } from "./post";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostSkeleton } from "./post-skeleton";
import { Post as PostModel } from "@/model/post";

export const Feed = () => {
  const { userState } = useUserContext();

  const [posts, setPosts] = useState<PostModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/v1/animal/feed`, {
        headers: {
          Authorization: userState.accessToken,
        },
      });
      if (response.data.publications) setPosts(response.data.publications);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex flexDir="column" gap="40px" mb="100px">
      {isLoading ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : (
        posts.map((x) => (
          <Post
            animalAge={x.animal.ageInMonths}
            animalId={x.animal.id}
            animalName={x.animal.name}
            animalSize={x.animal.size}
            animalType={x.animal.type}
            animalStatus={x.animal.status}
            authorName={x.author.username}
            authorId={x.author.id}
            authorUrl={x.author.imageUrl}
            createdAt={x.createdAt}
            imageUrl={x.animal.imageUrl}
            description={x.description}
            alreadyRequested={x.alreadyRequested}
            lastLocation={x.animal.lastLocation}
          />
        ))
      )}
    </Flex>
  );
};
