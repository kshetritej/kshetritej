const Skills = () => {
  const designSkills = ["Figma", "Penpot", "Adobe Photoshop", "Coreldraw"];
  const frontend = ["Javascript", "ReactJs", "CSS3", "TailwindCSS", "Shadcn"];
  const backend = ["NodeJs", "PostgreSQL", "ExpressJs", "TypeORM"];
  const others = ["Git", "Linux", "Docker"];
  const softSkills = ["Teamwork", "Problem Solving", "Communication","Resilience","Critical Thinking"]

  return (
    <div className="py-9">
      <h1 className="text-4xl sm:text-6xl font-bold">
        Skills<span className="text-purple-600">.</span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-3 sm:text-2xl  justify-between">
        <div className="design py-4 ">
          <h1 className="font-bold">Design</h1>
          <ul>
            {designSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="frontend py-4">
          <h1 className="font-bold">Frontend</h1>
          <ul>
            {frontend.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="backend py-4">
          <h1 className="font-bold">Backend</h1>
          <ul>
            {backend.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="others py-4">
          <h1 className="font-bold">Others</h1>
          <ul>
            {others.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>


        <div className="soft-skills py-4">
          <h1 className="font-bold">Soft SKills</h1>
          <ul>
            {softSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
