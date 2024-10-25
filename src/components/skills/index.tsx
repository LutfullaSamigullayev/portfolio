import { Icons } from "@/Icons/Icons";
import { SkillCard } from "./components";

export const Skills = () => {
  const skillsItems = [
    { title: "Adobe Photoshop", icon: <Icons.photoshop />, rating: 4 },
    { title: "Adobe Illustrator", icon: <Icons.illustrator />, rating: 3 },
    { title: "Adobe   After Effects", icon: <Icons.effects />, rating: 4 },
    { title: "Figma", icon: <Icons.figma />, rating: 4 },
  ];

  return (
    <div id="skills" className="containerUz section ">
      <h1 className="title">Skills</h1>
      <p className="py-16">I work in such programs as</p>
      <div className="flex justify-between items-end flex-wrap gap-y-14 gap-x-6 mx-auto max-[375px]:justify-center">
        {skillsItems.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};
