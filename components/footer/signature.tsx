import Github from "@/public/svg/github";

export default function Signature() {
  return (
    <>
      <a href="https://github.com/cascabeanie">
        <div className="flex items-center gap-2 p-3 hover:animate-pulse hover:cursor-pointer">
          <p className="text-sm font-thin tracking-tight text-zinc-400">
            Made by Cascabeanie
          </p>
          <div>
            <Github />
          </div>
        </div>
      </a>
    </>
  );
}
