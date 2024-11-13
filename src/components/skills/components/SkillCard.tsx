import { SkillItems } from "@/types";

export const SkillCard = ({ title, icon, rating }: SkillItems) => {
  return (
    <div className="max-w-40 min-h-48 flex flex-col items-center gap-y-1 justify-between">
      <div>{icon}</div>
      <h3 className="min-w-20 font-gilroy-bold text-sm text-grey">{title}</h3>
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            className={`text-3xl px-1 ${
              index < rating
                ? "text-black dark:text-white"
                : "text-gray-300 dark:text-gray-600"
            }`}
            key={index}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};
