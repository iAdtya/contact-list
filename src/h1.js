export const TextRevealTW = () => {
  const text = "Text Reveal Animation 💫";

  return (
    <>
      <h1 className="overflow-hidden flex justify-center  text-2xl font-bold leading-6 text-[#adfa1a]">
        {text.match(/./gu)?.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      
    </>
  );
};
