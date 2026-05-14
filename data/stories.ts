export interface Scene {
  title: string
  text: string
}

export interface Story {
  slug: string
  title: string
  subtitle: string
  description: string
  readingTime: string
  ageRange: string
  emoji: string
  gradient: string
  bgColor: string
  accentColor: string
  bibleReference: string
  moralLesson: string
  scenes: Scene[]
}

export const stories: Story[] = [
  {
    slug: "criacao-do-mundo",
    title: "A Criação do Mundo",
    subtitle: "Como tudo começou",
    description:
      "No princípio, Deus criou o céu e a terra em seis dias maravilhosos. Descubra como a luz, o mar, as plantas, os animais e as pessoas foram feitos com muito amor!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🌍",
    gradient: "from-blue-400 via-teal-400 to-green-400",
    bgColor: "bg-blue-50",
    accentColor: "text-teal-700",
    bibleReference: "Gênesis 1–2",
    moralLesson:
      "Deus fez um mundo lindo cheio de amor. Tudo o que Ele criou é bom — inclusive você!",
    scenes: [
      {
        title: "Antes de Tudo...",
        text: `Era uma vez... antes de qualquer coisa existir.

Não havia sol, não havia estrelas, não havia árvores nem animais. Não havia nada além de escuridão e silêncio.

Mas Deus estava lá. E Deus tinha um plano muito especial.

— Vou criar um lugar lindo! — disse Deus com alegria.

E assim começou a maior aventura de todos os tempos: a criação do nosso maravilhoso mundo!`,
      },
      {
        title: "O Primeiro Dia: Vamos ter Luz!",
        text: `Deus olhou para a escuridão e disse com voz firme e cheia de amor:

— Que haja luz!

E de repente... FLASH! Uma luz brilhante encheu tudo! Era quente, era dourada, era linda!

Deus viu que a luz era boa e sorriu.

— Isso sim é lindo! — disse Ele.

Deus chamou a luz de "dia" e a escuridão de "noite". E aquele foi o primeiro dia.`,
      },
      {
        title: "O Mar e a Terra",
        text: `Nos dias seguintes, Deus continuou trabalhando com muito carinho.

Ele separou as águas e criou um céu azul lá em cima, cheio de nuvens brancas e fofas que pareciam algodão.

Depois Deus juntou as águas e fez os mares profundos e azuis. E onde não havia água, surgiu a terra firme com montanhas, vales e planícies.

— Agora vamos enfeitar! — disse Deus animado.

E da terra nasceram grama verdinha, flores de todas as cores, árvores altas com frutas gostosas e flores perfumadas que dançavam no vento.

O mundo estava ficando cada vez mais bonito!`,
      },
      {
        title: "O Sol, a Lua e as Estrelinhas",
        text: `Deus colocou o sol brilhante no céu para iluminar os dias e esquentar tudo com carinho. Criou também a lua prateada e milhares de estrelinhas que piscavam à noite, como luzinhas de festa no céu.

Então Deus encheu os mares de peixes coloridos, golfinhos saltitantes e baleias enormes que cantavam felizes.

No céu apareceram pássaros de todas as cores voando livre e alegres, chirpiando músicas bonitas.

E na terra? Leões, elefantes, girafas, borboletas, cachorros, gatos e tantos outros animais surgiram, todos correndo, pulando e brincando!

Deus olhou para tudo isso e disse:

— Que lindo! Está ficando perfeito!`,
      },
      {
        title: "A Criatura Mais Especial",
        text: `No sexto dia, Deus fez algo muito especial. Ele pegou um pouco de terra com as mãos e fez uma pessoa — o primeiro homem, chamado Adão.

Deus soprou com cuidado e o homem ganhou vida! Adão abriu os olhos e viu o mundo maravilhoso ao redor.

— Uau! — disse Adão encantado, olhando para as flores, os animais e o céu azul.

Depois Deus criou Eva, a primeira mulher, para ser companheira de Adão. Os dois ficaram muito felizes no jardim mais bonito do mundo, o Jardim do Éden.

Deus deu para eles um trabalho muito gostoso: cuidar do jardim e de todos os animais.

No sétimo dia, Deus descansou, muito satisfeito com tudo que havia criado.

E o mais importante de tudo? Você também faz parte dessa criação linda. Deus te fez com muito amor!`,
      },
    ],
  },
  {
    slug: "noe-e-a-grande-arca",
    title: "Noé e a Grande Arca",
    subtitle: "A história do homem, os animais e o arco-íris",
    description:
      "Noé era um homem muito bom e obediente. Quando Deus pediu para ele construir um barco gigante, ele obedeceu — e salvou sua família e todos os animais!",
    readingTime: "9 min",
    ageRange: "3–8 anos",
    emoji: "🚢",
    gradient: "from-indigo-400 via-blue-400 to-cyan-400",
    bgColor: "bg-indigo-50",
    accentColor: "text-indigo-700",
    bibleReference: "Gênesis 6–9",
    moralLesson:
      "Quando obedecemos a Deus e confiamos Nele, mesmo as situações mais difíceis têm um final lindo — como um arco-íris!",
    scenes: [
      {
        title: "Noé, o Homem Bom",
        text: `Há muitos e muitos anos, havia um homem chamado Noé. Ele tinha cabelos brancos e uma barba grande e cheia.

Noé era diferente de todos ao redor. Enquanto as outras pessoas só pensavam em coisas ruins, Noé amava a Deus de todo o coração. Ele era bondoso, honesto e cuidava bem da sua família.

Noé tinha três filhos: Sem, Cam e Jafé, e cada um tinha a sua esposa.

Todos os dias, Noé conversava com Deus, e isso deixava seu coração quentinho e tranquilo.`,
      },
      {
        title: "Deus Tem um Grande Plano",
        text: `Um dia, Deus falou com Noé:

— Noé, meu amigo, preciso te contar algo importante. Vou mandar uma grande chuva que vai cobrir toda a terra. Mas você e sua família estão protegidos, porque você me obedece.

Noé escutou com atenção.

— Quero que você construa uma arca — uma grande embarcação de madeira. E quando ela estiver pronta, coloque dentro a sua família e um casal de cada animal que existe!

Noé ficou olhando para o céu azul sem nenhuma nuvem. Construir um barco enorme? Com todos os animais? Parecia impossível!

Mas Noé confiou em Deus e disse:

— Tudo bem, Senhor. Farei tudo como você mandou!`,
      },
      {
        title: "Construindo a Arca",
        text: `E assim começou o maior projeto de construção que o mundo já viu!

Noé e seus filhos trabalharam dia após dia, martelando, serrando e pregando as tábuas de madeira. A arca era ENORME — mais longa do que um campo de futebol!

Os vizinhos passavam e riam:

— Hahaha! Olha o Noé fazendo um barco no meio do campo! Que tolice!

Mas Noé não ligava. Ele continuava trabalhando, cantando e sorrindo.

— Não me importo com as gozações. Eu confio em Deus! — dizia ele.

Depois de muito tempo de trabalho, a arca ficou pronta. Era linda, resistente e cheirava a madeira fresca!`,
      },
      {
        title: "Os Animais Chegando",
        text: `Então aconteceu algo incrível!

Os animais começaram a chegar de todos os lados — dois a dois, um machinho e uma feminha de cada espécie.

Girafa e girafa, elefante e elefante, leão e leoa, urso e ursa, coelho e coelha, borboleta e borboleta...

Eram tantos animais que parecia um desfile! Noé e seus filhos olhavam boquiabertos para aquela fila interminável.

Os animais entraram na arca calmamente, como se soubessem exatamente o que fazer. Era como se Deus estivesse guiando cada um deles.

Depois de todos entrarem, Deus fechou a porta da arca com um barulho suave.

E então começou a chover...`,
      },
      {
        title: "O Arco-Íris da Promessa",
        text: `A chuva caiu por quarenta dias e quarenta noites, sem parar. As águas subiram, subiram e cobriram tudo.

Mas dentro da arca, Noé, sua família e todos os animais estavam seguros e quentinhos. Às vezes o navio balançava, mas Deus cuidava de todos.

Por fim, a chuva parou. As águas foram baixando pouquinho a pouco...

A arca encostou em uma montanha. Noé soltou um pombo que voltou carregando um galho de oliveira no bico — sinal de que havia terra seca!

Quando saíram da arca, o sol brilhava forte e o cheiro de terra molhada era gostoso.

Então Deus disse:

— Olha para o céu, Noé!

E lá estava: um arco-íris imenso e colorido — vermelho, laranja, amarelo, verde, azul e violeta — cruzando o céu de ponta a ponta.

— Este arco-íris é minha promessa para você e para todos os seus filhos — disse Deus com carinho. — Nunca mais vou cobrir toda a terra com água. Toda vez que vocês virem o arco-íris, lembrem-se de que eu os amo!

E Noé e sua família abraçaram uns aos outros, cheios de alegria e gratidão.`,
      },
    ],
  },
  {
    slug: "jose-e-o-casaco-colorido",
    title: "José e o Casaco Colorido",
    subtitle: "A história do sonhador que nunca desistiu",
    description:
      "José era o filho favorito de seu pai Jacó, que lhe deu um casaco de muitas cores. Mas a inveja dos irmãos mudou tudo — até Deus transformar a tristeza em alegria!",
    readingTime: "10 min",
    ageRange: "4–8 anos",
    emoji: "🌈",
    gradient: "from-orange-400 via-yellow-400 to-amber-400",
    bgColor: "bg-orange-50",
    accentColor: "text-orange-700",
    bibleReference: "Gênesis 37–45",
    moralLesson:
      "Mesmo quando as coisas parecem muito tristes, Deus tem um plano lindo. Nunca desista!",
    scenes: [
      {
        title: "A Família de Jacó",
        text: `Havia uma vez um homem chamado Jacó que tinha doze filhos. Era uma família grande e barulhenta, cheia de histórias e aventuras!

O filho favorito de Jacó era o jovem José, um rapaz de cabelos escuros e olhos brilhantes que adorava sonhar.

José tinha um talento muito especial: ele conseguia entender o que os sonhos significavam!

Às vezes, à noite, enquanto dormia, Deus lhe mostrava imagens e mensagens em seus sonhos.

Os irmãos mais velhos observavam José e sentiam algo amargo no coração. Uma coisa chamada inveja...`,
      },
      {
        title: "O Presente Especial",
        text: `Um dia, Jacó chamou José e disse com um sorriso enorme:

— Tenho um presente para você, meu filho!

E tirou de dentro de um baú um casaco lindo, feito com tecidos de todas as cores: vermelho vibrante, azul royal, amarelo ouro, verde esmeralda e roxo real.

Era o casaco mais bonito que José já tinha visto!

— Obrigado, pai! — disse José, abraçando o pai com força.

Mas quando os irmãos viram o casaco, seus rostos ficaram vermelhos de inveja.

— Por que José ganha presente especial e nós não? — resmungaram entre si.

E a inveja foi crescendo nos corações deles, como erva daninha...`,
      },
      {
        title: "Os Sonhos de José",
        text: `José correu para contar um sonho aos irmãos:

— Sonhei que estávamos amarrando feixes de trigo no campo. O meu feixe ficou em pé, e os feixes de vocês se curvaram para o meu!

Os irmãos ficaram furiosos:

— Você acha que vai ser rei sobre nós?!

Noutra noite, José sonhou de novo e contou:

— Sonhei que o sol, a lua e onze estrelas se curvavam para mim!

Até o pai Jacó achou estranho:

— Que sonho é esse? Sua mãe, seu pai e seus irmãos vão se curvar a você?

Os irmãos cada vez mais com raiva...`,
      },
      {
        title: "A Triste Separação",
        text: `Um dia, os irmãos estavam cuidando das ovelhas longe de casa. Jacó mandou José levá-los comida.

Quando os irmãos viram José se aproximando com seu casaco colorido, combinaram:

— Vamos se livrar desse sonhador!

Com crueldade, eles arrancaram o casaco de José, jogaram-no numa cisterna vazia e o venderam para mercadores que iam para o Egito.

José chorou muito. Ele não entendia por que seus próprios irmãos fariam isso.

Os irmãos pegaram o casaco, colocaram sangue de cabra nele e voltaram para casa com o coração pesado.

— Um animal selvagem matou José! — mentiram para o pai.

Jacó ficou arrasado. E José estava longe, longe...`,
      },
      {
        title: "O Plano de Deus",
        text: `No Egito, José enfrentou dias muito difíceis. Mas mesmo nos momentos mais tristes, Deus estava com ele.

Por causa do seu dom de interpretar sonhos, José conseguiu explicar um sonho do Faraó — o rei do Egito — e foi nomeado o segundo homem mais poderoso do país!

Anos depois, uma grande seca chegou. A fome chegou a todo o mundo... inclusive à família de Jacó.

Os irmãos de José precisaram viajar ao Egito para buscar comida. Quando chegaram, ficaram cara a cara com o poderoso governador...

Era José! Vivo, bem cuidado e sorrindo.

Os irmãos estavam com medo, mas José correu para abraçá-los com lágrimas nos olhos:

— Não tenham medo! O que vocês queriam para o mal, Deus transformou em bem. Fui trazido aqui para salvar muitas vidas — inclusive a nossa família!

E assim, José, Jacó e todos os irmãos se reuniram novamente — com choro, abraços e muita alegria.

O sonhador que nunca desistiu viu o plano de Deus se cumprir de um jeito que nunca imaginou!`,
      },
    ],
  },
  {
    slug: "o-bebe-moises",
    title: "O Bebê Moisés",
    subtitle: "A criancinha da cestinha",
    description:
      "Quando Moisés nasceu, sua mãe teve uma ideia muito especial para protegê-lo: colocá-lo em uma cestinha no rio Nilo. Descubra como Deus cuidou desse bebê especial!",
    readingTime: "7 min",
    ageRange: "3–7 anos",
    emoji: "👶",
    gradient: "from-green-400 via-emerald-400 to-teal-500",
    bgColor: "bg-green-50",
    accentColor: "text-emerald-700",
    bibleReference: "Êxodo 2:1–10",
    moralLesson:
      "Deus cuida de cada criança com amor. Você é muito especial para Ele!",
    scenes: [
      {
        title: "O Povo de Deus no Egito",
        text: `Há muito tempo, o povo de Deus — os hebreus — vivia no Egito. Eles haviam chegado como convidados, mas com o passar dos anos o Faraó, o rei do Egito, se tornou cruel.

— Os hebreus estão crescendo demais! — disse o Faraó, batendo o punho na mesa.

E ele fez algo muito injusto: ordenou que os hebreus trabalhassem como escravos, carregando pedras pesadas sob o sol quente.

Mas mesmo assim, o povo rezava e confiava que Deus não os havia esquecido.`,
      },
      {
        title: "A Mãe Corajosa",
        text: `Numa família hebreia, nasceu um bebê. Mas que bebê! Tinha olhos grandes e brilhantes, bochechas redondas e um sorriso que derretia o coração de qualquer pessoa.

A mãe olhava para o filho e sentia seu coração apertar. O Faraó havia dado uma ordem terrível: que todos os bebês hebreus fossem jogados no rio.

— Não vou deixar nada de ruim acontecer com você! — sussurrou ela, abraçando o bebê com força.

Por três meses, ela escondeu o bebê em casa. Quando ele chorava, ela o embalava cantando baixinho para ninguém ouvir.

Mas logo ele cresceria e ficaria difícil de esconder...`,
      },
      {
        title: "A Cestinha Mágica",
        text: `A mãe pensou e pensou. E teve uma ideia iluminada por Deus!

Ela pegou juncos — plantas que crescem na beira do rio — e trançou com todo cuidado uma cestinha resistente. Depois colocou alcatrão por fora para que a água não entrasse.

Forrouinha por dentro com tecido macio e colocou o bebê lá dentro, docinho e quentinho.

Com o coração cheio de fé, ela foi ao rio Nilo e colocou a cestinha entre as plantas da margem.

— Cuide dele, Senhor — rezou ela em voz baixa, com lágrimas escorrendo pelo rosto.

Miriam, a irmã mais velha do bebê, ficou escondida entre as plantas observando de longe, pronta para ver o que aconteceria.`,
      },
      {
        title: "A Princesa Encontra o Bebê",
        text: `Naquele mesmo dia, a filha do Faraó veio ao rio para se banhar com suas criadas.

De repente, ela viu algo se mexer entre as plantas.

— O que é aquilo? — perguntou curiosa, apontando para a cestinha.

Uma criada foi buscar. Quando abriram, o bebê olhou para a princesa com seus olhões... e começou a chorar.

— Ah! É um bebê hebreuinho! — disse a princesa, pegando ele no colo com ternura.

O coraçãozinho dela se derreteu de amor!

— Coitadinho... vou cuidar de você! Será meu filho! — disse ela com carinho.

Miriam, que estava observando tudo, correu até a princesa:

— Posso chamar uma mulher hebreia para amamentar o bebê para você?

— Sim, vá! — disse a princesa sorrindo.

Miriam foi correndo chamar... a própria mãe do bebê!`,
      },
      {
        title: "A Surpresa de Deus",
        text: `A mãe voltou com Miriam e ficou de frente para a princesa, com o coração quase saltando do peito.

— Cuide desse bebê para mim — disse a princesa — e eu pagarei por isso.

A mãe pegou o filho nos braços, e uma lágrima de alegria escorregou pelo seu rosto. Ela iria cuidar do próprio filho, com a proteção do palácio!

Deus tinha feito algo incrível: transformou o plano mais triste no mais lindo desfecho!

O bebê cresceu feliz e seguro. Quando ficou maior, a princesa o chamou para viver no palácio e deu a ele um nome:

— Seu nome será Moisés — que significa "tirado das águas".

E Moisés cresceu forte, sabendo que havia algo muito especial reservado para ele...`,
      },
    ],
  },
  {
    slug: "davi-e-golias",
    title: "Davi e Golias",
    subtitle: "O menino corajoso que derrotou o gigante",
    description:
      "Todo mundo tinha medo do gigante Golias. Menos um pastorzinho chamado Davi, que sabia que com Deus ao lado, nada é impossível!",
    readingTime: "9 min",
    ageRange: "4–8 anos",
    emoji: "⚔️",
    gradient: "from-rose-400 via-red-400 to-orange-500",
    bgColor: "bg-rose-50",
    accentColor: "text-rose-700",
    bibleReference: "1 Samuel 17",
    moralLesson:
      "Não importa o tamanho do problema — com Deus ao seu lado, você pode vencer qualquer gigante!",
    scenes: [
      {
        title: "O Gigante Aterrorizante",
        text: `Os filisteus, inimigos do povo de Israel, tinham um guerreiro muito especial — e muito assustador.

Seu nome era Golias, e ele era... enorme!

Era tão alto que sua cabeça ficava no nível da janela do segundo andar. Sua armadura pesava mais do que três crianças juntas. E sua voz? Quando ele gritava, as árvores tremiam!

Todos os dias, Golias saía para o vale e gritava para o exército de Israel:

— HEY! Mandem alguém para lutar comigo! Se ele ganhar, viramos escravos de vocês. Se EU ganhar, vocês serão nossos escravos! Hahaha!

Os soldados de Israel olhavam uns para os outros, com joelhos bambos e faces pálidas. Ninguém queria enfrentar aquele monstro.`,
      },
      {
        title: "O Pastorzinho Davi",
        text: `Num vilarejo próximo, havia um menino chamado Davi. Ele era jovem, de cabelos ruivos e rosto cheio de sardas, com um sorriso largo e olhos corajosos.

O trabalho de Davi era cuidar das ovelhas do seu pai. Todos os dias ele levava o rebanho para pastar, tocava sua harpa e cantava para Deus.

Mas Davi não era qualquer pastorzinho! Uma vez, quando um leão e depois um urso tentaram roubar uma ovelha, Davi foi corajoso:

— Deus me ajudou a enfrentar o leão e o urso. Ele também me ajuda em tudo!

Um dia, seu pai disse:

— Davi, leve comida para seus irmãos que estão no acampamento do exército.

E Davi foi, cantando pelo caminho.`,
      },
      {
        title: "Davi no Acampamento",
        text: `Quando Davi chegou ao acampamento, ouviu aquela voz trovejante:

— HEY! Onde está o guerreiro de Israel?! Covardes! Hahahaha!

Davi olhou e viu o gigante Golias do outro lado do vale, com sua armadura brilhante e lança enorme.

Os soldados fugiam com medo.

Mas Davi franziu a testa e disse:

— Quem é esse filisteu que ousa desafiar o exército do Deus vivo?!

Os soldados olharam para ele espantados.

O rei Saul ouviu falar do jovem pastorzinho e mandou chamá-lo.

— Posso lutar contra esse gigante! — disse Davi ao rei.

— Você? Você é apenas um menino! — respondeu o rei Saul.

— Eu cuido das ovelhas do meu pai. Quando um leão ou urso tentou atacar, eu lutei e venci! — disse Davi com calma. — Deus me livrou de todos eles. Ele me livrará também de Golias.

O rei Saul olhou para o menino por um longo tempo...

— Vá. E que Deus esteja com você!`,
      },
      {
        title: "Cinco Pedrosas no Rio",
        text: `Saul quis colocar sua armadura em Davi — capacete de bronze, colete de malha, espada.

Mas Davi deu alguns passos e quase caiu.

— Não consigo me mexer com tudo isso! — disse ele, tirando a armadura pesada. — Não estou acostumado.

E Davi foi ao riacho. Abaixou, procurou com cuidado e escolheu cinco pedrosas lisas e redondas.

As colocou na sua bolsa de pastor, pegou sua funda de couro — uma espécie de estilingue — e foi em direção ao gigante.

Do outro lado, Golias olhou e começou a gargalhar:

— Que é isso?! Mandam um menino com um pauzinho para me enfrentar? Hahahaha! Vou te transformar em almoço dos pássaros!

Mas Davi respondeu sem tremor na voz:

— Você vem com espada, lança e escudo. Mas eu venho em nome do SENHOR, o Deus de Israel! A batalha é do Senhor!`,
      },
      {
        title: "A Vitória Inesperada",
        text: `Golias avançou pesado e barulhento.

Davi correu em direção ao gigante!

Com mãos firmes, enfiou a mão na bolsa, pegou uma pedra. Girou a funda no ar — uma, duas, três vezes — e soltou!

A pedra voou certeira e atingiu Golias bem no meio da testa.

PLOM!

O gigante cambaleou... e caiu no chão como uma árvore derrubada. Um barulho enorme ecoou pelo vale.

Silêncio total.

Depois... o exército de Israel soltou um grito enorme de alegria!

Os filisteus viram seu campeão caído e fugiram correndo.

Todos vieram ver Davi, o menino pastor que havia vencido o gigante com fé e uma pedra pequena.

E Davi levantou os olhos para o céu e agradeceu:

— Obrigado, Senhor! Com você, tudo é possível!

E assim o mundo aprendeu uma lição para sempre: não é o tamanho do guerreiro que importa — é o tamanho da fé!`,
      },
    ],
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
