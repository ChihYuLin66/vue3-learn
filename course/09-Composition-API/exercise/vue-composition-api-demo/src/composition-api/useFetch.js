import axios from "axios";
import { ref, reactive } from "vue";

export function Fetch(apiUrl) {
  const isLoaded = ref(false);
  const images = reactive({ data: [] });
  const errorMessage = ref("");
  axios
    .get(apiUrl)
    .then((response) => {
      isLoaded.value = true;
      images.data = response.data;
    })
    .catch((error) => {
      console.dir(error.message);

      errorMessage.value = error.message;
    });

  return {
    isLoaded,
    images,
    errorMessage,
  };
}
