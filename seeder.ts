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
	await seedInterests()
}

seed()
	.catch((e) => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})