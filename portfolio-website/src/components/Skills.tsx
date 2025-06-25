export default function Skills() {
  const skills = [
    "JavaScript", "React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Zod",
    "Tailwind CSS", "Git & GitHub", "Cloudflare Pages", "Railway", "HTML", "CSS"
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-gray-800 px-4 py-2 rounded text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
