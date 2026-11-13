import "./team.css";

type Profile = {
  role: string;
  description: string;
  name?: string;
  photo?: string;
};

const leadership: Profile[] = [
  { role: "Presidência", description: "Define prioridades e representa a liga institucionalmente." },
  { role: "Vice-presidência", description: "Apoia a presidência e articula o trabalho entre as áreas." },
];

const directors: Profile[] = [
  { role: "Diretoria de Tech & Quant", description: "Coordena estudos quantitativos e o uso de tecnologia aplicada a finanças." },
  { role: "Diretoria de Processos e Projetos", description: "Organiza os processos internos e acompanha a execução dos projetos da liga." },
  { role: "Diretoria de Comunicação", description: "Coordena a comunicação da liga e o compartilhamento das suas atividades." },
  { role: "Diretoria de Marketing", description: "Cuida do posicionamento da liga e da divulgação das suas iniciativas." },
];

const alumni: Profile[] = [
  { role: "Ex-membro", description: "Espaço para registrar a área, o período e as contribuições à liga." },
];

function ProfileList({ profiles }: { profiles: Profile[] }) {
  return (
    <ul className="profile-grid">
      {profiles.map((profile) => (
        <li key={profile.role}>
          {profile.photo ? (
            <img className="profile-photo" src={profile.photo} alt="" width={112} height={112} />
          ) : (
            <div className="profile-photo" aria-hidden="true" />
          )}
          <p className="profile-name">{profile.name || <span aria-hidden="true" className="profile-name-slot" />}</p>
          <h4>{profile.role}</h4>
          <p>{profile.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Team() {
  return (
    <>
      <section id="membros" className="section team" aria-labelledby="membros-title">
        <h2 id="membros-title">Membros</h2>
        <h3>Presidência e vice-presidência</h3>
        <ProfileList profiles={leadership} />
        <h3>Diretorias</h3>
        <ProfileList profiles={directors} />
      </section>
      <section id="alumni" className="section alumni" aria-labelledby="alumni-title">
        <h2 id="alumni-title">Alumni</h2>
        <p>Ex-membros que contribuíram para a trajetória da CIMATEC Finance.</p>
        <ProfileList profiles={alumni} />
      </section>
    </>
  );
}
