export default function StreamingText({ text, done }: { text: string; done: boolean }) {
  return (
    <div className="whitespace-pre-wrap leading-relaxed text-sm">
      {text}
      {!done && <span className="inline-block w-1.5 h-4 align-[-2px] ml-0.5 bg-skye-accent animate-pulse" />}
    </div>
  );
}
