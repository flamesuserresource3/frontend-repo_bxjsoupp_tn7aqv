import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'FastAPI Microservices',
    description:
      'A production-ready microservices stack with FastAPI, auth, rate limiting, and observability.',
    tags: ['Python', 'FastAPI', 'Docker', 'Redis'],
    link: '#',
    repo: '#',
  },
  {
    title: 'ML Pipeline Orchestrator',
    description:
      'End-to-end ML pipeline using scikit-learn, Airflow DAGs, and model registry with CI/CD.',
    tags: ['Python', 'ML', 'Airflow', 'MLOps'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Data Dashboard',
    description:
      'Streaming data ingestion with Kafka + analytics API and a blazing-fast dashboard.',
    tags: ['Python', 'Kafka', 'WebSockets', 'Postgres'],
    link: '#',
    repo: '#',
  },
];

function ProjectCard({ project, index }) {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 6; // tilt left/right
    const rotateX = -((y - midY) / midY) * 6; // tilt up/down
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      className="group"
    >
      <div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/20 to-cyan-400/10" />
        <div className="relative z-10" style={{ transform: 'translateZ(24px)' }}>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-white/70">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.link}
              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              <ExternalLink size={16} /> Live
            </a>
            <a
              href={project.repo}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm text-white hover:bg-white/10 transition"
            >
              <Code size={16} /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-[90%] rounded-b-[50%] bg-gradient-to-b from-cyan-400/10 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto w-[92%] md:w-[86%] lg:w-[74%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-2 text-white/70 max-w-2xl"
        >
          A selection of work spanning backend systems, machine learning, and real-time data.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
