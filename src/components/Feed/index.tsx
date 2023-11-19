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
      const response = await axios.get("http://localhost:3000/v1/animal/feed", {
        headers: {
          Authorization: `Bearer eyJraWQiOiI5THJOTVExQ1BsWVVXMjhmUnUyalh5eFV1RGErVmlycFZMZnpxblFOd3U0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NDY4YzQ5OC05MDIxLTcwMDQtODdiOC1jOTZmNjQ4NGUxM2IiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9zRlJYOFRNMEgiLCJjbGllbnRfaWQiOiI0Z2Y2NnBzcGwwNHNjaGRrdWpkY25xMm04YiIsIm9yaWdpbl9qdGkiOiIxY2Y4YTNhYS03Y2RmLTRkNzctOWYyOS01Yzk2ODRkODEyNzkiLCJldmVudF9pZCI6IjFjNjdhYTc5LTQxNWYtNDU4ZC04MTVhLTlhY2ExN2MxMDZjNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDA0MjYxNDMsImV4cCI6MTcwMDQyOTc0MywiaWF0IjoxNzAwNDI2MTQ0LCJqdGkiOiI2YzcwODBkMi0yNjFhLTQwMDYtOGE3OS1iZmE4NGRiYzIxYzYiLCJ1c2VybmFtZSI6InZycmwifQ.E9UudyI3RPueZka-ThAi-P2EQGJWfLe0cju633-9-HERqijrdmkRHlOdKRlkjt-3axDQ_S2iElwpQOVKSWWIOXkoAZRns0wdd20Bj6ic5ksQzPOXxPqBsCR8xH7_HMe0TTTYMR_JIT3NjjOWhfwfooAo9aiI6GQs64OEvPIoFUXO4tzhLlWE8bOIxMtl4gQpTW0qrJjMl05RSmZwFBATjC89yldn2E0vkhmDqup8KDcQu2Q3FBUJ88_PnMirnx5xDCMYdHBUOnTD7qukWbx2i78PnWmMxWBQ5IW11xpsd2LcVXWBm_kh7nM_8H-V3LIDOmUnQvIoInfoGdyDaywwDw`,
        },
      });
      if (response.data.publications) setPosts(response.data.publications);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    }
    setIsLoading(false);
    console.log(posts)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex flexDir="column" gap="32px" mb="100px">
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
            authorName={x.author.username}
            authorUrl={x.author.imageUrl}
            createdAt={x.createdAt}
            imageUrl={x.animal.imageUrl}
            description={x.description}
          />
        ))
      )}
    </Flex>
  );
};
