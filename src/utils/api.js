import axios from "axios";

export async function fetchFromDeepSeek(messages) {
  const DEEPSEEK_URL = import.meta.env.VITE_REACT_APP_DEEPSEEK_URL;
  const DEEPSEEK_API_KEY = import.meta.env.VITE_REACT_APP_DEEPSEEK_API_KEY;

  try {
    const response = await axios.post(
     DEEPSEEK_URL,
      {
        model: "deepseek/deepseek-r1-0528:free",
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data?.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error("DeepSeek API Error:", error.response?.data || error.message);
    console.log(error);
    
    return null;
  }
}
