export default function ChatMessage({ text, isUser, isLoading }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-lg px-4 py-2 text-sm whitespace-pre-line shadow ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        } ${isLoading ? "animate-pulse" : ""}`}
        style={{ maxWidth: "75%", wordBreak: "break-word" }}
      >
        {text}
      </div>
    </div>
  );
}
