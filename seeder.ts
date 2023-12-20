import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedColleges() {
	const collegesData = [
		{ shortName: 'UFRJ', fullName: 'Universidade Federal do Rio de Janeiro' },
		{ shortName: 'UFMG', fullName: 'Universidade Federal de Minas Gerais' },
		{ shortName: 'USP', fullName: 'Universidade de São Paulo' },
		{ shortName: 'UNB', fullName: 'Universidade de Brasília' },
		{ shortName: 'UFPR', fullName: 'Universidade Federal do Paraná' },
		{ shortName: 'UFRGS', fullName: 'Universidade Federal do Rio Grande do Sul' },
		{ shortName: 'UNESP', fullName: 'Universidade Estadual Paulista' },
		{ shortName: 'PUC-RJ', fullName: 'Pontifícia Universidade Católica do Rio de Janeiro' },
		{ shortName: 'PUC-SP', fullName: 'Pontifícia Universidade Católica de São Paulo' },
		{ shortName: 'UNIFESP', fullName: 'Universidade Federal de São Paulo' },
		{ shortName: 'UFF', fullName: 'Universidade Federal Fluminense' },
		{ shortName: 'UFSC', fullName: 'Universidade Federal de Santa Catarina' },
		{ shortName: 'UFC', fullName: 'Universidade Federal do Ceará' },
		{ shortName: 'UFSM', fullName: 'Universidade Federal de Santa Maria' },
		{ shortName: 'UFG', fullName: 'Universidade Federal de Goiás' },
		{ shortName: 'UFPE', fullName: 'Universidade Federal de Pernambuco' },
		{ shortName: 'UFBA', fullName: 'Universidade Federal da Bahia' },
		{ shortName: 'UFRN', fullName: 'Universidade Federal do Rio Grande do Norte' },
		{ shortName: 'UNICAMP', fullName: 'Universidade Estadual de Campinas' },
		{ shortName: 'ITA', fullName: 'Instituto Tecnológico de Aeronáutica' },
		{ shortName: 'MACKENZIE', fullName: 'Universidade Presbiteriana Mackenzie' },
		{ shortName: 'FGV', fullName: 'Fundação Getúlio Vargas' },
		{ shortName: 'UFV', fullName: 'Universidade Federal de Viçosa' },
		{ shortName: 'UFTM', fullName: 'Universidade Federal do Triângulo Mineiro' },
		{ shortName: 'UEL', fullName: 'Universidade Estadual de Londrina' },
		{ shortName: 'UFS', fullName: 'Universidade Federal de Sergipe' },
		{ shortName: 'UFES', fullName: 'Universidade Federal do Espírito Santo' },
		{ shortName: 'UFPA', fullName: 'Universidade Federal do Pará' },
		{ shortName: 'UEM', fullName: 'Universidade Estadual de Maringá' },
		{ shortName: 'UFT', fullName: 'Universidade Federal do Tocantins' },
		{ shortName: 'UNIRIO', fullName: 'Universidade Federal do Estado do Rio de Janeiro' },
	]

	for (const college of collegesData) {
		await prisma.college.create({ data: college })
	}

	console.log('Colleges seeded successfully.')
}

async function seedCourses() {
	const coursesData = [
		{ name: 'Administração de Empresas' },
		{ name: 'Arquitetura e Urbanismo' },
		{ name: 'Biologia' },
		{ name: 'Ciências Biomédicas' },
		{ name: 'Ciências da Computação' },
		{ name: 'Direito' },
		{ name: 'Design Gráfico' },
		{ name: 'Economia' },
		{ name: 'Engenharia Civil' },
		{ name: 'Engenharia de Computação' },
		{ name: 'Farmácia' },
		{ name: 'Filosofia' },
		{ name: 'Física' },
		{ name: 'Geografia' },
		{ name: 'História' },
		{ name: 'Letras' },
		{ name: 'Matemática' },
		{ name: 'Medicina' },
		{ name: 'Nutrição' },
		{ name: 'Odontologia' },
		{ name: 'Pedagogia' },
		{ name: 'Psicologia' },
		{ name: 'Química' },
		{ name: 'Radiologia' },
		{ name: 'Relações Internacionais' },
		{ name: 'Sociologia' },
		{ name: 'Teatro' },
		{ name: 'Turismo' },
		{ name: 'Zootecnia' },
		{ name: 'Administração Pública' },
		{ name: 'Artes Visuais' },
		{ name: 'Biblioteconomia' },
		{ name: 'Bioquímica' },
		{ name: 'Ciência da Informação' },
		{ name: 'Ciências Contábeis' },
		{ name: 'Comércio Exterior' },
		{ name: 'Dança' },
		{ name: 'Engenharia de Alimentos' },
		{ name: 'Engenharia Elétrica' },
		{ name: 'Estatística' },
		{ name: 'Farmácia Bioquímica' },
		{ name: 'Fisioterapia' },
		{ name: 'Gastronomia' },
		{ name: 'Gestão de Recursos Humanos' },
		{ name: 'Jornalismo' },
		{ name: 'Linguística' },
		{ name: 'Marketing' },
		{ name: 'Meteorologia' },
		{ name: 'Música' },
		{ name: 'Publicidade e Propaganda' },
		{ name: 'Química Industrial' },
		{ name: 'Redes de Computadores' },
		{ name: 'Serviço Social' }
	]

	for (const course of coursesData) {
		await prisma.course.create({ data: course })
	}

	console.log('Courses seeded successfully.')
}

async function seedProfession() {
	const professionData = [
		{ name: 'Engenheiro de Software' },
		{ name: 'Advogado' },
		{ name: 'Médico' },
		{ name: 'Arquiteto' },
		{ name: 'Professor de Matemática' },
		{ name: 'Designer Gráfico' },
		{ name: 'Contador' },
		{ name: 'Enfermeiro' },
		{ name: 'Analista de Sistemas' },
		{ name: 'Psicólogo' },
		{ name: 'Farmacêutico' },
		{ name: 'Biomédico' },
		{ name: 'Piloto de Avião' },
		{ name: 'Engenheiro Civil' },
		{ name: 'Pintor' },
		{ name: 'Jornalista' },
		{ name: 'Cientista de Dados' },
		{ name: 'Chef de Cozinha' },
		{ name: 'Astrônomo' },
		{ name: 'Policial' },
		{ name: 'Terapeuta Ocupacional' },
		{ name: 'Geólogo' },
		{ name: 'Ator' },
		{ name: 'Economista' },
		{ name: 'Biólogo' },
		{ name: 'Dentista' },
		{ name: 'Engenheiro Elétrico' },
		{ name: 'Fotógrafo' },
		{ name: 'Piloto de Helicóptero' },
		{ name: 'Analista de Marketing' },
		{ name: 'Tradutor' },
		{ name: 'Engenheiro Mecânico' },
		{ name: 'Consultor Financeiro' },
		{ name: 'Desenvolvedor Front-end' },
		{ name: 'Artista Plástico' },
		{ name: 'Assistente Social' },
		{ name: 'Pescador' },
		{ name: 'Veterinário' },
		{ name: 'Piloto de Barco' },
		{ name: 'Terapeuta Respiratório' },
		{ name: 'Programador' },
	]

	for (const profession of professionData) {
		await prisma.profession.create({ data: profession })
	}

	console.log('Professions seeded successfully.')
}

async function seedInterests() {
	const interestsData = [
		{ name: 'Programação' },
		{ name: 'Leitura' },
		{ name: 'Música' },
		{ name: 'Esportes' },
		{ name: 'Viagens' },
		{ name: 'Filmes' },
		{ name: 'Artes' },
		{ name: 'Tecnologia' },
		{ name: 'Gastronomia' },
		{ name: 'Ciência' },
		{ name: 'Moda' },
		{ name: 'História' },
		{ name: 'Fotografia' },
		{ name: 'Idiomas' },
		{ name: 'Animais de Estimação' },
		{ name: 'Natureza' },
		{ name: 'Culinária' },
		{ name: 'Saúde e Bem-estar' },
		{ name: 'Automobilismo' },
		{ name: 'Política' },
		{ name: 'Educação' },
		{ name: 'Literatura' },
		{ name: 'Design' },
		{ name: 'Desenvolvimento Pessoal' },
		{ name: 'Religião' },
		{ name: 'Matemática' },
		{ name: 'Jogos' },
		{ name: 'Comédia' },
		{ name: 'Arquitetura' },
	]

	for (const interest of interestsData) {
		await prisma.interest.create({ data: interest })
	}

	console.log('Interests seeded successfully.')
}

async function seed() {
	await seedColleges()
	await seedCourses()
	await seedProfession()
	await seedInterests()
}

seed()
	.catch((e) => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})